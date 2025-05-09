# CORRECCIÓN DE MALAS PRÁCTICAS EN EL CÓDIGO

## 1. ¿Qué mala práctica se indetificaron?

Se detectaron varias malas prácticas en el código HTML y CSS del proyecto original:

- Estilos CSS escritos directamente dentro del archivo HTML.
- Uso excesivo de la etiqueta `<div>` sin semántica.
- Enlaces `<a href="#">` sin destino válido.
- Uso innecesario de IDs en elementos repetidos.
- Falta de comentarios explicativos en secciones del código.
- Repetición de colores en variables CSS.
- CSS no modularizado.

## 2. ¿Por qué es considerada una mala práctica?

Estas prácticas dificultan la **mantenibilidad**, **accesibilidad**, **escalabilidad** y **legibilidad** del código. Además:

- La mezcla de HTML y CSS en un solo archivo viola el principio de **separación de responsabilidades**.
- El uso excesivo de IDs puede causar conflictos al reutilizar componentes.
- Los enlaces vacíos pueden generar errores o experiencias de usuario confusas.
- La falta de comentarios complica el trabajo en equipo.

## 3. ¿Cómo se solucionó?

- Se trasladaron todos los estilos a un archivo externo llamado `styles.css`.
- Se mejoró la semántica del HTML reemplazando `<div>` por etiquetas como `<article>`, `<aside>`, `<section>`.
- Se eliminaron IDs innecesarios y se utilizaron clases según BEM.
- Se agregaron comentarios en las secciones del código.
- Se consolidaron las variables CSS repetidas.

## 4. ¿Qué beneficios aporta la solución?

- El código es más limpio, comprensible y fácil de mantener.
- Se promueve la reutilización de componentes.
- Se facilita la colaboración entre desarrolladores.
- Se mejora la experiencia del usuario final.
- Se sigue un estándar profesional adecuado para proyectos en GitHub.

---

Versión corregida por: Carlos Wilson Sánchez

Fecha: `2025-05-09`