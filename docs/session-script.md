# GitHub Copilot: De la Sobrecarga al Superpoder
## Guía Completa para Presentador

> **Escrita para:** Presentador en vivo  
> **Audiencia:** Desarrolladores, tech leads, engineering managers  
> **Duración:** 50 minutos (sesión) + 10 minutos (Q&A)  
> **Idioma:** Español  
> **Fecha:** 2026-03-15

---

## 📋 PRE-SESIÓN: CHECKLIST Y FALLOS

### Antes de Entrar en Escena (30 minutos)

- [ ] **VS Code abierto y listo**
  - Extensión Copilot instalada y autenticada
  - Workspace `copilot-session-demo` cargado
  - Agent mode habilitado
  - Terminal dentro de VS Code funcional

- [ ] **Navegador listo** (Chrome/Edge recomendado)
  - Pestaña con el repo de demo (GitHub): https://github.com/agenticsquad/copilot-session-demo
  - Backlog visible (issues)
  - Tener abierta la aplicación de inventario en `localhost:3000` (en caso de demo local)

- [ ] **PowerPoint abierto y presentado en pantalla 2**
  - Orden de slides confirmado
  - Transiciones deshabilitadas (controladas manualmente)
  - Notas de presentador visibles en la pantalla del presentador

- [ ] **Conexión a internet estable**
  - Probar latencia (GitHub Copilot depende de la API)
  - Tener plan B offline preparado

- [ ] **Audio y micrófono**
  - Volumen comprobado
  - Clicker de presentación funcional
  - Control de pantalla (si usas multiple displays)

### Plan B — Cuando las Cosas Fallan

#### Si GitHub Copilot responde lentamente o falla:
```
"Veamos, a veces la API necesita un momento... 
Mientras tanto, déjame mostrarles un clip grabado 
que preparé por si pasaba exactamente esto. Mírenlo."
```
→ **REPRODUCIR VIDEO PRE-GRABADO** de la misma demo (10-15 seg)

#### Si la app de demo no arranca:
```
"Perfecto, el servidor de demo está en mantenimiento. 
Pero tengo aquí las screenshots del resultado esperado. 
Veamos qué el agente estaba a punto de hacer..."
```
→ **NAVEGAR A SLIDES DE CAPTURA DE PANTALLA**

#### Si se corta la conexión de internet:
```
"Oye, eso pasa. Vamos a hacer algo diferente aquí —
quiero mostrarles la arquitectura de cómo esto funciona 
y luego responder todas sus preguntas."
```
→ **SALTAR A SLIDES DE ARQUITECTURA / VISIÓN**

#### Cómo recuperarte en cualquier caso:
1. Mantén la calma. La audiencia está acostumbrada.
2. Gira la narrativa: "Esto es en realidad un buen momento para hablar de X..."
3. Continúa con una slide o pregunta a la audiencia
4. Si el demo vuelve a funcionar, reintenta — pero no más de 2 veces

---

## 🎬 ESTRUCTURA GENERAL

```
APERTURA (2 min)        → "Hola, soy Saul..."
│
├─ SECCIÓN 1: El Problema (8 min)
├─ SECCIÓN 2: El Descubrimiento (7 min)
├─ SECCIÓN 3: Agentes en Acción (10 min)
├─ SECCIÓN 4: Agentes Personalizados (8 min)
├─ SECCIÓN 5: MCPs (8 min)
├─ SECCIÓN 6: Modernización (7 min)
├─ SECCIÓN 7: Visión y Cierre (5 min)
│
CIERRE (3 min)          → Resumen y CTA
Q&A (10 min)            → Audiencia al mando
```

---

# 🎯 SECCIÓN 1: EL PROBLEMA
**⏱️ Tiempo: 8 minutos**

## Opening — Los primeros 2 minutos (CRÍTICOS)

```
[SLIDE: Portada — "De la Sobrecarga al Superpoder"]

"Buenas. Soy Saul, trabajo con GitHub, 
y hoy voy a contarles la historia de un equipo que 
cambió completamente cómo trabaja. Su historia.

Pero primero, necesito que me digan honestamente — 
¿Alguien aquí trabaja en un equipo que tiene 
más trabajo del que puede manejar en el tiempo que tiene?"

[PAUSA — espera reacciones, sonrisas incómodas]

"Ah, eso. Sí. Así que no es solo mi equipo entonces.

Permítanme presentar al Equipo Atlas."
```

**Propósito:** Crear conexión inmediata. La audiencia se identifica. No es una lección abstracta — es sobre su vida cotidiana.

---

## Acto 1: Presentar el Equipo Atlas (4 min)

```
[SLIDE: "Equipo Atlas — El Contexto"]

[Mostrar visual con 4 iconos de desarrolladores + 1 gerente]

"El Equipo Atlas construye una aplicación de gestión de inventario. 
Cuatro desarrolladores. Una gerente de producto que es muy entusiasta 
con nuevas features. Un backlog que crece más rápido de lo que pueden cerrarlo.

Suena familiar, ¿verdad?

Veamos qué pasa en su jornada típica."

[SLIDE: "Un día normal en Equipo Atlas"]

"Lunes por la mañana. Standup. El backlog tiene 47 issues abiertos:
- 12 features nuevas
- 15 bugs que vinieron del testing
- 8 mejoras técnicas que nadie tiene tiempo de hacer
- Y 12 cosas que el cliente pidió hace dos sprints

Y el equipo — el mismo equipo que siempre — 
tiene capacidad para quizás cerrar 6 issues en el sprint."

[PAUSA — déjalo respirar]

"¿Qué pasa entonces? Lo que siempre pasa:
Code reviews atrasados. Testing que se salta. 
Deuda técnica que se acumula. 
Y la pregunta que toda gerente hace:
¿Si les traigo dos developers más, resuelven esto?"

[SLIDE: Título provocador — "La respuesta es NO"]

"No. No resuelven. 

Porque el problema no es que hay pocas manos — 
es que los equipos de software no escalan linealmente.
Más personas = más reuniones, más coordinación, 
más conflictos de merge. 

Entonces, ¿qué si le digo que hay una manera de 
multiplicar la capacidad del equipo sin contratar a nadie?"
```

