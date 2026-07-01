export const TEMARIO = [
  {id:"m0", level:"A1", title:"Arranque · Presentarse y el equipo", desc:"Decir quién eres, tu rol (Sysadmin, Helpdesk) y qué dispositivos usas.", topics:["I am / I work as","Computer, screen, keyboard","Basic networking"]},
  {id:"m1", level:"A1 - A2", title:"Rutinas · Mi jornada de soporte", desc:"Presente simple. Describir tareas diarias (revisar tickets, instalar software).", topics:["Present Simple","Frequency adverbs","Install, update, check"]},
  {id:"m2", level:"A2", title:"Describir · Problemas y síntomas", desc:"Explicar qué falla. 'The screen is blank', 'The server is down'.", topics:["Is/Are down","Broken, blank, slow","There is / There are"]},
  {id:"m3", level:"A2 - B1", title:"Helpdesk · La primera llamada", desc:"Contestar al teléfono, pedir paciencia y entender al usuario frustrado.", topics:["Can you hear me?","Let me check","Hold on please"]},
  {id:"m4", level:"A2 - B1", title:"Pasado · Qué ocurrió", desc:"Pasado simple. Describir qué falló ayer o qué cambios hiciste en el sistema.", topics:["Past Simple","Yesterday, last night","Crashed, failed, rebooted"]},
  {id:"m5", level:"B1", title:"Redes · Conectividad y configuración", desc:"Hablar de IPs, routers, ping, latencia y cortes de red.", topics:["IP address, subnet","Ping, latency, packet loss","Router, switch, firewall"]},
  {id:"m6", level:"B1", title:"Sistemas · Windows y Linux", desc:"Comandos básicos, permisos, procesos colgados y reinicios de servicios.", topics:["Permissions (read/write)","Kill process, restart service","Task Manager, Terminal"]},
  {id:"m7", level:"B1", title:"Ágiles · Scrum, Kanban y el Daily", desc:"Reportar progreso en la reunión diaria: qué hice, qué haré, bloqueos.", topics:["Yesterday I did...","Today I will...","I am blocked by..."]},
  {id:"m8", level:"B1 - B2", title:"Seguridad · Phishing y contraseñas", desc:"Explicar políticas de seguridad, 2FA, malware y riesgos a usuarios.", topics:["Two-factor authentication","Phishing, malware, breach","Change password, lock"]},
  {id:"m9", level:"B2", title:"Nube y DevOps · AWS, Docker y CI/CD", desc:"Desplegar en la nube, contenedores, pipelines y escalabilidad.", topics:["Deploy, scale, container","Pipeline, build, commit","AWS, Azure, cloud native"]},
  {id:"m10", level:"B2", title:"Incidencias Severas · Post-mortem", desc:"Redactar un RCA (Root Cause Analysis). Por qué cayó producción y cómo evitarlo.", topics:["Root Cause Analysis","Mitigation, workaround","Downtime, SLA, SLA breach"]},
  {id:"m11", level:"B2", title:"Futuro e IA · Automatización y LLMs", desc:"Hablar sobre cómo la IA y los scripts cambiarán el trabajo IT.", topics:["Future forms (will/going to)","Automation, script","AI, Machine Learning, prompt"]}
];

export const PRACTICA = [
  { id: "read1", level: "A2", title: "A slow computer", text: "User: My computer is very slow today. It takes five minutes to open the email.\nIT: Have you restarted it recently? Please, reboot the system and tell me if it works better." },
  { id: "read2", level: "B1", title: "Network outage", text: "Attention everyone. We are currently experiencing a network outage in Building B. The engineering team is investigating the router configuration. Expected resolution time is 30 minutes." },
  { id: "read3", level: "B2", title: "RCA: Database lock", text: "Root Cause Analysis: At 14:00 UTC, the primary database experienced a deadlock due to a runaway query from the reporting microservice. Mitigation: The service was restarted and a query timeout of 30s was implemented to prevent recurrence." }
];

export const PRUEBAS = [
  { id: "q1", text: "The server is ___.", options: ["down", "under", "below"], answer: "down" },
  { id: "q2", text: "Please ___ the computer to apply updates.", options: ["reboot", "break", "throw"], answer: "reboot" },
  { id: "q3", text: "I will check the ___ loss in the network.", options: ["packet", "box", "mail"], answer: "packet" },
  { id: "q4", text: "We need a ___ to fix this vulnerability.", options: ["patch", "cloth", "band"], answer: "patch" }
];
