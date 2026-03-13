# Equipo Atlas Copilot Instructions

## Convenciones del equipo

- Usa `camelCase` para variables y `PascalCase` para clases.
- Todas las respuestas de API deben seguir el formato `{ success: boolean, data: any, error?: string }`.
- Maneja errores con `try/catch` y códigos HTTP apropiados.
- Agrega comentarios JSDoc en todas las funciones públicas.
- Usa comentarios en español para explicar lógica de negocio.

## Guías de implementación

- Mantén la app simple y demo-ready.
- Prefiere cambios pequeños y legibles en lugar de sobrearquitectura.
- Conserva algunos patrones legacy cuando una issue del backlog dependa de ellos.