**Propósito:** Establecer la tensión narrativa. El problema es real y reconocible. Pero hay salida.

---

## Acto 2: El Backlog es el Héroe (3 min)

```
[SLIDE: Transición a — "Ahora vamos a ver el backlog REAL"]

"Vamos a hacer algo diferente aquí. 
El backlog que voy a mostrarles ahora ES el Equipo Atlas.
No es ejemplo ficción — son issues reales en nuestro repositorio de demo.

Cuando avancemos en la sesión y yo diga 
'Vamos a tomar un issue del backlog', 
vamos a tomar literal issues de aquí."

[NAVEGADOR: Mostrar GitHub issues]

"Miren. Este es el backlog. Está abierto ahora.
Ustedes pueden verlo. Está en GitHub.

Los issues están etiquetados por categoría:
- 'agents' — trabajos para agentes genéricos
- 'custom-agents' — tareas que necesitan agentes personalizados  
- 'mcp' — cosas que requieren herramientas externas
- 'modernization' — refactoring y deuda técnica

A lo largo de esta sesión vamos a ver a GitHub Copilot 
atacar estos issues en vivo. 

Así que el Equipo Atlas, en este momento, 
tiene esperanza de que alguien cierre algunos de estos 47 issues 
sin que les cueste dormir a los cuatro devs."

```

**Propósito:** Anclaje de realismo. El backlog es visible, concreto, y será nuestro hilo conductor.

---

## Talking Points — Mensajes Clave (S1)

- **"Tu equipo no necesita más gente — necesita multiplicadores."**
  - No es un problema de headcount, es un problema de capacidad y velocidad.

- **"El backlog crece más rápido que la capacidad humana."**
  - Ley universal del software. Siempre hay más trabajo que manos.

- **"La deuda técnica es acumulativa y silenciosa."**
  - Cuando recortas corners, lo pagas después con interés compuesto.

- **"¿Y si el equipo tuviera compañeros de trabajo que nunca duermen?"**
  - Plantea la pregunta retórica que abre la puerta al siguiente segmento.

---

## Transition Line (fin de S1)

```
"Así que Equipo Atlas está en problemas.
Pero una tarde, su gerente descubre algo.
Une cita sobre GitHub Copilot Agents — 
compañeros de trabajo autónomos que pueden trabajar 
en el código exactamente como una persona lo haría.

¿Qué son exactamente estos agentes?
Eso es lo que vamos a desmenuzar a continuación."
```

---

# 💡 SECCIÓN 2: EL DESCUBRIMIENTO
**⏱️ Tiempo: 7 minutos**

## Acto 1: La Evolución de Copilot (3 min)

```
[SLIDE: "La Evolución de GitHub Copilot"]

[Timeline visual izquierda-derecha]

"GitHub Copilot empezó como autocompletado. 
2021. 'Ey, escribe def y te sugiero el resto de la función.'

Es útil, pero es autocompletado. Es asistencia.

Luego vino Chat. 
'Cuéntale a Copilot qué quieres, en palabras, 
y te da una respuesta.'

Es mejor. Es conversacional. Pero sigue siendo 
'tú diriges, Copilot sugiere'.

Pero ahora tenemos Agents."

[SLIDE: "Agentes — El Salto de Paradigma"]

"Agents son diferentes. Un agente no es asistencia.
Es autonomía con propósito.

Un agente puede:
- Leer tu codebase entero
- Entender la arquitectura
- Proponer un plan
- Ejecutar ese plan
- Iterar cuando algo falla
- Generar tests
- Todo sin que le tengas que decir cada paso

Es como contratar a un dev nuevo que:
- Aprende tu codebase en segundos
- No se cansa
- No se aburre
- Nunca olvida
- Cuesta... bueno, vamos a hablar de eso después"

[PAUSA]

```

**Propósito:** Desmitificar "agentes". No es magia, es una evolución clara del autocompletado.

---

## Acto 2: El Ecosistema (2 min)

```
[SLIDE: "El Ecosistema de Agentes"]

[Diagrama visual con 3 círculos]

"Hay tres sabores de agentes que necesitas conocer:

1. **Agentes en VS Code**
   Corren en tu editor. Tú dices 'haz una feature' 
   y el agente lo hace. Interactivo. Inmediato.

2. **GitHub Copilot Coding Agent**
   Un agente más potente que vive en la nube.
   Acceso a toda tu arquitectura, toda la historia.
   Es el jugador estrella del equipo.

3. **Agentes Personalizados**
   Agentes que entrenaste con las reglas de TU equipo.
   Entienden tus convenciones.
   Generan código que se ve como si lo escribiera tu equipo.

Y todos estos agentes pueden conectarse a MCPs — 
Model Context Protocols — que son como herramientas externas.
Playwright para testing, bases de datos, APIs externas.
El agente puede literalmente probar, desplegar, lo que sea."

[SLIDE: Mapa visual — "Qué agente para qué trabajo"]

"Empecemos simple — agente en VS Code, tarea sencilla.
Luego escalamos a custom agents y MCPs."

```

**Propósito:** Cartografía mental. La audiencia sabe dónde encaja cada cosa.

---

## Acto 3: Demo Breve (2 min)

```
[DEMO: Abrir VS Code y mostrar Copilot Agent]

"Déjame mostrarles qué se ve un agente.
Aquí está VS Code. Aquí está el panel de Copilot.

[Abrir panel lateral de Copilot]

Ven este botón? 'Agent'. Cuando lo presiono, 
Copilot entra en 'modo agente'.
Ahora puedo decirle tareas completas:
'Crea una función que valide un email' 
y el agente lo hace. Completo. Con tests si quiero.

[Escribir prompt simple en Copilot]
'Crea una función que filtre un array de objetos por propiedad'

[Esperar respuesta - el agente genera código]

Miren — generó la función. Con tipos. Con claridad.
Y si digo 'añade tests', lo hace.
Si digo 'esto no funciona así', itera.

Esto es un agente. Veamos qué pasa cuando 
Equipo Atlas lo usa para atacar su backlog real."

```

