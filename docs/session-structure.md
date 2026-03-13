# GitHub Copilot: De la Sobrecarga al Superpoder

> **Cómo los agentes de GitHub Copilot transforman la capacidad de tu equipo**

---

## Datos de la Sesión

| Campo | Detalle |
|-------|---------|
| **Duración** | 50 minutos (+ 10 min Q&A) |
| **Audiencia** | Desarrolladores, tech leads y engineering managers que buscan escalar la capacidad de sus equipos |
| **Formato** | Slides narrativas + demos en vivo |
| **Nivel** | Intermedio — se asume conocimiento básico de desarrollo de software |

## Takeaways Clave

Al final de esta sesión, la audiencia debe poder:

1. **Reconocer** los síntomas de un equipo con problemas de capacidad y cómo los agentes pueden ayudar
2. **Entender** qué son los agentes de GitHub Copilot, los agentes personalizados y los MCPs
3. **Visualizar** cómo aplicar agentes en flujos de trabajo reales (features, testing, modernización)
4. **Actuar** — tener un primer paso concreto para adoptar agentes en su equipo

---

## Arco Narrativo

```
PROBLEMA → DESCUBRIMIENTO → SOLUCIÓN → PRUEBA → VISIÓN
   😰          💡              🛠️        ✅        🚀
```

La sesión cuenta la historia de un equipo de desarrollo ficticio — **Equipo Atlas** — que mantiene una aplicación de gestión de inventario. Tienen más trabajo del que pueden manejar. A lo largo de la sesión, descubren y adoptan GitHub Copilot Agents para transformar su capacidad.

---

## Estructura Detallada por Sección

### Sección 1: El Problema (8 min)

| | |
|---|---|
| **Formato** | Slides narrativas |
| **Mensaje clave** | "Tu equipo no necesita más gente — necesita multiplicadores" |

**Contenido:**
- Presentar al Equipo Atlas: 4 devs, 1 backlog enorme, deadlines que se acercan
- Mostrar el backlog lleno de issues (el mismo repo que usaremos en los demos)
- Estadísticas reales: el gap entre demanda de software y capacidad de desarrollo
- Pain points reconocibles: code reviews atrasados, testing manual, deuda técnica acumulada, features nuevas que nunca llegan

**Transición:** "¿Y si su equipo tuviera compañeros de trabajo que nunca duermen, nunca se aburren y aprenden tu codebase en segundos?"

---

### Sección 2: El Descubrimiento — ¿Qué son los Agentes? (7 min)

| | |
|---|---|
| **Formato** | Slides + demo breve |
| **Mensaje clave** | "Los agentes no son autocompletado — son compañeros de equipo autónomos" |

**Contenido:**
- Evolución: Copilot completions → Chat → Agents
- Qué hace diferente a un agente: autonomía, contexto, iteración, uso de herramientas
- El ecosistema: Agentes en VS Code, agentes en GitHub (Copilot Coding Agent), Custom Agents, MCPs
- Mapa visual: qué herramienta para qué problema

**Demo breve (2 min):** Abrir VS Code, mostrar el panel de Copilot, abrir agent mode. Mostrar cómo el agente puede leer archivos, ejecutar comandos, iterar. Primer contacto — nada complejo.

**Transición:** "Veamos cómo el Equipo Atlas empieza a usar agentes para atacar su backlog."

---

### Sección 3: Agentes en Acción — Features Nuevas (10 min)

| | |
|---|---|
| **Formato** | Demo en vivo |
| **Mensaje clave** | "Un agente puede construir un feature completo: código, tests y documentación" |

**Demos:**
1. **User Story → Código funcional** (~6 min): Tomar una issue del backlog (ej: "Como usuario quiero filtrar productos por categoría"). Usar el agente en VS Code para implementar la feature completa — modelo, API endpoint, tests unitarios. Mostrar cómo el agente itera cuando algo falla.
2. **Multi-file changes** (~4 min): Segunda issue más compleja (ej: "Sistema de notificaciones"). Mostrar cómo el agente coordina cambios en múltiples archivos, entiende la arquitectura existente.

**Lo que la audiencia debe notar:**
- El agente lee el código existente antes de escribir
- Genera tests automáticamente
- Itera cuando encuentra errores
- Mantiene el estilo del codebase

**Transición:** "Pero no todo cabe en un agente genérico. ¿Qué pasa cuando necesitas que el agente siga las reglas de TU equipo?"

---

### Sección 4: Agentes Personalizados (8 min)

| | |
|---|---|
| **Formato** | Demo en vivo |
| **Mensaje clave** | "Puedes enseñarle a un agente las reglas y patrones de tu equipo" |

**Demos:**
1. **Custom instructions / copilot-instructions.md** (~3 min): Mostrar cómo crear instrucciones que definen convenciones del equipo (naming, patrones, arquitectura). Ejecutar una tarea con y sin instrucciones — la diferencia es clara.
2. **Custom agent con `@workspace` context** (~5 min): Tomar una issue del backlog diseñada para custom agents (ej: "Como dev quiero un endpoint que siga nuestro patrón de validación"). Mostrar un agente personalizado que conoce los patrones del equipo y genera código consistente.

