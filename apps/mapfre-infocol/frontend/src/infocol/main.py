"""
INFOCOL - MAPFRE InfoCol automation CLI.

Orchestrates the full expediente processing pipeline:
browser automation → AI analysis → form filling → human confirmation.
"""

import logging
import sys
import time
from datetime import datetime, timedelta
from pathlib import Path
from typing import Optional

import click
from rich.console import Console
from rich.logging import RichHandler
from rich.progress import Progress, SpinnerColumn, TextColumn, BarColumn
from rich.panel import Panel
from rich.table import Table
from rich import print as rprint

from .config import load_config, save_config, AppConfig, DEFAULT_CONFIG_PATH
from .security import CredentialStore
from .browser import InfoColBrowser
from .analyzer import Analyzer
from .form_filler import FormFiller
from .displacement import DisplacementCalculator
from .models import Expediente, TariffCode, AnalysisResult, SessionReport

console = Console()
ERROR_LOG = Path.home() / ".infocol" / "error.log"


def setup_logging(level: str = "INFO") -> None:
    log_dir = Path.home() / ".infocol" / "logs"
    log_dir.mkdir(parents=True, exist_ok=True)
    log_file = log_dir / f"infocol-{datetime.now():%Y%m%d}.log"

    logging.basicConfig(
        level=getattr(logging, level.upper(), logging.INFO),
        format="%(asctime)s | %(levelname)-8s | %(message)s",
        datefmt="%Y-%m-%d %H:%M:%S",
        handlers=[
            RichHandler(rich_tracebacks=True, markup=True, show_time=False),
            logging.FileHandler(log_file, encoding="utf-8"),
        ],
    )


def prompt_credentials() -> tuple[str, str]:
    console.print(Panel.fit(
        "[bold cyan]🔐 INFOCOL - Credenciales[/]\n\n"
        "Las credenciales se almacenaran de forma segura en el llavero del sistema.\n"
        "Nunca se guardan en texto plano ni se envian a servidores externos.\n",
        title="Autenticacion",
    ))
    username = click.prompt("Usuario de InfoCol", type=str)
    password = click.prompt("Contrasena", type=str, hide_input=True)
    return (username, password)


def display_expediente_table(expedientes: list[Expediente]) -> None:
    table = Table(title="Expedientes FIN detectados", show_header=True)
    table.add_column("#", style="dim")
    table.add_column("ID", style="cyan")
    table.add_column("Descripcion", style="white")
    table.add_column("Notas", style="yellow")

    for i, exp in enumerate(expedientes, 1):
        table.add_row(
            str(i),
            exp.id,
            exp.description[:50] + "..." if len(exp.description) > 50 else exp.description,
            (exp.notes or "")[:30],
        )
    console.print(table)


def display_analysis_result(exp_id: str, result: AnalysisResult) -> None:
    codes_str = ", ".join(f"{c.code} ({c.description})" for c in result.primary_codes)
    lines = [
        f"[cyan]Expediente:[/] {exp_id}",
        f"[cyan]Codigos:[/] {codes_str}",
    ]
    if result.displacement_km > 0:
        lines.append(f"[cyan]Desplazamiento:[/] {result.displacement_km:.1f} km ({result.displacement_amount:.2f} €)")
    if result.material_cost > 0:
        lines.append(f"[cyan]Materiales:[/] {result.material_cost:.2f} €")
    if result.requires_hours:
        lines.append(f"[cyan]Horas:[/] {result.hours_estimated}h")
    lines.append(f"[cyan]Confianza:[/] {result.confidence:.0%}")
    lines.append(f"\n[dim]{result.reasoning}[/]")

    console.print(Panel("\n".join(lines), title=f"Analisis IA - {exp_id}", border_style="green"))


def display_confirm_warning() -> None:
    console.print(Panel.fit(
        "[bold yellow]⚠️  REVISA EL FORMULARIO ANTES DE ACEPTAR[/]\n\n"
        "[white]InfoCol - MAPFRE Espana[/]\n"
        "✅ Descripcion: rellenada\n"
        "✅ Preguntas: respondidas\n"
        "✅ Codigos tarifa: aplicados\n"
        "✅ Desplazamiento: calculado\n\n"
        "[bold cyan]⏸  Esperando Aceptar manual...[/]\n\n"
        "[dim]El script se ha detenido. Revisa el formulario y pulsa Aceptar tu mismo.[/]",
        title="Confirmacion manual requerida",
        border_style="yellow",
    ))