**Propósito:** Primer contacto con la UI. Desmitificar. "No es complicado."

---

## Transition Line (fin de S2)

```
"Ya vimos qué es un agente y cómo se ve.
Ahora vamos a verlo en acción.

Equipo Atlas abre su backlog y dice: 
'OK, agente, ¿podés cerrar algunos issues?'

Vamos a verlo pasar. En vivo."
```

---

# 🛠️ SECCIÓN 3: AGENTES EN ACCIÓN
**⏱️ Tiempo: 10 minutos**

## Acto 1: Demo — Tomar un Issue, Construir un Feature (6 min)

```
[SLIDE: "Demo 1 — De Issue a Código Funcional"]

[GITHUB: Navegar al repo, mostrar issues con tag 'agents']

"Equipo Atlas dice: Tenemos estos issues.
Agente, toma uno.

[Abrir primer issue — ej: 'Como usuario quiero filtrar productos por categoría']

Este. 'Filtrar productos por categoría'.
Parece simple, pero en realidad necesita:
- Modelo de datos (que existente hay categorías?)
- Cambios en el API endpoint
- Tests unitarios
- Validar que no rompemos nada existente

Observen. Le voy a dar al agente las instrucciones.
[Escribir prompt en Copilot Agent]
'Implementa el filtrado de categorías en la app de inventario.
Necesito modelo, API endpoint, y tests. 
Sigue el patrón de código existente.'

[El agente comienza a trabajar]

OK, el agente está pensando.
Está leyendo el codebase.
Está entendiendo la estructura.
[ESPERAR 30-45 segundos]

Ahora está escribiendo.
Ven aquí? Primero actualiza el modelo.
Luego el endpoint en la API.
Luego genera los tests.

[Ir a través de cada archivo cuando se actualiza]

Miren la calidad del código. No es 'funcionaría si...'.
Es código que se ve como si lo escribiera un dev del equipo.

Usa async/await como el resto.
Sigue el patrón de validación que vieron en otro archivo.
Los tests son coherentes con la suite existente.

Ahora vamos a ejecutar los tests para confirmar que funciona.

[Abrir terminal en VS Code]
npm test

[Los tests pasan]

Boom. Issue cerrado. 
Código, tests, documentación — todo en quizás 2 minutos de tiempo real.

¿El agente fue perfecto? No siempre.
Si algo falló, el agente lo vería, entendería el error,
y iteraría. Eso pasó aquí también."

```

**Propósito:** 
- Mostrar el poder de los agentes en el caso de uso más común: features nuevas.
- Destacar que el código mantiene calidad y patrones.
- Mostrar iteración cuando hay errores.

---

## Acto 2: Demo — Cambios Multi-Archivo (4 min)

```
[SLIDE: "Demo 2 — Coordinación Multi-Archivo"]

[GITHUB: Abrir segundo issue más complejo]
"Siguiente issue: 'Implementar notificaciones en tiempo real cuando se actualiza inventario'.

Esto es más complejo. Necesita:
- Sistema de eventos interno
- WebSocket conexiones
- Tests E2E (no solo unitarios)
- Cambios en múltiples módulos

[Dar instrucción al agente]
'Implementa notificaciones WebSocket para cambios de inventario.
Usa nuestro patrón EventEmitter existente.
Coordina cambios en events.ts, websocket-server.ts y el cliente.'

[El agente trabaja — 60 segundos]

Observen cómo el agente no trabaja 'a ciegas'.
Antes de escribir nada, revisó:
- El patrón EventEmitter en events.ts
- La configuración WebSocket existente
- Cómo otros módulos se conectan

Luego genera cambios coherentes.
Aquí actualiza el servidor.
Aquí el cliente.
Aquí agrega los tests.

Y todo está coordinado. No hay conflictos.
No hay 'oops, olvidé sincronizar'.

[Ejecutar tests]
npm test

Todos pasan. El agente coordinó multi-archivo sin que lo dirigieras paso a paso.

Esto es lo que hace que un agente sea diferente de un chatbot.
No solo escribe código. Entiende tu arquitectura. 
La respeta."

```

**Propósito:**
- Mostrar capacidades de coordinación y contexto completo.
- Desmitificar: "El agente entiende el codebase."

---

## Talking Points — Mensajes Clave (S3)

- **"El agente lee el código existente ANTES de escribir."**
  - Esto es lo que diferencia un agente de autocomplete.

- **"Mantiene los patrones y convenciones de tu equipo."**
  - Code review automático, de manera consistente.

- **"Genera tests automáticamente — no es código descuidado."**
  - Confianza radical en calidad.

- **"Itera cuando algo falla."**
  - No es "generate once and pray" — es iterativo.

---

## Transition Line (fin de S3)

```
"Hermoso. El agente puede hacer features nuevas,
cambios multi-archivo, todo coordinado.

Pero aquí viene la pregunta que Equipo Atlas se hizo:
¿Qué pasa si mi equipo tiene reglas muy específicas?
¿Convenciones que no son estándar?
¿Patrones que inventamos nosotros?

¿El agente se va a adaptar? ¿O voy a estar corrigiendo 
código para que encaje con cómo trabajamos?

La respuesta es hermosa: Puedes ENSEÑARLE al agente."
```

---

# 🎓 SECCIÓN 4: AGENTES PERSONALIZADOS
**⏱️ Tiempo: 8 minutos**

## Acto 1: Custom Instructions (3 min)

