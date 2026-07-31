# ⚙️ Skill: Backend Architecture & RESTful APIs

Cuando el usuario pida crear un servidor, endpoints o lógica del lado del servidor (Node.js/Express, Python/FastAPI, etc.), aplica esta arquitectura limpia.

## 1. Arquitectura en Capas (Separation of Concerns)
Separa el código del servidor en capas dentro de la carpeta `server/` o `src/`:
- **Routes:** Define las rutas/endpoints de la API (Ej: `/api/users`).
- **Controllers:** Maneja la petición (request) y la respuesta (response).
- **Services:** Contiene la lógica de negocio real (cálculos, validaciones complejas).
- **Models:** Maneja la interacción directa con la base de datos.

## 2. Estándares RESTful y Códigos HTTP
- Usa sustantivos en plural para los endpoints: `/api/products` en lugar de `/api/getProducts`.
- Aplica los verbos HTTP correctos: `GET` (leer), `POST` (crear), `PUT/PATCH` (actualizar), `DELETE` (eliminar).
- Retorna siempre respuestas JSON consistentes con códigos de estado HTTP adecuados:
  - `200 OK` / `201 Created`
  - `400 Bad Request` (Datos inválidos del cliente)
  - `401 Unauthorized` / `403 Forbidden` (Errores de permisos)
  - `404 Not Found`
  - `500 Internal Server Error`

## 3. Manejo Centralizado de Errores
- Utiliza middleware para capturar errores globales sin tirar abajo el servidor (*crash*).
- NUNCA expongas *stack traces* o errores internos de la base de datos al cliente en producción.