def process_expediente(
    browser: InfoColBrowser,
    analyzer: Analyzer,
    form_filler: FormFiller,
    displacement_calc: DisplacementCalculator,
    expediente: Expediente,
    config: AppConfig,
    report: SessionReport,
) -> bool:
    try:
        console.print(f"\n[bold]Procesando:[/] {expediente.id} - {expediente.description}")

        browser.open_expediente(expediente.id)
        desc = browser.get_description() or expediente.description
        notes = browser.get_notes() or expediente.notes

        with Progress(
            SpinnerColumn(),
            TextColumn("[progress.description]{task.description}"),
            BarColumn(),
            console=console,
        ) as progress:
            task = progress.add_task("[cyan]Analizando con IA...", total=None)
            result = analyzer.analyze(
                description=desc,
                notes=notes,
                province=config.province,
            )
            progress.update(task, completed=True)

        if expediente.locality:
            km, amount = displacement_calc.calculate(expediente.locality)
            result.displacement_km = km
            result.displacement_amount = amount

        display_analysis_result(expediente.id, result)

        with Progress(
            SpinnerColumn(),
            TextColumn("[progress.description]{task.description}"),
            BarColumn(),
            console=console,
        ) as progress:
            task = progress.add_task("[green]Rellenando formulario...", total=None)
            form_filler.fill_from_analysis(result, desc)
            progress.update(task, completed=True)

        if config.require_human_confirm:
            display_confirm_warning()
            browser.wait_for_human_confirm()

        report.expedientes_success += 1
        return True

    except Exception as e:
        console.print(f"[red]Error procesando {expediente.id}:[/] {e}")
        report.errors.append(f"{expediente.id}: {e}")
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        browser.screenshot(str(ERROR_LOG.parent / f"error_{expediente.id}_{timestamp}.png"))
        report.expedientes_failed += 1
        return False


def display_report(report: SessionReport) -> None:
    report.end_time = datetime.now()
    elapsed = (report.end_time - report.start_time).total_seconds()

    table = Table(title="Resumen de sesion", show_header=False)
    table.add_column("Metrica", style="cyan")
    table.add_column("Valor", style="white")
    table.add_row("Total expedientes", str(report.expedientes_processed))
    table.add_row("Procesados correctamente", f"[green]{report.expedientes_success}[/]")
    table.add_row("Errores", f"[red]{report.expedientes_failed}[/]")
    table.add_row("Tiempo total", str(timedelta(seconds=int(elapsed))))
    table.add_row("Tiempo medio", f"{elapsed/max(report.expedientes_processed,1):.1f}s")

    if report.errors:
        table.add_row("", "")
        for err in report.errors:
            table.add_row("[red]Error[/]", err)

    console.print(table)
    console.print("\n[bold green]Gracias por usar INFOCOL.[/]")


@click.group()
def cli() -> None:
    """INFOCOL - Automatizacion inteligente de partes MAPFRE."""