```
[SLIDE: "Agentes Personalizados — Enseña al Agente TUS Reglas"]

"Aquí hay un archivo. Se llama copilot-instructions.md.
Es un archivo Markdown en la raíz del repositorio.

Dentro, defines instrucciones que quieres que el agente siga.

[Mostrar archivo en VS Code]

Ejemplos de lo que podrías poner:

'Siempre usa async/await, nunca callbacks.'
'Todas las funciones deben tener JSDoc comments.'
'El error handling sigue el patrón Result<T, E>.'
'Usa kebab-case para nombres de archivos.'
'Valida entrada con Zod, no con ifs.'

[LEER UNA INSTRUCCIÓN EN VOZ ALTA]

'Cuando crees un endpoint REST, sigue este patrón:
1. Valida input con middleware
2. Usa el patrón de errores standardizado
3. Retorna {success, data, error}
4. Escribe tests con describe/it/expect'

Ahora — sin estas instrucciones, el agente te genera código bien.
Con estas instrucciones, el agente te genera código que se ve 
EXACTAMENTE como lo escribiría tu equipo."

```

**Propósito:** Desmitificar las instrucciones. No es magic, es documentación que el agente respeta.

---

## Acto 2: Custom Agent Demo (5 min)

```
[SLIDE: "Demo — Agente Personalizado en Acción"]

[GITHUB: Abrir issue etiquetado 'custom-agents']
"Tomemos un issue diseñado para custom agents.
'Implementar endpoint de validación que siga el patrón de error del equipo'.

Equipo Atlas tiene un patrón muy específico.
No es estándar. Es suyo.

[Abrir un endpoint existente en el código para mostrar el patrón]

Miren. Este endpoint retorna {success, data, error}.
Usa middleware de autenticación.
Tiene comentarios de documentación así.
Los tests están organizados así.

Ahora voy a decirle al agente:
'Crea un nuevo endpoint que siga exactamente este patrón.'

[Prompt en Copilot]
'Implementa un endpoint POST /api/validate-sku 
que valide un SKU de inventario.
Sigue el patrón de errors visto en [archivo existente].
Incluye tests.'

[El agente genera]

Observen. El agente:
1. Leyó el archivo que le mostré
2. Extrajo el patrón
3. LO REPLICÓ exactamente

Mismo estructura de respuesta.
Mismo error handling.
Mismo patrón de tests.

Es como si alguien del equipo lo escribiera.
Porque el agente aprendió las reglas del equipo.

Esto es escalabilidad de conocimiento, ¿ven?
Un dev documenta las prácticas una vez.
El agente las respeta siempre.

En dos meses, no va a haber divergencia entre 
lo que el agente genera y lo que el equipo espera."

```

**Propósito:**
- Mostrar que la personalización es simple pero poderosa.
- Esto es "institutional knowledge at scale".

---

## Talking Points — Mensajes Clave (S4)

- **"Las instrucciones personalizadas transforman el output."**
  - Demostración visual: código genérico vs. código del equipo.

- **"Puedes codificar las prácticas de tu equipo."**
  - Convenciones, patrones, arquitectura — documentadas, respetadas, escaladas.

- **"El conocimiento del equipo no se pierde."**
  - Cuando alguien se va, el agente sigue generando código 'como lo hacemos nosotros'.

- **"Es documentación viva que el agente ejecuta."**
  - Mejor que un README que nadie lee.

---

## Transition Line (fin de S4)

```
"Hermoso. Ya vimos agentes que entienden tus reglas.

Pero miren, hay un límite a lo que el código puede hacer solo.
¿Qué si necesitas que el agente pruebe la aplicación?
¿Que hable con una base de datos?
¿Que despliegue?

Eso es donde entran los MCPs.
Model Context Protocols.

Son como enchufes. El agente se conecta a herramientas reales.
Y la herramienta más poderosa que vamos a ver hoy
es Playwright — testing end-to-end."
```

---

# 🔌 SECCIÓN 5: MCPS — EL AGENTE SE CONECTA AL MUNDO
**⏱️ Tiempo: 8 minutos**

## Acto 1: Intro a MCPs (1 min)

```
[SLIDE: "MCPs — Las Herramientas que el Agente Puede Usar"]

"Imagina que contratas un dev remoto.
Te envía el código.
Pero nunca puede:
- Ejecutar los tests
- Probar el código
- Ver si funciona

¿Lo confiarías?

No. Necesita poder hacer esas cosas.

MCPs son exactamente eso — 
la manera en que un agente toca el mundo real.

Playwright MCP le permite abrir browsers y testear.
Database MCPs le dejan consultar datos.
GitHub MCP le permite crear issues, pull requests.
AWS MCP le deja desplegar.

Es el ecosistema. Y está creciendo rápido."

```

---

## Acto 2: Demo — Playwright MCP (5 min) — **EL MOMENTO WOW**

```
[SLIDE: "Demo — Agente Testea la Aplicación con Playwright"]

[GITHUB: Abrir issue etiquetado 'mcp' y 'playwright']
"Este issue dice: 'Crear tests end-to-end para el flujo de login'

Un dev humano haría esto:
1. Abrir Playwright
2. Escribir código que abre un browser
3. Simular clicks, inputs
4. Verificar resultados
5. Ejecutar
6. Debuggear

Toma horas.

Vamos a ver al agente hacerlo.

[Prompt en Copilot]
'Usa Playwright para crear un test E2E del flujo de login.
Incluye casos happypath y error.'

[El agente genera]

OK, el agente está escribiendo tests con Playwright.
Describe, beforeEach, page.goto(), page.fill(), page.click().

Ahora voy a ejecutar estos tests.

[Terminal: npm run test:e2e]

Observen. El test se ejecutó.
Abrió un browser — ¡EN LA PANTALLA COMPARTIDA!
Pueden ver la app de verdad.

El agente escribió un test que:
1. Abrió el login
2. Ingresó email y password
3. Clickeó submit
4. Verificó que se redirigió al dashboard
5. Cerró el browser

TODO EN VIVO. En la pantalla.

[El test pasa]

Boom. Test E2E escrito y ejecutado por el agente.
En quizás 3 minutos de tiempo real.

¿Esto les parece magia? 
No es magia. Es el agente con acceso a Playwright MCP.
El MCP le da capacidad de abrir browsers y interactuar.
El agente escribe el código.

Y aquí está lo importante: 
Cuando el test falló (porque pasó un error que el agente no anticipó),
el agente VIO el error y ITERÓ.

Se vio algo como:
'Oh, el campo de email tiene otro selector. Déjame corregir.'
'Ah, la redirección toma más tiempo. Necesito esperar.'

El agente debuggeó en tiempo real."

```

