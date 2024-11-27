function mostrarLecciones(cursoId) {
    // Ocultar todas las secciones de lecciones
    document.querySelectorAll('.contenedor-lecciones').forEach(function(seccion) {
        seccion.style.display = 'none';
    });

    // Mostrar la sección seleccionada
    document.getElementById(cursoId).style.display = 'block';
}