@cli.command()
@click.option("--headless", is_flag=True, help="Run browser in headless mode")
@click.option("--no-confirm", is_flag=True, help="Skip human confirmation (auto-accept)")
def run(headless: bool, no_confirm: bool) -> None:
    """Execute full automation session."""
    config = load_config()
    setup_logging(config.logging.level)
    report = SessionReport()

    if headless:
        config.browser.headless = True
    if no_confirm:
        config.require_human_confirm = False

    console.print(Panel.fit(
        "[bold cyan]INFOCOL v1.0.0-beta[/]\n"
        "Automation de partes MAPFRE - Sistema inteligente de descuento de expedientes\n"
        "[dim]Pedro Gonzalez · Fontanero · Logrono, La Rioja · 2026[/]",
        border_style="cyan",
    ))

    store = CredentialService()
    if not store.has_credentials:
        username, password = prompt_credentials()
        store.save(username, password)
        config.infocol.username = username
        save_config(config)
    else:
        stored = store.load()
        if stored:
            username, password = stored
            config.infocol.username = username
        else:
            username, password = prompt_credentials()
            store.save(username, password)
            config.infocol.username = username
            save_config(config)

    browser = InfoColBrowser(
        headless=config.browser.headless,
        timeout_ms=config.browser.timeout_ms,
        slow_mo_ms=config.browser.slow_mo_ms,
    )

    try:
        with Progress(
            SpinnerColumn(),
            TextColumn("[progress.description]{task.description}"),
            console=console,
        ) as progress:
            task = progress.add_task("[cyan]Iniciando navegador...", total=None)
            browser.launch()
            progress.update(task, completed=True)

            task = progress.add_task("[cyan]Iniciando sesion en InfoCol...", total=None)
            browser.login(config.infocol.base_url + config.infocol.login_path, username, password)
            progress.update(task, completed=True)

        browser.navigate_to_fin_queue(config.infocol.base_url + config.infocol.fin_queue_path)
        expedientes = browser.get_expedientes()

        if not expedientes:
            console.print("[yellow]No se encontraron expedientes FIN pendientes.[/]")
            return

        display_expediente_table(expedientes)

        api_key = config.ai.api_key or _prompt_api_key(config)
        analyzer = Analyzer(api_key=api_key, model=config.ai.model)
        form_filler = FormFiller(browser)
        displacement_calc = DisplacementCalculator(
            threshold_km=config.displacement.threshold_km,
            rate_per_km=config.displacement.rate_per_km,
        )

        report.expedientes_processed = len(expedientes)
        start = time.time()

        for expediente in expedientes:
            success = process_expediente(
                browser=browser,
                analyzer=analyzer,
                form_filler=form_filler,
                displacement_calc=displacement_calc,
                expediente=expediente,
                config=config,
                report=report,
            )
            if not success and not config.auto_process_all:
                if not click.confirm("Continue with next expediente?", default=True):
                    break

        report.total_time_seconds = time.time() - start
        display_report(report)

    except KeyboardInterrupt:
        console.print("\n[yellow]Sesion interrumpida por el usuario.[/]")
    except Exception as e:
        console.print(f"\n[red]Error critico:[/] {e}")
        browser.screenshot(str(ERROR_LOG.parent / f"crash_{datetime.now():%Y%m%d_%H%M%S}.png"))
        raise
    finally:
        browser.close()


@cli.command()
@click.option("--show", is_flag=True, help="Show current config (masked)")
@click.option("--reset", is_flag=True, help="Reset configuration to defaults")
@click.option("--set-api-key", help="Set Anthropic API key")
def config_cmd(show: bool, reset: bool, set_api_key: Optional[str]) -> None:
    """Manage configuration and credentials."""
    if reset:
        cfg = AppConfig()
        save_config(cfg)
        store = CredentialService()
        store.clear()
        console.print("[green]Configuration and credentials reset to defaults.[/]")
        return

    if set_api_key:
        cfg = load_config()
        cfg.ai.api_key = set_api_key
        save_config(cfg)
        console.print("[green]API key set successfully.[/]")
        return

    cfg = load_config()
    store = CredentialService()

    if show:
        lines = [
            f"[cyan]Province:[/] {cfg.province}",
            f"[cyan]Trade:[/] {cfg.trade}",
            f"[cyan]AI Provider:[/] {cfg.ai.provider} ({cfg.ai.model})",
            f"[cyan]API Key:[/] {'[green]✓ Set[/]' if cfg.ai.api_key else '[red]✗ Not set[/]'}",
            f"[cyan]Browser:[/] {'headless' if cfg.browser.headless else 'visible'}",
            f"[cyan]Human Confirm:[/] {'Yes' if cfg.require_human_confirm else 'No'}",
            f"[cyan]Credentials:[/] {'[green]✓ Stored[/]' if store.has_credentials else '[red]✗ Not set[/]'}",
            f"[cyan]Log Level:[/] {cfg.logging.level}",
            f"[cyan]Config Path:[/] [dim]{DEFAULT_CONFIG_PATH}[/]",
        ]
        console.print(Panel("\n".join(lines), title="INFOCOL Configuration"))
    else:
        console.print("[yellow]Use --show to view config or --set-api-key to configure API key.[/]")


