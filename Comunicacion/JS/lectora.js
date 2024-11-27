document.getElementById('submit').addEventListener('click', function() {
    const respuestasCorrectas = {
        respuesta1: 'Pescado',
        respuesta2: 'En la casa',
        respuesta3: 'Gato'
    };

    let puntaje = 0;
    let totalPreguntas = 0;

    // Respuesta 1
    const respuesta1 = document.querySelector('input[name="respuesta1"]:checked');
    if (respuesta1) {
        totalPreguntas++;
        if (respuesta1.value === respuestasCorrectas.respuesta1) {
            puntaje++;
            document.getElementById('correcto').play();
        } else {
            document.getElementById('incorrecto').play();
        }
    }

    // Respuesta 2
    const respuesta2 = document.querySelector('input[name="respuesta2"]:checked');
    if (respuesta2) {
        totalPreguntas++;
        if (respuesta2.value === respuestasCorrectas.respuesta2) {
            puntaje++;
            document.getElementById('correcto').play();
        } else {
            document.getElementById('incorrecto').play();
        }
    }

    // Respuesta 3
    const respuesta3 = document.querySelector('input[name="respuesta3"]:checked');
    if (respuesta3) {
        totalPreguntas++;
        if (respuesta3.value === respuestasCorrectas.respuesta3) {
            puntaje++;
            document.getElementById('correcto').play();
        } else {
            document.getElementById('incorrecto').play();
        }
    }

    // Resultado final
    const resultadoTexto = `Has respondido correctamente ${puntaje} de ${totalPreguntas} preguntas.`;
    document.getElementById('resultado').innerText = resultadoTexto;
});
