const words = [
    { word: 'c_mino', vowel: 'a' },
    { word: 't_erra', vowel: 'i' },
    { word: 'r_galo', vowel: 'e' },
    { word: 's_milla', vowel: 'e' },
    { word: 'c_ento', vowel: 'u' },
    // Agregando más preguntas
    { word: 'c_elo', vowel: 'i' },
    { word: 'm_iz', vowel: 'a' },
    { word: 'l_ubia', vowel: 'l' },
    { word: 'h_rmano', vowel: 'e' },
    { word: 'b_ndera', vowel: 'a' }
];

let currentWordIndex = 0;

// Crea instancias de audio
const correctSound = new Audio('corret.mp3');
const incorrectSound = new Audio('incorret.mp3');

function displayWord() {
    const currentWord = words[currentWordIndex];
    const displayedWord = currentWord.word.replace('_', '<span class="hidden-vowel">_</span>');
    document.getElementById('wordDisplay').innerHTML = displayedWord;
}

function checkVowel() {
    const userInput = document.getElementById('vowelInput').value.toLowerCase();
    const currentWord = words[currentWordIndex];

    if (userInput === currentWord.vowel) {
        document.getElementById('result').innerText = '¡Correcto!';
        // Reproduce sonido correcto
        correctSound.play();
    } else {
        document.getElementById('result').innerText = `Incorrecto. La vocal era "${currentWord.vowel}".`;
        // Reproduce sonido incorrecto
        incorrectSound.play();
    }
}

function nextWord() {
    if (currentWordIndex < words.length - 1) {
        currentWordIndex++;
    } else {
        currentWordIndex = 0;
    }
    document.getElementById('result').innerText = '';
    document.getElementById('vowelInput').value = '';
    displayWord();
}

// Mostrar la primera palabra al cargar
displayWord();
