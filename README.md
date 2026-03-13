# Equipo Atlas Inventory App

Aplicación demo de gestión de inventario para la sesión **"GitHub Copilot: De la Sobrecarga al Superpoder"**.

## Qué incluye

- API REST en Node.js + Express para productos
- UI HTML simple para listar, crear, editar y eliminar productos
- Datos semilla de inventario para demo en vivo
- Patrones legacy intencionales para mostrar modernización con agentes

## Ejecución

```bash
npm start
```

La aplicación queda disponible en `http://localhost:3000`.

## Endpoints principales

- `GET /api/products`
- `GET /api/products/:id`
- `POST /api/products`
- `PUT /api/products/:id`
- `DELETE /api/products/:id`

## Limitaciones intencionales para la demo

- El filtro por categoría aún no funciona
- No hay soporte de barcode scanning
- No hay notificaciones de bajo inventario
- No hay validación de entrada en `POST` y `PUT`
- Se usan callbacks y acceso directo a datos para dejar espacio a refactors guiados por agentes
- No existen tests todavía