**Propósito:** 
- MOMENTO WOW. El agente ve y prueba la app de verdad.
- Desmitificar testing. No es algo que toma semanas.
- Mostrar iteración en tiempo real.

---

## Acto 3: Mención Rápida de Otro MCP (2 min)

```
[SLIDE: "Otros MCPs — El Ecosistema Crece"]

"Playwright es hermoso, pero miren todo lo demás:

[Mostrar lista visual]
- **GitHub MCP**: El agente puede crear issues, PRs, comentarios
- **Bash MCP**: Ejecutar comandos, ver resultados
- **Database MCPs**: Consultar, validar esquemas
- **API MCPs**: Llamar endpoints externos

El patrón es el mismo.
Agente + MCP = tarea real.

Y el ecosistema está acelerando.
Hace tres meses había 5 MCPs públicos.
Hoy hay 30+.

En seis meses habrá cientos."

```

---

## Talking Points — Mensajes Clave (S5)

- **"Los MCPs son el puente entre código y realidad."**
  - El agente no es teórico — toca el mundo real.

- **"Playwright MCP: El agente puede probar como un QA, pero mejor."**
  - No se aburre, no se salta pasos, itera automáticamente.

- **"El ecosistema de MCPs está explotando."**
  - Hoy es Playwright y GitHub; mañana es todo.

- **"Testing pasa de ser tedioso a ser automatizado."**
  - Sin sacrificar calidad.

---

## Transition Line (fin de S5)

```
"OK. Ya vimos al agente:
- Escribir features nuevas
- Respetar las reglas del equipo
- Probar código en vivo

Equipo Atlas está impresionado.
Pero entonces alguien pregunta:

¿Y el código viejo?
Tenemos un módulo de autenticación con callbacks del 2018.
¿Un agente puede realmente modernizar eso?
¿O voy a terminar con un desastre?"

[PAUSA]

"Es una pregunta importante.
Porque en realidad, aquí es donde los agentes generan 
el MAYOR retorno de inversión.

La modernización."
```

---

# 🚀 SECCIÓN 6: MODERNIZACIÓN
**⏐️ Tiempo: 7 minutos**

## Acto 1: Por Qué Modernización es el Caso Más Valioso (1 min)

```
[SLIDE: "Modernización — El Verdadero Superpoder"]

"Un feature nuevo es genial. Un test E2E es útil.

Pero saben qué es realmente caro?

Deuda técnica.

Código legacy que:
- Nadie quiere tocar
- No tiene tests
- Está escrito de manera que solo una persona entiende
- Y esa persona se fue

Eso es lo que consume el 30-40% del presupuesto de ingeniería.

Mantenimiento de código viejo.

Y aquí es donde los agentes brillan."

```

---

## Acto 2: Demo — Refactoring de Código Legacy (5 min)

```
[SLIDE: "Demo — Agente Refactoriza Código Viejo"]

[GITHUB: Abrir issue etiquetado 'modernization']
"Este issue dice:
'Migrar módulo de autenticación de callbacks a async/await.'

Este módulo fue escrito en 2018. Tiene callbacks anidados.
Es funcional. Pero es imposible de leer. 
Y tiene 0 tests.

Un dev humano necesitaría:
1. Entender qué hace
2. Planear la refactorización
3. Escribir el nuevo código
4. Escribir tests para validar que no cambió el comportamiento
5. Testing manual exhaustivo porque no podés romper auth
6. Code review

Eso es una semana. Para una persona.

Veamos al agente.

[Prompt en Copilot]
'Refactoriza el módulo de auth de callbacks a async/await.
Genera tests que validen que el comportamiento NO cambió.
Mantén la API pública igual.
Sigue el patrón de error handling del equipo.'

[El agente empieza a trabajar — esperar 60 segundos]

El agente está:
1. Leyendo el código viejo (entender qué hace)
2. Planificando la refactorización (¿en cuántos pasos?)
3. Escribiendo el nuevo código (async/await, limpio)
4. Generando tests (validación de comportamiento)

[Mostrar el código generado]

Miren. Es limpio.
Async/await.
Con comentarios que explican qué pasó.

Ahora ejecutamos los tests.

[Ejecutar tests]
npm test auth

[Los tests pasan]

Todos los tests de auth pasaron.
Eso significa: el comportamiento no cambió.
La seguridad está intacta.
Pero el código es 70% más legible.

¿Tiempo total? 3 minutos.
¿Riesgo? Bajo porque los tests validaron.
¿Valor? Huge — ahora ese código es mantenible."

```

**Propósito:**
- Mostrar que no es 'reescribir desde cero'.
- Es refactoring inteligente con validación.
- El ROI es enorme: menos riesgo, más legibilidad, mismo tiempo de trabajo.

---

## Acto 3: Escenarios de Modernización (1 min)

```
[SLIDE: "Escenarios Donde la Modernización Brilla"]

[Mostrar lista visual]

"Aquí hay casos reales donde hemos visto agentes hacer 
la mayor parte del trabajo:

- **Migraciones de frameworks**
  Vue 2 → Vue 3. Angular 1.x → Angular 15.
  El agente aprende el nuevo framework, traduce el viejo código.

- **Actualización de patrones**
  Monolito → Microservicios.
  MVC → Component-based.
  Callbacks → Promises.

- **Internacionalización**
  'Envuelve todos los strings en i18n()'.
  El agente lo hace archivo por archivo, con tests.

- **Accesibilidad**
  'Añade aria-labels, roles, y keyboard navigation.'
  El agente audita y corrige el HTML.

En cada caso, el patrón es:
1. Agente entiende el sistema
2. Propone plan
3. Ejecuta con tests como validación
4. Entrega código que se puede mergear sin miedo

Esto es donde Equipo Atlas va a ahorrar un mes de trabajo al año."

```

