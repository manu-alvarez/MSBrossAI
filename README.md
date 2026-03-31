MSBrossAI - Centralized unification of MSBROSS projects
Purpose: merge local, web (msbross.me), VPS and GitHub repos into a single, coherent ecosystem.

Scope: 9 apps (as requested) including Arantxa Translate PRO, CombiPro, Döhler, Edelweiss, IAPuta OS, LiveKit Nikolina, LogiSearch, Moko-Tools, TaskFlowPro.

- Local workspace: /Users/manu/Desktop/MSBrossAI
- Web dashboard: msbross.me (Dashboard will index all apps)
- VPS deployment: /home/manuel/MSBrossAI
- New GitHub repo: MSBrossAI

Structure (propuesta):
- dashboard/        - Dashboard index (static HTML prototype)
- apps/             - Each app with a minimal README and links to its deployment
- shared/           - Common utilities and services
- deploy/           - Local / VPS deployment scripts and CI pipelines
- docs/             - Architecture diagrams (Mermaid) and app-specific docs

Notas:
- Este repo es el planificador y espejo de coordinación. La implementación real de cada app se mantiene en sus repos individuales; MSBrossAI solo ofrece la capa unificadora y el dashboard de acceso rápido.
- Se priorizará la seguridad y claridad de despliegue; se evitarán datos sensibles en este repositorio.
