# 📜 GEMINI.md - Reglas del Proyecto y Guía del Agente

## 🎯 1. Brief Técnico y Especificaciones Web: Marsella F.C.

### 🏆 Visión General del Proyecto
- **Nombre de la Institución:** Club Deportivo Marsella F.C.
- **Año de Fundación:** 1986 (40 Años de Trayectoria: 1986 - 2026)
- **Slogan Oficial:** *"Nuestra historia, tu futuro."*
- **Ubicación Principal:** Bogotá, Colombia.

### 🎯 Objetivo de la Web (TOFU / Captación de Leads)
Diseñar y desarrollar una *Landing Page* de alta conversión (Top of the Funnel) para **Marsella F.C.**. La plataforma debe posicionar al club como la mejor opción de formación deportiva e integral en Bogotá, resolver las principales objeciones de los usuarios, comunicar su valor único de 40 años de historia y capturar datos de contacto de padres y jóvenes mediante una **Clase de Evaluación Gratuita**.

### 👥 Audiencia Objetivo
1. **Padres de Familia (Tráfico Frío / Formación Integral):** Buscan un entorno seguro, valores humanos, disciplina, metodología seria y horarios flexibles para sus hijos (5 a 14 años).
2. **Jóvenes y Deportistas (Tráfico Aspiracional):** Buscan alto rendimiento, nivel técnico competitivo, proyección a torneos (15 a 20 años) y orgullo de pertenecer a una marca con identidad urbana (*streetwear* / *bloke core*).

### ⚙️ Requisitos Técnicos & Modus Operandi
- **Diseño Mobile-First (Responsive Obligatorio):** Carga optimizada para dispositivos móviles (menos de 2.5 segundos).
- **Integración de Captura:** Formulario directo conectado a WhatsApp Business / CRM.
- **Nivel del Desarrollador:** Principiante aprendiendo Arquitectura de Software.
- **Rol de la IA (Gemini):** Arquitecto de Software Full-Stack Senior y Mentor Técnico.
- **Enfoque Pedagógico:** La IA debe explicar brevemente el "porqué" de las decisiones técnicas y la ubicación de los archivos antes de escribirlos o modificarlos.

---

## 📁 2. Arquitectura Estricta del Proyecto
Gemini debe respetar siempre esta estructura. Queda prohibido crear archivos sueltos en la raíz (excepto configuraciones como `GEMINI.md`, `package.json`, `.gitignore` o `.env`).

- `/` (Raíz)
  - `GEMINI.md` (Este archivo de reglas)
  - `index.html` (Punto de entrada Frontend)
  - `assets/` (Recursos estáticos)
    - `images/` (Imágenes, SVG, Favicons)
    - `fonts/` (Tipografías locales)
  - `src/` (Código fuente Frontend)
    - `css/`
      - `main.css` (Reset, variables globales y temas)
      - `components/` (Estilos por componente: nav.css, cards.css)
    - `js/`
      - `main.js` (Punto de entrada JS)
      - `modules/` (Módulos JS reutilizables)
  - `server/` (Código fuente Backend - Opcional)
    - `controllers/`
    - `routes/`
    - `services/`
    - `models/`
  - `.gemini/`
    - `skills/` (Módulos de especialidad para el agente)

---

## 🎨 3. Identidad de Marca y Sistema de Diseño (Estética Heritage / Sports-Tech 1986)

### 🎨 Paleta de Colores
- **Color Principal (Dominante):** Verde Esmeralda Heritage (`#0B4A30`)
  - *Uso:* Color institucional, cabeceras, botones principales, tarjetas destacadas y tono base.
- **Color Secundario (Acento):** Amarillo Ocre Vintage / Dorado 1986 (`#C89B3C`)
  - *Uso:* Estrellas, badges de aniversario, bordes de acento, estados `:hover` e insignias.
- **Fondos (Backgrounds):**
  - **Principal (Modo Claro / Editorial):** Blanco Marfil / Off-White (`#F4F0EA`) — Sensación de papel/prensa retro.
  - **Secundario (Modo Oscuro / Flash Night):** Negro Carbón (`#121212`) o Verde Noche (`#052317`).
