# Basher Demo App Decision

## Contexto

El scaffold inicial de Equipo Atlas necesita servir tanto para demos de features como para demos de modernización.

## Decisión propuesta

Usar almacenamiento en archivo JSON con acceso directo desde el modelo de productos y callbacks de Node.js en lugar de async/await o un repository pattern.

## Motivo

- Mantiene el scaffold corto y entendible para una demo en vivo.
- Deja una deuda técnica controlada para issues de modernización.
- Permite demostrar refactors multiarchivo sin agregar infraestructura extra.