---

## Talking Points — Mensajes Clave (S6)

- **"La deuda técnica es el verdadero killer de velocidad."**
  - No son las features nuevas, es el código que mantienes.

- **"Los agentes no reescriben — refactorizan inteligentemente."**
  - Con validación automática.

- **"Testing es tu guardaespaldas."**
  - El agente refactoriza, los tests prueban que no rompió nada.

- **"El ROI es explosivo: menos mantenimiento, más legibilidad."**
  - En práctico: una semana de refactoring toma 30 minutos.

---

## Transition Line (fin de S6)

```
"Hagamos zoom out. 

Empezamos con Equipo Atlas ahogado en trabajo.
Vimos al agente:
- Construir features
- Personalizar a las reglas del equipo
- Probar con Playwright
- Modernizar código viejo

Ahora vamos a la pregunta final:
¿Qué significa todo esto para tu equipo?"
```

---

# 🌟 SECCIÓN 7: VISIÓN Y CIERRE
**⏱️ Tiempo: 5 minutos**

## Acto 1: Equipo Atlas Antes vs. Después (2 min)

```
[SLIDE: "Equipo Atlas — Antes"]

"Inicio de sesión. Equipo Atlas, hace 3 horas.
4 devs.
47 issues abiertos.
Backlog que crece más rápido que su capacidad.
Code reviews atrasadas.
Deuda técnica acumulándose.

Se sienten atrapados."

[SLIDE: "Equipo Atlas — Ahora"]

"Equipo Atlas, después.

Mismos 4 devs.

Pero ahora:
- El agente maneja features de baja complejidad
- El agente moderniza código viejo
- El agente genera tests
- Los devs se enfocaban en arquitectura, decisiones, innovación

El backlog sigue siendo grande.
Pero la velocidad del equipo se triplicó.

¿Cuántas features nuevas crees que cerraron este sprint?

No 6. 18.

Y la deuda técnica? Estable. Por primera vez.

¿Qué cambió? No fue 'conseguir devs mejores'.
Fue 'multiplicar a los devs que tenían'."

```

---

## Acto 2: La Evolución del Rol del Dev (1 min)

```
[SLIDE: "El Rol del Desarrollador Evoluciona"]

"Aquí hay algo que es importante que entiendas:

Los agentes no reemplazan desarrolladores.
Los multiplicadores.

El rol del dev no es más 'escribir código'.
Es 'dirigir agentes que escriben código'.

Esto significa que:
- Necesitas ENTENDER lo que el agente genera
- Necesitas VERIFICAR que es correcto
- Necesitas DIRIGIR la estrategia
- Necesitas TOMAR decisiones arquitectónicas

En otras palabras: tu trabajo es MEJOR.

No estás pegado a escribir CRUD endpoints.
Estás pensando en cómo el sistema debería escalar.

Es una evolución del rol.
Y es para mejor."

```

---

## Acto 3: Qué Hacer el Lunes (2 min)

```
[SLIDE: "Qué Hacer el Lunes"]

"OK. Esto suena genial. Pero ¿por dónde empiezo?

Aquí hay 4 pasos concretos que puedes hacer LA SEMANA QUE VIENE.

[Contar con los dedos, paso a paso]

**Paso 1: Activar Copilot Agent en VS Code**
- Descarga la extensión (si no la tienes)
- Autentícate con tu cuenta de GitHub
- Abre el panel de Copilot
- Presiona 'Agent'
- Toma un issue simple del backlog y dile al agente que lo cierre

Tiempo: 10 minutos.

**Paso 2: Crear copilot-instructions.md**
- En la raíz de tu repo, crea ese archivo
- Documenta 5-10 reglas que tu equipo sigue
  (naming, patrones de error, testing style, etc)
- Comitea al repo
- El agente lo leerá automáticamente

Tiempo: 30 minutos.

**Paso 3: Probar un MCP**
- Playwright es el primer paso
- Configúralo en tu project.json (si es que lo tienes)
- Toma un issue de testing
- Dile al agente que escriba tests E2E

Tiempo: 1 hora.

**Paso 4: Un Issue de Modernización**
- Busca una pequeña deuda técnica
- No empieces con reescribir la app entera
- Empieza con 'refactoriza este módulo'
- Deja que el agente proponga el plan
- Valida con tests

Tiempo: 2-3 horas, pero ahorra una semana después.

En total: Un dev, una semana, y tu equipo tiene agentes funcionando."

[PAUSA]

```

---

## Acto 4: Reflexión Final (0.5 min)

```
[SLIDE: Imagen emocional — equipo sonriendo, productivo]

"Esto es por qué estoy aquí hoy.

No es para vender Copilot.
Es porque he visto a equipos como Equipo Atlas 
—equipos reales, como probablemente el tuyo— 
transformar radicalmente cómo trabajan.

Lo que parecía imposible — escalar sin contratar —
resulta que es posible.

El multiplicador existe.

Y está en tus manos.

Vamos a preguntas."

```

---

## Talking Points — Mensajes Clave (S7)

- **"Los agentes no reemplazan devs — los multiplican."**
  - El rol evoluciona, no desaparece.

- **"Equipo Atlas triplicó su velocidad sin contratar."**
  - Es posible. Es real. Puede ser tu equipo.

- **"Empieza pequeño. Aprende. Escala."**
  - No necesitas perfección el día uno.

- **"El futuro de la ingeniería es dirigir sistemas, no escribir loops."**
  - Y ese futuro es hoy.

---

## Transition to Q&A

