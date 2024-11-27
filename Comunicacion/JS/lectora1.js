document.getElementById('submit').addEventListener('click', function() {
    let puntuacion = 0;
    
    // Respuestas correctas
    const respuestasCorrectas = {
        respuesta1: 'Pescado',
        respuesta2: 'En la casa',
        respuesta3: 'Gato',
        respuesta4: 'Sólida',
        respuesta5: 'Come, Juega'
    };
    
    // Verificar las respuestas
    for (let pregunta in respuestasCorrectas) {
        const radioSeleccionado = document.querySelector(`input[name="${pregunta}"]:checked`);
        if (radioSeleccionado && radioSeleccionado.value === respuestasCorrectas[pregunta]) {
            puntuacion++;
        }
    }
    
    // Mostrar el resultado
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.textContent = `Puntuación: ${puntuacion} de ${Object.keys(respuestasCorrectas).length}`;

    // Reproducir audio si las respuestas son correctas o incorrectas
    const correcto = document.getElementById('correcto');
    const incorrecto = document.getElementById('incorrecto');
    
    if (puntuacion === Object.keys(respuestasCorrectas).length) {
        correcto.play();
    } else {
        incorrecto.play();
    }
});
