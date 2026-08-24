console.log("Quiz JavaScript chargé !");
// 1. Les données du quiz (Questions et réponses)
const questions = [
    {
        question: "Quelle est la capitale de la France ?",
        answers: [
            { text: "Marseille", correct: false },
            { text: "Paris", correct: true },
            { text: "Lyon", correct: false },
            { text: "Bordeaux", correct: false }
        ]
    },
    {
        question: "Quel langage structure une page web ?",
        answers: [
            { text: "CSS", correct: false },
            { text: "JavaScript", correct: false },
            { text: "HTML", correct: true },
            { text: "Python", correct: false }
        ]
    },
    {
        question: "Combien font 5 x 5 ?",
        answers: [
            { text: "20", correct: false },
            { text: "25", correct: true },
            { text: "30", correct: false },
            { text: "15", correct: false }
        ]
    }
];

// 2. Sélection des éléments du DOM
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const scoreContainerElement = document.getElementById('score-container');
const scoreTextElement = document.getElementById('score-text');

let currentQuestionIndex = 0;
let score = 0;

// 3. Lancer le quiz
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    
    // --- ON REMET LE BOUTON À NEUF ICI ---
    nextButton.innerText = "Question suivante"; 
    nextButton.onclick = null;                  
    
    nextButton.classList.add('hide');
    scoreContainerElement.classList.add('hide');
    questionContainerElement.classList.remove('hide');
    showQuestion();
}

// 4. Afficher une question
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    // Créer un bouton pour chaque réponse
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            // On ajoute un attribut de données pour identifier la bonne réponse
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

// 5. Nettoyer l'écran (enlever les anciens boutons)
function resetState() {
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

// 6. Gérer le clic sur une réponse
function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";

    if (isCorrect) {
        selectedButton.classList.add('correct');
        score++;
    } else {
        selectedButton.classList.add('wrong');
    }

    // Désactiver tous les boutons après le choix et montrer la bonne réponse
    Array.from(answerButtonsElement.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add('correct');
        }
        button.disabled = true; // Empêche de tricher en recliquant
    });

    // Afficher le bouton "Suivant"
    nextButton.classList.remove('hide');
}

// 7. Passer à la question suivante ou afficher le score
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
});

// 8. Afficher le score final
function showScore() {
    questionContainerElement.classList.add('hide');
    scoreContainerElement.classList.remove('hide');
    scoreTextElement.innerText = `Vous avez obtenu ${score} sur ${questions.length} points !`;
    
    // Transformer le bouton "Suivant" en bouton "Recommencer"
    nextButton.innerText = "Recommencer le Quiz";
    nextButton.classList.remove('hide');
    nextButton.onclick = startQuiz; 
}

// Initialisation au chargement de la page
startQuiz();