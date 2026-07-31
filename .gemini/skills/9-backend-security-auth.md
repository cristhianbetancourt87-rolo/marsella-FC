# 🔐 Skill: Backend Security, Auth & Secrets

Aplica estas medidas de seguridad críticas en cualquier servidor o API para proteger los datos de los usuarios.

## 1. Autenticación y Manejo de Contraseñas
- **Hasheo Seguro:** NUNCA guardes contraseñas en texto plano. Utiliza algoritmos de hasheo robustos con *salt* (como `bcrypt` o `argon2`).
- **Sesiones / JWT:** Usa Tokens JSON Web (JWT) con tiempo de expiración corto para autenticación *stateless*, o cookies `HttpOnly` y `SameSite=Strict` para mitigar ataques XSS y CSRF.

## 2. Protección contra Inyecciones y Ataques
- **Prevención de SQL Injection:** Utiliza siempre consultas parametrizadas o un ORM. Jamás concatenes variables del usuario directamente en un string SQL.
- **CORS (Cross-Origin Resource Sharing):** Configura CORS de forma estricta. No uses `origin: '*'` en producción; autoriza únicamente los dominios del frontend permitidos.
- **Rate Limiting:** Implementa limitación de peticiones (ej. `express-rate-limit`) en rutas sensibles como `/login` o `/register` para prevenir ataques de fuerza bruta.

## 3. Gestión de Secretos
- Toda clave API, secreto JWT, llave privada o token externo DEBE leerse desde `process.env`.