```
"Eso es la sesión. 

Pero sé que tienen preguntas.
Y espero que las tengan.

Vamos a abrir esto a conversación.
¿Qué quieren saber?"
```

---

# ❓ SECCIÓN BONUS: Q&A ANTICIPADAS
**⏱️ Tiempo: 10 minutos**

### Preguntas que PROBABLEMENTE van a hacer (prepárate para estas):

---

### P1: "¿Qué tan seguro es? ¿El código sale de mi organización?"

**Respuesta:**

```
"Excelente pregunta. Seguridad es lo primero.

Cuando usas GitHub Copilot, tu código:
- Se envía a los servidores de GitHub (Microsoft/OpenAI)
- Se procesa
- Se retorna con las sugerencias

¿Es un riesgo? Depende tu clasificación de datos.

Para código open-source: sin problema.
Para código de empresa privada: GitHub ofrece opciones:

1. GitHub Copilot for Business — con contratos de privacidad
2. Azure OpenAI — tu instancia privada, en tu cloud
3. Modelos self-hosted — si quieres control total

La industria de AI coding ya resolvió esto.
Banks usan Copilot. Grandes orgs usan variantes seguras.

¿Deberías revisar con tu security team? Sí.
¿Es bloqueador? Casi nunca.

Next question?"
```

---

### P2: "¿Funciona con [mi lenguaje/framework]?"

**Respuesta:**

```
"Probablemente sí.

Copilot fue entrenado en GitHub — 
que es basically toda la programación que existe.
Entiende todos los lenguajes populares:
Python, JavaScript, Java, Go, Rust, C++, etc.

También entiende frameworks:
React, Vue, Angular, Django, Spring, Rails.

¿Hay algunos lenguajes donde es 'menos bueno'?
Sí, los muy nuevos o muy obscuros.

Pero incluso ahí está mejorando.

La mejor manera de saberlo:
abre VS Code, intenta un agente en tu codebase.
Toma 5 minutos.
Verás inmediatamente si entiende tu stack.

Si no, cuéntamelo y podemos discutir alternativas."
```

---

### P3: "¿Cómo se compara con [Copilot competidor: Claude, Gemini, etc]?"

**Respuesta:**

```
"Es un debate válido.

Copilot no es el ÚNICO.
Existen Claude de Anthropic, Gemini de Google, others.

Cada uno tiene fortalezas:
- Copilot: integración profunda con GitHub, MCPs, agents
- Claude: excelente en reasoning largo
- Gemini: bueno en multi-modal

Para esta sesión estamos enfocados en Copilot porque:
1. Las MCPs son único de Copilot (hoy)
2. La integración con GitHub Issues es nativa
3. Los agents en VS Code son los más maduros

Pero honestamente? Si tu equipo ya usa Claude,
muchos de estos patrones funcionan ahí también.

Lo importante es: empezar CON ALGO.
No esperes el perfect tool.
Elige uno y aprende."
```

---

### P4: "¿Cuánto cuesta?"

**Respuesta:**

```
"GitHub Copilot tiene tiers:

**Copilot Free**
- Limitado pero gratis
- Bueno para experimentar

**Copilot Pro**
- $20/mes por persona
- Acceso completo a agents, MCPs
- Priority on API

**Copilot for Business**
- Por equipo, con admin controls
- Típicamente $30/dev/mes para equipos

En contexto:
- Un dev senior cuesta $150-250K/año
- Copilot cuesta $240-360/año por dev
- El ROI es... obvio.

Y hemos visto que equipos ahorran
1-2 meses de trabajo senior por año.

Eso es 15-30K en salaries, offset por 
$240 en Copilot.

El cálculo es simple."
```

---

### P5: "¿Y si el agente se equivoca?"

**Respuesta:**

```
"Va a pasarde.

Los agentes no son perfectos.
A veces generan código que:
- No compila
- Tiene bugs lógicos
- No sigue los patrones

Esto es ESPERADO y NORMAL.

Lo importante es que:
1. Tienes tests — el test falla, lo ves
2. El agente ITERA — ves el error, lo arregla
3. Tú REVISAS — no mergeas código sin leerlo

Piénsalo así:
Un dev junior también se equivoca.
La diferencia es que el agente:
- Itera más rápido
- Nunca se cansa
- Es consistente

Así que sí, el agente se va a equivocar.
Pero probablemente menos que el dev junior.
Y siempre dentro de tus tests."
```

---

### P6: "¿Reemplaza a los QA?"

**Respuesta:**

```
"No reemplaza a los QA.
Cambia su trabajo.

Antes: QA manual escribía tests — tedioso, error-prone.
Ahora: Agente genera tests automáticamente.
       QA audita, valida estrategia, encuentra casos edge.

Es una evolución.

QA se vuelve más estratégico:
'¿Qué escenarios NO están cubiertos?'
'¿Cómo podemos romper esto?'

En lugar de:
'OK escribe el test de login, el de logout, el de password reset...'

Es mejor para QA. Y es mejor para el producto."
```

---

### P7: "¿Cómo se integra con nuestro CI/CD?"

**Respuesta:**

```
"Muy bien.

Si tienes GitHub Actions (o cualquier CI):
1. El agente genera código localmente
2. El dev lo comitea
3. CI corre automáticamente
4. Si falla, dev lo ve y le pide al agente que itere
5. Cuando pasa, se mergea

El agente respeta tu pipeline.
No lo reemplaza.

De hecho, MCPs pueden ejecutar CI checks directamente.
'Agente, escribe el código Y asegúrate que pasa CI.'
El agente lo hace.

Es un multiplicador de tu infraestructura existente."
```

---

### P8: "¿Y si no quiero usar GitHub?"

**Respuesta:**

