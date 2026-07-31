# 🛡️ Skill: QA, Security & Web Best Practices

Garantiza la seguridad del código frontend y la robustez contra errores comunes en producción.

## 1. Prevención de Vulnerabilidades Web (XSS)
- Jamás insertes datos directo del usuario utilizando `.innerHTML` o `document.write()`. Utiliza `textContent` o `element.innerText`.
- Si es imprescindible renderizar HTML dinámico, sanitiza las entradas previamente.

## 2. Seguridad en Enlaces y Formularios
- Todos los enlaces externos que abran en una nueva pestaña (`target="_blank"`) DEBEN incluir la propiedad `rel="noopener noreferrer"` para evitar vulnerabilidades de *tabnabbing*.
- Implementa validaciones HTML5 nativas (`required`, `pattern`, `type="email"`) combinadas con validación en JavaScript antes de procesar o enviar datos.

## 3. Limpieza de Código y Calidad
- Prohibido dejar `console.log()`, `debugger` o código comentado sin usar en la entrega final.
- Principio DRY (*Don't Repeat Yourself*): Si un bloque de lógica se repite más de dos veces, extráelo a un módulo helper dentro de `src/js/modules/utils.js`.