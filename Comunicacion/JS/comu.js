// JS/comu.js
let vocalRandom = obtenerVocal(); // Genera una vocal aleatoria

function obtenerVocal() {
    const vocales = ['a', 'e', 'i', 'o', 'u'];
    return vocales[Math.floor(Math.random() * vocales.length)];
}

function adivinarVocal() {
    const input = document.getElementById('inputVocal').value;
    const resultado = document.getElementById('resultado');
    
    // Cargar los audios
    const audioCorrecto = new Audio('corret.mp3');
    const audioIncorrecto = new Audio('incorret.mp3');

    if (input === vocalRandom) {
        resultado.textContent = "¡Correcto! Has adivinado la vocal.";
        audioCorrecto.play(); // Reproduce el audio correcto
        vocalRandom = obtenerVocal(); // Genera una nueva vocal para adivinar
    } else {
        resultado.textContent = "Incorrecto. Inténtalo de nuevo.";
        audioIncorrecto.play(); // Reproduce el audio incorrecto
    }

    // Limpia el input
    document.getElementById('inputVocal').value = '';
}