```
"No necesitas estar 100% en GitHub.

Muchos equipos usan:
- GitLab para repos
- Jira para issues
- Slack para chat

Copilot puede trabajar con eso:
- Conectarse a cualquier git repo (si está en una máquina)
- Las MCPs pueden integrar Jira, Slack, whatever

No es 'GitHub o nada'.
Pero GitHub + Copilot sí que funciona nativamente.

Si no usas GitHub, el setup es un poquito más complejo.
Pero es posible.

Cuéntame tu setup y podemos pensar."
```

---

### P9: "¿Qué pasa con el código privado de la empresa?"

**Respuesta:**

```
"Esto es importante.

**Código entrenamiento de modelos:**
No. Copilot no usa tu código privado para entrenar.
Microsoft/OpenAI no ven tu IP.

(Si estás en EU, GDPR protege esto extra.)

**Contexto en requests:**
Sí. Cuando pides una sugerencia, Copilot necesita
ver parte de tu codebase para entender el contexto.

Esto es seguro porque:
1. Se procesa en servidores seguros
2. No se almacena (se descarta después)
3. Está encriptado en tránsito

Es como mostrarle tu código a un colega.
El colega no lo memoriza ni lo comparte.

¿Deberías hacer vetting? Sí.
¿Es un bloqueador? Para la mayoría, no."
```

---

### P10: "¿Cómo enseño a mi equipo a usar esto?"

**Respuesta:**

```
"Excelente. Eso es lo más importante después de configurar.

Recomendación:
1. Haz lo que acabamos de hacer ahora — un workshop
2. Dale a cada dev 1 hora para experimentar (es divertido)
3. Pídeles que tomen un issue pequeño y dejen que el agente lo ataque
4. Celebra el primer PR cerrado por un agente — es un milestone
5. Documenta patrones (cómo escribir buenas prompts)

La adopción es rápido porque:
- La ROI es OBVIO (ven que es más rápido)
- Es en VS Code (donde ya trabajan)
- No requiere cambio de flujo

En 2 semanas tu equipo estará usando agentes de manera natural.

Mi recomendación:
Designa a alguien como 'agent champion'.
Esa persona:
- Aprende profundo
- Ayuda a otros
- Documenta learnings
- Iterate en instrucciones del equipo

1 persona, 20% de tiempo, multiplica a 4 devs.
Es inversión que paga muy rápido."
```

---

## Pre-Q&A Tips para el Presentador

```
Si la audiencia se tarda en hacer preguntas:
Puedes plantear una preguntas tú mismo:

"Una pregunta que veo mucho es...
¿Qué pasa con..."

Luego responde. Abre la conversación.

Si hay silencio incómodo, NO LLENES EL SILENCIO.
Di:
"Parece que estamos bien. 
Si después se te ocurre algo, levanta la mano.
Gracias a todos por estar aquí."

Y termina con una frase memorable.
```

---

# 🎬 CIERRE — LOS ÚLTIMOS 3 MINUTOS

```
[SLIDE: Cierre — Equipo Atlas con brazos arriba, celebrando]

"Cuando empezamos, Equipo Atlas estaba en problemas.

47 issues.
4 devs.
Backlog que no paraba de crecer.

Hoy:
- Tenían compañeros que no duermen
- Triplicaron velocidad
- Finalmente tuvieron tiempo para features que importaban
- Deuda técnica que se estaba limpiando

¿Qué cambió?

No fue magia. Fue una herramienta.
Una herramienta que dijimos 'sí, vamos a usarla'.

Eso es todo lo que necesitas hacer.

Lunes. Abre VS Code. Activa agent. Toma un issue.

Tu equipo puede ser Equipo Atlas.

Gracias."

[SLIDE NEGRA]

FIN
```

---

# 📌 RESUMEN RÁPIDO — TIMING TODO

| Sección | Tiempo | Tipo | Nota |
|---------|--------|------|------|
| **Apertura** | 2 min | Narrativa | Conexión rápida |
| **S1: El Problema** | 8 min | Slides | Establece tensión |
| **S2: El Descubrimiento** | 7 min | Slides + demo | Educación suave |
| **S3: Agentes en Acción** | 10 min | Demo (2) | Corazón. Protege tiempo. |
| **S4: Personalizados** | 8 min | Demo | Escalabilidad del conocimiento |
| **S5: MCPs** | 8 min | Demo | MOMENTO WOW (Playwright) |
| **S6: Modernización** | 7 min | Demo + slides | ROI mayor |
| **S7: Visión y Cierre** | 5 min | Slides | Reflexión emocional + CTA |
| **Cierre Final** | 3 min | Narrativa | Memorable |
| **Q&A** | 10 min | Conversación | Lidera si es necesario |
| **TOTAL** | ~67 min | | Flexible: S1 y S7 son recortables |

---

# 🎯 TIPS DE PRESENTACIÓN — PARA TI

1. **Pace:** No apures. La tensión narrativa DEPENDE de pausas.
   - Cuando dices "¿Qué pasa?" — ESPERA.
   - La audiencia se compromete.

2. **Demos:** Cualquier lentitud da una oportunidad.
   - "Mientras Copilot está pensando, déjame contar qué está pasando..."
   - Usa el tiempo de espera para explicar.

3. **Interactividad:** Si es posible, haz que la audiencia sugiera issues.
   - "¿Cuál de estos issues quieren ver al agente atacar?"
   - Ownership aumenta.

4. **Fallos:** Si algo falla, es contenido.
   - "Vamos a ejecutar esto de nuevo... ah, ve este error?"
   - "El agente está debuggeando en tiempo real."
   - Convierte problema en lesson.

5. **Cierre:** NO pierdas la emotividad.
   - Equipo Atlas es REAL emocionalmente, aunque sea ficción.
   - Termina con la reflexión, no con bullets.

6. **Tu voz:** Eres entusiasmado pero no cheesy.
   - Eres ingeniero que encontró algo que funciona.
   - No eres vendedor.

---

**FIN DEL SCRIPT**

*Escrito por: Saul, Content Writer / DevRel*  
*Para: Presentador en vivo*  
*Audiencia: Desarrolladores y tech leads en español*  
*Hora: 2026-03-15*
