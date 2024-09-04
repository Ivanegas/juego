const quizData = [
    {
        question: "¿Cual fue la primera pelicula que vimos juntos?",
        answers: {
            a: "La monja",
            b: "American psycho",
            c: "El silencio de los corderos"
        },
        correct: "a"
    },
    {
        question: "¿Cuál es nuestra canción favorita?",
        answers: {
            a: "MAI",
            b: "De Todo",
            c: "Cafune"
        },
        correct: "a"
    },
    {
        question: "¿Cuál es nuestra dupla en valorant?",
        answers: {
            a: "Omen y Sage",
            b: "Kj y Cypher",
            c: "Kj y Raze"
        },
        correct: "b"
    },
    {
        question: "¿Cuál fue el primer mapa de valos que jugamos juntos?",
        answers: {
            a: "Lotus",
            b: "Split",
            c: "Ascent"
        },
        correct: "b"
    },
    {
        question: "¿Qué comimos en nuestra primera cita oficial?",
        answers: {
            a: "Pizza",
            b: "Burger",
            c: "Ensalda de frutas"
        },
        correct: "a"
    },
    {
        question: "¿Qué raza de perros te dije que queria que tuvieramos en el apartamento?",
        answers: {
            a: "Pitbull y un Golden",
            b: "Golden y un husky",
            c: "Golden y un lobo"
        },
        correct: "b"
    }
];

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const nextButton = document.getElementById('next');
let currentQuestionIndex = 0;
let numCorrect = 0;

function showQuestion(questionIndex) {
    const currentQuestion = quizData[questionIndex];
    const answers = [];

    for (letter in currentQuestion.answers) {
        answers.push(
            `<label>
                <input type="radio" name="question" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
            </label>`
        );
    }

    quizContainer.innerHTML = `
        <div class="question">${currentQuestion.question}</div>
        <div class="answers">${answers.join('')}</div>
    `;
}

function checkAnswer() {
    const answerContainer = quizContainer.querySelector('.answers');
    const selector = `input[name=question]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    if (userAnswer === quizData[currentQuestionIndex].correct) {
        numCorrect++;
        alert("¡Correcto! Has sumado un punto.");
    } else {
        alert("Incorrecto. No has sumado punto.");
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        nextButton.style.display = 'block';
    } else {
        showResults();
    }
}

function showResults() {
    quizContainer.innerHTML = '';
    const texto = document.querySelector('#texto');
    texto.innerHTML = "Bien hecho";
    resultsContainer.innerHTML = `Has obtenido ${numCorrect} de ${quizData.length} puntos.<br> Espera un momento para recibir tu premio`;

    // Mostrar la ventana con el mensaje y redirigir después de 10 segundos
    setTimeout(() => {
        alert("¡Te ganaste lo siguiente!");
        window.location.href = "premio.html"; // Cambia esta URL por la que desees
    }, 10000); // 10 segundos
}

nextButton.addEventListener('click', () => {
    nextButton.style.display = 'none';
    showQuestion(currentQuestionIndex);
});

// Inicia el quiz con la primera pregunta
showQuestion(currentQuestionIndex);

quizContainer.addEventListener('click', (event) => {
    if (event.target.tagName === 'INPUT') {
        checkAnswer();
    }
});
