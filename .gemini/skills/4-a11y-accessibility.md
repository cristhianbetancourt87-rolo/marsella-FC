# ♿ Skill: Accessibility (a11y) & WCAG AA Standards

Cualquier componente HTML o interactividad generada DEBE cumplir con los estándares de accesibilidad WCAG 2.1 Nivel AA.

## 1. Estructura Semántica Correcta
- Jamás reemplaces botones o enlaces interactivos por elementos `<div>` o `<span>`. Usa `<button>` para acciones en la app y `<a>` para navegación entre páginas.
- Mantén una jerarquía de encabezados lógica y continua (`<h1>` a `<h6>`). Solo debe existir un `<h1>` por página.

## 2. Atributos ARIA y Navegación por Teclado
- Utiliza atributos ARIA para componentes dinámicos (Ej: `aria-expanded="true/false"` en menús desplegables, `aria-hidden="true"` en iconos decorativos).
- Garantiza que TODOS los elementos interactivos reciban foco mediante el teclado (`tabindex="0"` o estado nativo).
- **Indicador de Foco:** Nunca elimines `outline: none;` sin proveer un reemplazo visual llamativo usando `:focus-visible`.

## 3. Formularios y Contenido Multimedia
- Todo campo `<input>`, `<select>` o `<textarea>` debe estar asociado a una etiqueta `<label for="...">`.
- Las imágenes informativas deben tener un atributo `alt` descriptivo. Las imágenes puramente decorativas deben llevar `alt=""`.