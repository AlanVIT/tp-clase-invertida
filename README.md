# Trabajo Practico de Repaso - Operacion Rescate II

Este proyecto fue creado para practicar depuracion de backend con Node.js, Express, JWT, autenticacion y autorizacion.

Importante: este backend tiene errores intencionales. La idea NO es rehacerlo, sino analizarlo, detectar problemas y corregirlos.

## Requisitos

- Node.js 18+
- npm

## Instalacion

1. Copiar variables de entorno:

```bash
cp .env.example .env
```

2. Instalar dependencias:

```bash
npm install
```

3. Ejecutar el proyecto:

```bash
npm run dev
```

## Endpoints disponibles

| Método | Ruta | Protección | Descripción |
|--------|------|------------|-------------|
| POST | `/api/auth/register` | Pública | Registra un usuario nuevo (`role: "user"`) y devuelve un JWT. |
| POST | `/api/auth/login` | Pública | Autentica por email/password y devuelve un JWT. |
| GET | `/api/users/me` | JWT requerido | Perfil del usuario autenticado. |
| PUT | `/api/users/me` | JWT requerido | Actualiza el nombre del usuario autenticado. |
| GET | `/api/users/orders` | JWT requerido | Lista de pedidos de ejemplo. |
| GET | `/api/admin/all` | JWT requerido + rol `admin` | Lista todos los usuarios (sin exponer password). |

Usuario admin semilla (ver `src/data/db.js`): `admin@market.local` / `admin123`.

## Objetivo para estudiantes

- Lograr registro y login funcional.
- Proteger rutas correctamente con JWT.
- Corregir respuestas HTTP.
- Documentar cada error encontrado.

## Estructura

- src/server.js
- src/app.js
- src/routes
- src/controllers
- src/middleware
- src/utils
- src/data
- docs/REGISTRO_ERRORES_TEMPLATE.md

## Nota para docente

Existe una guia interna con lista de errores intencionales en docs/GUIA_DOCENTE_ERRORES.md.
No compartir ese archivo con los alumnos.