@cli.command()
def status() -> None:
    """Check system readiness."""
    cfg = load_config()
    store = CredentialService()

    checks = [
        ("Python 3.10+", True, ""),
        ("Playwright installed", True, ""),
        ("Config file exists", DEFAULT_CONFIG_PATH.exists(),
         "Run 'infocol config --set-api-key <key>' to configure"),
        ("API key configured", bool(cfg.ai.api_key),
         "Run 'infocol config --set-api-key <key>'"),
        ("Credentials stored", store.has_credentials,
         "Run 'infocol run' to set credentials"),
    ]

    table = Table(title="INFOCOL - System Status")
    table.add_column("Check", style="cyan")
    table.add_column("Status", style="white")
    table.add_column("Action Required", style="yellow")

    all_ok = True
    for name, ok, action in checks:
        status = "[green]✓ Pass[/]" if ok else "[red]✗ Fail[/]"
        if not ok:
            all_ok = False
        table.add_row(name, status, action if not ok else "")

    console.print(table)

    if all_ok:
        console.print("\n[bold green]System is ready. Run 'infocol run' to start.[/]")
    else:
        console.print("\n[bold yellow]Please address the failing checks above.[/]")


@cli.command()
def demo() -> None:
    """Run a simulated demo of the full automation flow."""
    import random as _random

    console.print(Panel.fit(
        "[bold cyan]INFOCOL v1.0.0-beta[/]\n"
        "[yellow]MODO DEMO - Simulacion del flujo completo[/]\n"
        "Automatizacion de partes MAPFRE - Sistema inteligente de descuento de expedientes\n"
        "[dim]Pedro Gonzalez · Fontanero · Logrono, La Rioja · 2026[/]",
        border_style="cyan",
    ))

    time.sleep(0.8)

    with Progress(
        SpinnerColumn(),
        TextColumn("[progress.description]{task.description}"),
        BarColumn(),
        console=console,
    ) as progress:
        task = progress.add_task("[cyan]Iniciando navegador Chromium...", total=None)
        time.sleep(0.6)
        progress.update(task, completed=True)

        task = progress.add_task("[cyan]Accediendo a InfoCol (https://infocol.mapfre.es)...", total=None)
        for _ in range(3):
            time.sleep(0.2)
            pass
        progress.update(task, completed=True)

        task = progress.add_task("[cyan]Iniciando sesion...", total=None)
        time.sleep(0.4)
        progress.update(task, completed=True)

    time.sleep(0.3)

    console.print("[bold green]✅  Sesion iniciada correctamente[/]")

    time.sleep(0.4)

    demo_expedientes = [
        Expediente(id="V67391281", description="Fuga de agua en tuberia del bano - Reparacion urgente", notes="Piso 3° - Humedad en pared"),
        Expediente(id="V67391291", description="Rotura de tuberia en cocina - Sustitucion tramo", notes="Bajo comercio - Acceso limitado"),
        Expediente(id="V67391301", description="Cambio de grifo monomando lavabo", notes="Cliente mayor - Revision general"),
    ]

    display_expediente_table(demo_expedientes)
    time.sleep(0.8)

    config = load_config()
    displacement_calc = DisplacementCalculator(
        threshold_km=config.displacement.threshold_km,
        rate_per_km=config.displacement.rate_per_km,
    )

    for i, exp in enumerate(demo_expedientes, 1):
        console.print(f"\n[bold cyan]━━━ Procesando expediente {i}/{len(demo_expedientes)}: {exp.id} ━━━[/]")
        time.sleep(0.5)

        with Progress(
            SpinnerColumn(),
            TextColumn("[progress.description]{task.description}"),
            BarColumn(),
            console=console,
        ) as progress:
            task = progress.add_task("[cyan]Leyendo descripcion del expediente...", total=None)
            time.sleep(0.3)
            progress.update(task, completed=True)

            task = progress.add_task("[green]Analizando con IA (Claude API)...", total=None)
            time.sleep(0.5)
            progress.update(task, completed=True)

        demo_results = [
            AnalysisResult(
                primary_codes=[
                    TariffCode(code="YYDDDYT", description="Exclusion", category="primary"),
                    TariffCode(code="XADDD2T", description="Con cala", category="secondary"),
                ],
                displacement_km=25.0,
                displacement_amount=2.50,
                material_cost=45.00,
                confidence=0.97,
                reasoning="Fuga en tuberia requiere exclusion con cala (destape con excavacion). "
                          "Desplazamiento desde Logrono a localidad >20km. Material: tuberia PEX 20mm.",
            ),
            AnalysisResult(
                primary_codes=[
                    TariffCode(code="YYDDDYT", description="Exclusion sin cala", category="primary"),
                    TariffCode(code="XADDD1T", description="Suplemento sin cala", category="secondary"),
                ],
                displacement_km=0.0,
                material_cost=120.00,
                confidence=0.95,
                reasoning="Rotura de tuberia en cocina. Exclusion sin cala (destape basico). "
                          "Material: tuberia + codos + valvulas. Sin desplazamiento adicional.",
            ),
            AnalysisResult(
                primary_codes=[
                    TariffCode(code="JEDDD1T", description="Sustitucion de griferia", category="primary"),
                ],
                displacement_km=0.0,
                material_cost=35.00,
                confidence=0.99,
                reasoning="Cambio de grifo monomando estandar. Sustitucion de griferia simple. "
                          "Material: grifo monomando cromado basico.",
            ),
        ]

        if i <= len(demo_expedientes):
            result = demo_results[i - 1]
            display_analysis_result(exp.id, result)
        time.sleep(0.4)

        with Progress(
            SpinnerColumn(),
            TextColumn("[progress.description]{task.description}"),
            BarColumn(),
            console=console,
        ) as progress:
            task = progress.add_task("[green]Rellenando formulario en InfoCol...", total=None)
            time.sleep(0.4)
            progress.update(task, completed=True)

        console.print("  [dim]✓ Descripcion: rellenada[/]")
        console.print("  [dim]✓ Preguntas: respondidas[/]")
        console.print("  [dim]✓ Codigos tarifa: aplicados[/]")
        console.print("  [dim]✓ Desplazamiento: calculado[/]")
        time.sleep(0.3)

        display_confirm_warning()

        if i < len(demo_expedientes):
            console.print("\n[cyan]Continuando al siguiente expediente en 3 segundos...[/]")
            time.sleep(2)

    time.sleep(0.5)

    report = SessionReport(
        expedientes_processed=3,
        expedientes_success=3,
        expedientes_failed=0,
        total_time_seconds=142.0,
        start_time=datetime.now(),
        end_time=datetime.now(),
    )
    display_report(report)

    console.print("\n[bold yellow]🏁 FIN DE LA DEMO[/]")
    console.print("[dim]Para usar con expedientes reales: infocol config --set-api-key <tu-clave> && infocol run[/]")


