# 🗄️ Skill: Database Design & Data Integrity

Aplica estas reglas cuando se requiera diseñar esquemas de datos, tablas, colecciones o consultas a bases de datos (SQL o NoSQL).

## 1. Diseño de Esquemas e Integridad
- **Normalización (SQL):** Evita la redundancia de datos. Usa claves primarias (`id` UUID o auto-incremental) y claves foráneas (`foreign keys`) para relaciones entre tablas.
- **Tipado Estricto:** Define tipos de datos adecuados (Ej: no uses `VARCHAR` o `Text` para guardar fechas o montos monetarios).
- **Campos Obligatorios:** Incluye siempre en cada tabla/colección los campos auditables: `created_at` y `updated_at`.

## 2. Variables de Entorno y Conexiones
- **Prohibido:** NUNCA escribas credenciales de la base de datos (usuario, contraseña, host) directamente en el código.
- Obliga el uso de un archivo `.env` local (`DATABASE_URL=...`) y asegúrate de agregar `.env` al `.gitignore`.

## 3. Optimización de Consultas
- Crea **Índices** en las columnas que se usen frecuentemente en cláusulas de búsqueda (`WHERE`, `JOIN` o filtros).
- Utiliza ORMs/ODMs (como Prisma, Mongoose o Sequelize) o consultas preparadas para abstracción segura de los datos.