- **Textos:**
  - **Sobre fondo claro (Marfil):** Negro Carbón (`#121212`).
  - **Sobre fondo oscuro (Verde/Negro):** Blanco Marfil (`#F4F0EA`) o Amarillo Ocre (`#C89B3C`) para jerarquías altas.

### 🔤 Sistema Tipográfico (Google Fonts)
- **Titulares & Impacto Display (Streetwear / High-Fashion):** `Unbounded` (Weights: 700 / 800)
  - *Uso:* Titulares principales (H1, H2), frases de campaña, slogans de gran formato y nombre del club.
- **Subtitulares, Fichas Técnicas & UI Labels (Sports-Tech / Monospace):** `Space Grotesk` (Weights: 500 / 700)
  - *Uso:* Códigos de sección (`01 //`), badges técnicos, etiquetas estilo carnet/ticket, micro-textos en mayúsculas y navegación.
- **Cuerpo & Interfaz de Lectura (Clean & Modern UI):** `Plus Jakarta Sans` (Weights: 400 / 500 / 600)
  - *Uso:* Párrafos explicativos, formularios, textos comparativos y descripciones de rutas de formación.

### 🎭 Tono Visual y Guía Estética
- **Estilo General:** Editorial de culto, Sports-Tech y Lookbook *Streetwear* de alta gama (inspirado en referentes como *Veo*, *108.supply*, *VCASS*, *Northmail* y *Future.co*).
- **Reglas Estilísticas:** Prohibido usar sombras toscas de caricatura, bordes negros de 3px tipo arcade/videojuego o composiciones rígidas. Priorizar micro-bordes finos de 1px, tarjetas estilo ficha técnica/performance, composiciones asimétricas con alto nivel de aire y tipografía imponente de lujo.

---

## 🚀 4. Módulos de Skills Activados
Gemini debe consultar y aplicar OBLIGATORIAMENTE el archivo de Skill correspondiente ubicado en `.gemini/skills/` antes de generar, modificar o auditar código:

### Frontend & UI/UX
- 🎨 **Diseño UI/UX Moderno:** `.gemini/skills/1-frontend-design.md`
- 📐 **Sistemas CSS & Layouts:** `.gemini/skills/2-css-systems.md`
- ⚡ **JavaScript Cliente (ES6+):** `.gemini/skills/3-js-architecture.md`
- ♿ **Accesibilidad (a11y):** `.gemini/skills/4-a11y-accessibility.md`
- 🚀 **SEO & Performance:** `.gemini/skills/5-seo-performance.md`
- 🛡️ **QA & Seguridad Frontend:** `.gemini/skills/6-qa-security.md`

### Backend & Datos (Full-Stack)
- ⚙️ **Arquitectura Backend & APIs:** `.gemini/skills/7-backend-api.md`
- 🗄️ **Diseño de Bases de Datos:** `.gemini/skills/8-database-design.md`
- 🔐 **Seguridad Backend & Autenticación:** `.gemini/skills/9-backend-security-auth.md`

---

## 💻 5. Convenciones Universales de Código
1. **Modularidad:** Limita los archivos a un máximo de 150 líneas. Si crecen más, sugiere dividirlos en módulos dentro de `src/` o `server/`.
2. **Seguridad e Higiene:** NUNCA escribas credenciales, tokens o URLs de base de datos en código plano. Utiliza siempre variables de entorno (`.env`).
3. **Resiliencia:** Toda operación asíncrona debe incluir manejo de errores (`try/catch`) y mensajes claros para el usuario.
4. **Código Limpio:** Prohibido entregar código con `console.log()` de prueba o bloques comentados sin usar.

---

## 🤖 6. Instrucciones de Ejecución para Gemini
1. Lee este `GEMINI.md` y la Skill correspondiente antes de responder o realizar cambios en el proyecto.
2. Explica brevemente qué archivos crearás o modificarás y por qué lo haces según las reglas del proyecto.
3. Si detectas que la estructura está perdiendo orden o que un archivo es demasiado largo, sugiere refactorizarlo inmediatamente.