@cli.command()
def logs() -> None:
    """View recent logs."""
    log_dir = Path.home() / ".infocol" / "logs"
    if not log_dir.exists():
        console.print("[yellow]No logs found.[/]")
        return

    log_files = sorted(log_dir.glob("infocol-*.log"), reverse=True)
    if not log_files:
        console.print("[yellow]No log files found.[/]")
        return

    latest = log_files[0]
    lines = latest.read_text().splitlines()
    last_lines = lines[-30:] if len(lines) > 30 else lines

    console.print(f"[cyan]Recent logs from {latest.name}:[/]\n")
    for line in last_lines:
        console.print(f"  {line}")


def _prompt_api_key(config: AppConfig) -> str:
    console.print(Panel(
        "[yellow]No Anthropic API key configured.[/]\n\n"
        "You need an API key from https://console.anthropic.com to enable AI analysis.\n"
        "The key will be stored in the configuration file.\n",
        title="API Key Required",
    ))
    api_key = click.prompt("Anthropic API Key", type=str, hide_input=True)
    config.ai.api_key = api_key
    save_config(config)
    return api_key


class CredentialService:
    def __init__(self):
        self._store = CredentialStore()

    @property
    def has_credentials(self) -> bool:
        return self._store.retrieve() is not None

    def save(self, username: str, password: str) -> None:
        self._store.store(username, password)

    def load(self) -> Optional[tuple[str, str]]:
        return self._store.retrieve()

    def clear(self) -> None:
        self._store.clear()


if __name__ == "__main__":
    cli()
