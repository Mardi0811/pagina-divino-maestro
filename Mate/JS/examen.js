let correctas = [2, 2, 2, 2, 3];
// Arreglo donde se guarda las respuestas del usuario
let opcion_elegida = [];

// Variable para contar la cantidad de respuestas correctas
let cantidad_correctas = 0;

// Función que toma el número de la pregunta y el input elegido de esa pregunta
function respuesta(num_pregunta, seleccionada) {
    // Guardo la respuesta elegida
    opcion_elegida[num_pregunta] = parseInt(seleccionada.value); // Asegúrate de convertir a número

    // Armo el id para seleccionar el section correspondiente
    let id = "p" + num_pregunta;

    // Selecciono el elemento padre donde están los labels
    const labels = document.getElementById(id).children; 

    // Pongo en blanco el fondo de los inputs para cuando elija otra opción
    for (let i = 0; i < labels.length; i++) {
        labels[i].style.backgroundColor = "white"; 
    }

    // Doy el color al label seleccionado
    seleccionada.parentNode.style.backgroundColor = "#cec0fc"; 
}

// Función que compara los arreglos para saber cuántas estuvieron correctas
function corregir() {
    cantidad_correctas = 0; // Reinicia el contador de correctas
    for (let i = 0; i < correctas.length; i++) {
        if (correctas[i] === opcion_elegida[i]) { // Uso de '===' para comparación estricta
            cantidad_correctas++;
        }
    }

    // Muestra el resultado
    document.getElementById("resultado").innerHTML = "Respuestas correctas: " + cantidad_correctas; // Mensaje más claro
}
