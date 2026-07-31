# 📐 Skill: CSS Systems, Responsive & Layout Architecture

Cuando el usuario pida escribir estilos CSS o estructurar el diseño de una página, aplica OBLIGATORIAMENTE este estándar de arquitectura visual.

## 1. CSS Reset Moderno
- Incluye siempre un reset básico en `main.css`:
  `*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }`
  `img, picture, video, canvas, svg { display: block; max-width: 100%; }`

## 2. Sistema de Tokens (Variables CSS en :root)
- Define centralizadamente en `:root`:
  - **Espaciado:** Sistema rem basado en escala de 8px (`--space-xs: 0.5rem`, `--space-sm: 1rem`, `--space-md: 1.5rem`, `--space-lg: 2rem`, `--space-xl: 3rem`).
  - **Breakpoints:** `--bp-sm: 640px`, `--bp-md: 768px`, `--bp-lg: 1024px`, `--bp-xl: 1280px`.
  - **Soportar Modo Claro/Oscuro:** Usa variables CSS para fondos y textos (`--bg-body`, `--text-main`) para que cambiar de tema sea solo modificar atributos `data-theme`.

## 3. Estrategia de Layout
- **CSS Grid:** Úsalo para la estructura macro (páginas completas, galerías, grillas de tarjetas).
- **Flexbox:** Úsalo para alineaciones unidimensionales (barras de navegación, listas de botones, contenido interno de componentes).
- **Enfoque Mobile-First:** 
  - El CSS base se diseña sin `@media queries` (para celulares de 320px-375px).
  - Escala progresivamente usando `@media (min-width: ...)` hacia pantallas más grandes.
- **Prohibido:** No uses valores absolutos de `px` en anchos de contenedores principales; usa `max-width`, porcentajes, `vw` o la función `clamp()` para tipografía fluida.