let currentQuestion;
let score = 0;

// Cargar sonidos
const soundCorrect = new Audio('corret.mp3');
const soundIncorrect = new Audio('incorret.mp3');

function generateQuestion() {
    const num1 = Math.floor(Math.random() * 20) + 1;
    const num2 = Math.floor(Math.random() * num1) + 1; // Asegúrate que num2 sea <= num1
    const operation = Math.random() < 0.5 ? '+' : '-';

    currentQuestion = {
        question: `${num1} ${operation} ${num2}`,
        answer: operation === '+' ? num1 + num2 : num1 - num2
    };

    document.getElementById('question').innerText = currentQuestion.question;
    document.getElementById('result').innerText = '';
    document.getElementById('answer').value = '';
    document.getElementById('next').style.display = 'none';
    updateScoreDisplay();
}

function updateScoreDisplay() {
    document.getElementById('score').innerText = `Puntaje: ${score}`;
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('answer').value);
    if (userAnswer === currentQuestion.answer) {
        document.getElementById('result').innerText = '¡Correcto!';
        score++;
        soundCorrect.play(); // Reproducir sonido correcto
    } else {
        document.getElementById('result').innerText = `Incorrecto! La respuesta correcta es ${currentQuestion.answer}.`;
        soundIncorrect.play(); // Reproducir sonido incorrecto
    }
    updateScoreDisplay(); // Actualizar la puntuación mostrada
    document.getElementById('next').style.display = 'block';
}

function nextQuestion() {
    generateQuestion();
}

// Generar la primera pregunta al cargar
generateQuestion();