**Lo que la audiencia debe notar:**
- Las instrucciones personalizadas cambian radicalmente el output
- Se pueden codificar las prácticas del equipo
- El conocimiento del equipo se vuelve escalable

**Transición:** "¿Y si el agente pudiera no solo escribir código sino también interactuar con herramientas externas?"

---

### Sección 5: MCPs — El Agente se Conecta al Mundo (8 min)

| | |
|---|---|
| **Formato** | Demo en vivo |
| **Mensaje clave** | "Con MCPs, el agente puede probar, desplegar, consultar bases de datos y más" |

**Demos:**
1. **Playwright MCP para testing** (~5 min): Tomar una issue de testing del backlog (ej: "Como QA quiero tests end-to-end para el flujo de login"). Mostrar cómo el agente usa Playwright MCP para generar y ejecutar tests E2E. El agente abre el browser, interactúa con la app, verifica resultados.
2. **Otro MCP útil** (~3 min): Demo rápido de otro MCP (ej: base de datos, API externa, o GitHub MCP para gestión de issues). Mostrar la extensibilidad del concepto.

**Lo que la audiencia debe notar:**
- Los MCPs extienden las capacidades del agente más allá del código
- Playwright MCP: el agente literalmente "ve" y "usa" la aplicación
- El ecosistema de MCPs está creciendo rápido

**Transición:** "Ya vimos cómo construir lo nuevo. Pero ¿qué pasa con todo el código legacy que ya tienen?"

---

### Sección 6: Modernización — El Caso Más Valioso (7 min)

| | |
|---|---|
| **Formato** | Demo en vivo + slides |
| **Mensaje clave** | "La modernización es donde los agentes generan el mayor ROI" |

**Demo (~5 min):**
- Tomar una issue de modernización del backlog (ej: "Migrar módulo de autenticación de callbacks a async/await" o "Refactorizar servicio monolítico a patrón repository")
- Mostrar cómo el agente entiende código legacy, propone un plan de refactoring, lo ejecuta y genera tests para validar que el comportamiento no cambió

**Slides (~2 min):**
- Escenarios de modernización donde los agentes brillan: migraciones de frameworks, actualización de patrones, internacionalización, accesibilidad
- El ROI: reducción de riesgo + velocidad + preservación de conocimiento

**Transición:** "Hagamos zoom out — ¿qué significa todo esto para su equipo?"

---

### Sección 7: El Nuevo Equipo — Cierre y Visión (5 min)

| | |
|---|---|
| **Formato** | Slides narrativas |
| **Mensaje clave** | "Los agentes no reemplazan desarrolladores — los multiplican" |

**Contenido:**
- Volver al Equipo Atlas: antes vs. después
- El backlog que vimos al inicio — ahora con issues cerrados por agentes
- Reflexión: el rol del desarrollador evoluciona de "escribir código" a "dirigir agentes"
- Qué hacer el lunes: pasos concretos para empezar
  1. Activar Copilot Agent mode en VS Code
  2. Crear un `copilot-instructions.md` con las reglas de tu equipo
  3. Probar un MCP (Playwright es buen primer paso)
  4. Elegir una tarea de modernización pequeña y dejar que el agente la ataque

---

### Q&A (10 min)

| | |
|---|---|
| **Formato** | Conversación abierta |
| **Nota** | Tener preparadas 2-3 preguntas frecuentes por si la audiencia tarda en arrancar |

**Preguntas anticipadas:**
- "¿Qué tan seguro es? ¿El código sale de mi organización?"
- "¿Funciona con [mi lenguaje/framework]?"
- "¿Cómo se compara con [otra herramienta de AI coding]?"
- "¿Cuánto cuesta?"

---

## Resumen de Tiempos

| Sección | Tiempo | Formato |
|---------|--------|---------|
| 1. El Problema | 8 min | Slides |
| 2. El Descubrimiento | 7 min | Slides + demo breve |
| 3. Agentes en Acción | 10 min | Demo en vivo |
| 4. Agentes Personalizados | 8 min | Demo en vivo |
| 5. MCPs | 8 min | Demo en vivo |
| 6. Modernización | 7 min | Demo + slides |
| 7. Cierre y Visión | 5 min | Slides |
| Q&A | 10 min | Conversación |
| **Total** | **~63 min** | |

## Notas para el Presentador

- **Ritmo:** Las secciones de demo (3-6) son el corazón. Si hay que recortar tiempo, acortar secciones 1 y 7.
- **Plan B:** Tener grabaciones de cada demo por si algo falla en vivo.
- **Repo:** El repositorio `agenticsquad/copilot-session-demo` contiene todas las user stories como issues. Esto ES el backlog del Equipo Atlas.
- **Hilo conductor:** Siempre volver al backlog. Cada demo arranca tomando un issue. Esto da coherencia narrativa.
