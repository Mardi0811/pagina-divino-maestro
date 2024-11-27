const questions = [
    {
        question: "¿Qué necesita una planta para crecer?",
        options: ["Agua", "Robo", "Comida", "Ninguna"],
        answer: "Agua"
    },
    {
        question: "¿Cuál es el planeta donde vivimos?",
        options: ["Marte", "Júpiter", "Tierra", "Venus"],
        answer: "Tierra"
    },
    {
        question: "¿Qué es el reciclaje?",
        options: ["Tirar la basura", "Reutilizar cosas", "Hacer más basura", "Ninguna de las anteriores"],
        answer: "Reutilizar cosas"
    },
    {
        question: "¿Qué insecto ayuda a polinizar las flores?",
        options: ["Mosca", "Mariposa", "Abeja", "Escarabajo"],
        answer: "Abeja"
    },
    {
        question: "¿Cómo se llama la energía que obtenemos del sol?",
        options: ["Energía solar", "Energía eólica", "Energía nuclear", "Energía fósil"],
        answer: "Energía solar"
    },
    {
        question: "¿Cuál es el océano más grande del mundo?",
        options: ["Océano Atlántico", "Océano Índico", "Océano Pacífico", "Océano Ártico"],
        answer: "Océano Pacífico"
    },
    {
        question: "¿Qué gas es esencial para la respiración de los seres humanos?",
        options: ["Oxígeno", "Dióxido de carbono", "Nitrógeno", "Helio"],
        answer: "Oxígeno"
    },
    {
        question: "¿Cuál es el país con mayor población del mundo?",
        options: ["India", "Estados Unidos", "China", "Indonesia"],
        answer: "China"
    },
    {
        question: "¿Qué instrumento se utiliza para medir la temperatura?",
        options: ["Barómetro", "Termómetro", "Higrómetro", "Anemómetro"],
        answer: "Termómetro"
    },
    {
        question: "¿En qué parte de la planta se produce la fotosíntesis?",
        options: ["Raíces", "Tallos", "Hojas", "Flores"],
        answer: "Hojas"
    },
    {
        question: "¿Cuál es el continente más grande del mundo?",
        options: ["África", "Asia", "América", "Oceanía"],
        answer: "Asia"
    },
    {
        question: "¿Qué tipo de animal es un delfín?",
        options: ["Pez", "Mamífero", "Reptil", "Anfibio"],
        answer: "Mamífero"
    },
    {
        question: "¿Quién escribió 'Romeo y Julieta'?",
        options: ["Miguel de Cervantes", "William Shakespeare", "Gabriel García Márquez", "Julio Cortázar"],
        answer: "William Shakespeare"
    },
    {
        question: "¿Cuál es el volcán más alto del mundo?",
        options: ["Kilimanjaro", "Aconcagua", "Ojos del Salado", "Mauna Kea"],
        answer: "Ojos del Salado"
    },
    {
        question: "¿Qué es el ciclo del agua?",
        options: ["Un ciclo de vida de los animales", "El proceso de evaporación y condensación", "La dispersión de semillas", "Ninguna de las anteriores"],
        answer: "El proceso de evaporación y condensación"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const correctoSound = new Audio('corret.mp3');
const incorrectoSound = new Audio('incorret.mp3');

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById('question').textContent = currentQuestion.question;
    
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => selectOption(option);
        optionsContainer.appendChild(button);
    });
}

function selectOption(option) {
    const currentQuestion = questions[currentQuestionIndex];
    if (option === currentQuestion.answer) {
        score++;
        correctoSound.play(); // Reproduce sonido correcto
    } else {
        incorrectoSound.play(); // Reproduce sonido incorrecto
    }
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById('quizContainer').style.display = 'none';
    const resultContainer = document.getElementById('result');
    resultContainer.textContent = `Tu puntuación es: ${score} de ${questions.length}`;
}

// Inicia el cuestionario
loadQuestion();
