# 🎨 Skill: UI/UX & Modern Frontend Design

Cuando el usuario pida diseñar o construir componentes, secciones o páginas completas, aplica OBLIGATORIAMENTE este estándar de diseño de interfaz (UI) y experiencia de usuario (UX) de nivel profesional.

## 1. Sistema de Diseño Visual (Modern UI)
- **Sistema de Espaciado (Grid de 8px):** No uses valores aleatorios. Define rellenos (`padding`) y márgenes (`margin`) estrictamente basados en múltiplos de 8px (`8px`, `16px`, `24px`, `32px`, `48px`, `64px`).
- **Tipografía Limpia y Escalable:**
  - Usa fuentes Sans-Serif modernas de alta legibilidad (`Inter`, `Plus Jakarta Sans`, `System-UI`).
  - Establece una jerarquía visual clara utilizando unidades `rem` con contrastes marcados entre títulos principales (`font-weight: 700 / 800`) y texto de cuerpo (`font-weight: 400`).
- **Paleta de Colores Profesional (Regla 60-30-10):**
  - Define la paleta mediante variables CSS en `:root` (`--bg-primary`, `--bg-surface`, `--text-main`, `--text-muted`, `--accent-primary`, `--accent-hover`).
  - **Distribución:** Usa un 60% de tonos neutros/fondos, 30% de tonos secundarios (superficies o tarjetas) y un 10% para el color de acento (botones principales y llamadas a la acción).
  - Evita colores puros saturados (ej. `#000000` o `#FF0000`). Utiliza grises y tonos oscuros matizados (ej. `#0F172A`, `#1E293B` para modo oscuro o `#F8FAFC` para modo claro).
- **Profundidad, Bordes y Estética Modernos:**
  - Aplica esquinas suavemente redondeadas de manera consistente (`border-radius` de `8px` a `12px` para tarjetas y botones; `9999px` para píldoras/chips).
  - Reemplaza los bordes negros gruesos e invasivos por sombras sutiles multinivel (ej: `box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);`) o bordes finos semi-transparentes (`1px solid rgba(0, 0, 0, 0.08)`).

## 2. Micro-interacciones y Experiencia de Usuario (UX)
- **Feedback Interactivo Obligatorio:**
  - Todos los elementos interactivos (botones, enlaces, tarjetas clickeables, campos de texto) DEBEN responder visiblemente a las acciones del usuario.
  - Define estados para: `:hover` (elevación sutil o cambio de tono), `:active` (ligera compresión visual) y `:focus-visible` (anillo de foco accesible para teclado).
- **Transiciones Fluidas:**
  - Aplica suavizado en las animaciones: `transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);`. Evita animaciones demasiado lentas o estrambóticas.
- **Estados Especiales (Empty & Loading):**
  - Diseña siempre la vista para cuando no hay datos (Estado Vacío / *Empty State*) y la experiencia visual mientras se carga la información (*Skeleton Loaders* o indicadores de carga sutiles).

## 3. Composición y Jerarquía Visual
- **Punto Focal (Visual Anchor):** Cada sección o página debe tener un elemento principal que atraiga la mirada de inmediato (un botón de acción principal llamativo o un titular impactante).
- **Consistencia Visual:** Mantén alineaciones perfectas. Si creas una cuadrícula de tarjetas (*Cards*), asegúrate de que todas compartan el mismo relleno interno, tamaño de fuente e iconografía.