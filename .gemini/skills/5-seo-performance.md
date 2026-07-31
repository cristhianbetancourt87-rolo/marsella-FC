# 🚀 Skill: Technical SEO & Web Performance

Cuando construyas o edites HTML y assets, aplica estas reglas para maximizar la velocidad de carga (Core Web Vitals) y el posicionamiento en buscadores.

## 1. SEO Técnico On-Page
- Incluye siempre en la cabecera `<head>`:
  - `<meta name="description" content="...">` relevante de 150-160 caracteres.
  - `<link rel="canonical" href="...">`.
  - Etiquetas **OpenGraph** (`og:title`, `og:description`, `og:image`, `og:url`) y Twitter Cards para vistas previas en redes sociales.
- Genera un bloque de datos estructurados **JSON-LD** (`<script type="application/ld+json">`) apropiado para el tipo de sitio web (Organización, Sitio Web, Artículo).

## 2. Optimización de Carga (Performance)
- **Imágenes:** Agrega `loading="lazy"` y `decoding="async"` a todas las imágenes fuera de la primera pantalla visible (*below the fold*).
- **Imagen Héroe / LCP:** La imagen principal de la cabecera debe llevar `fetchpriority="high"` y NO llevar `loading="lazy"`.
- **Fuentes:** Usa `font-display: swap;` en CSS para evitar texto invisible mientras cargan las tipografías.
- Incluye `<link rel="preconnect">` para orígenes de terceros indispensables (como Google Fonts).