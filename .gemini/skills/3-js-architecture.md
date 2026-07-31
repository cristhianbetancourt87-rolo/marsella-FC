# ⚡ Skill: JavaScript Architecture & Vanilla ES6+

Cuando generes lógica o interactividad en JavaScript, sigue estos estándares de arquitectura limpia y desarrollo moderno sin frameworks.

## 1. Modularidad
- Usa exclusivamente **ES6 Modules** (`import` / `export`).
- El HTML debe cargar el script principal con `type="module"`: `<script type="module" src="./src/js/main.js"></script>`.
- Cada módulo en `src/js/modules/` debe cumplir el principio de **Responsabilidad Única** (Ej: `theme-toggle.js`, `mobile-menu.js`, `form-validator.js`).

## 2. Manipulación Limpia del DOM
- Cachea las selecciones de elementos en constantes al inicio del módulo.
- Usa **Delegación de Eventos** (*Event Delegation*) al trabajar con listas o elementos generados dinámicamente para ahorrar recursos de memoria.
- Verifica la existencia de los elementos en el DOM antes de agregar controladores de eventos (`addEventListener`) para evitar errores silenciosos en consola.

## 3. Manejo Asíncrono y Estado
- Usa `async / await` en lugar de `.then()` encadenados para todas las peticiones `fetch`.
- Envuelve las llamadas asíncronas dentro de bloques `try...catch` y muestra estados visuales en la interfaz (Cargando, Éxito, Error).
- Mantén el estado en objetos limpios en JS y actualiza el DOM de forma declarativa mediante funciones de renderizado.