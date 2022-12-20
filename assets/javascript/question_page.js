const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const progressText = document.querySelector("#progressText");
//const scoreText = document.querySelector("#score");
const progressBarFull = document.querySelector("#progressBarFull");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [{
        question: "What does CPU stand for?",
        choice1: "Central Processing Unit",
        choice2: "Computer Personal Unit",
        choice3: "Central Processor Unit",
        choice4: "Central Process Unit",
        answer: 1,
    },
    {
        question: "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified ?",
        choice1: "Static",
        choice2: "Final",
        choice3: "Private",
        choice4: "Public",
        answer: 2,
    },
    {
        question: "The logo for Snapchat is a Bell.",
        choice1: "False",
        choice2: "True",
        choice3: "I don't know",
        choice4: "Maybe",
        answer: 2,
    },
    {
        question: "Which programming language shares its name with an island in Indonesia?",
        choice1: "Python",
        choice2: "C",
        choice3: "Jakarta",
        choice4: "Java",
        answer: 4,
    },
    {
        question: "On Twitter, what is the character limit for a Tweet?",
        choice1: "120",
        choice2: "160",
        choice3: "140",
        choice4: "130",
        answer: 3,
    },
    {
        question: "Linux was first created as an alternative to Windows XP.",
        choice1: "False",
        choice2: "True",
        choice3: "I don't know",
        choice4: "Maybe",
        answer: 1,
    },
    {
        question: "On Twitter, what is the character limit for a Tweet?",
        choice1: "120",
        choice2: "140",
        choice3: "160",
        choice4: "100",
        answer: 2,
    },
    {
        question: "What is the code name for the mobile operating system Android 7.0?",
        choice1: "Ice Cream Sandwich",
        choice2: "Marshmallow",
        choice3: "Jelly Bean",
        choice4: "Nougat",
        answer: 4,
    },
    {
        question: "In web design, what does CSS stand for?",
        choice1: "Counter Strike: Source",
        choice2: "Cascading Style Sheet",
        choice3: "Computer Style Sheet",
        choice4: "Corrective Style Sheet",
        answer: 2,
    },
    {
        question: "What is the most preferred image format used for logos in the Wikimedia database?",
        choice1: ".png",
        choice2: ".jpeg",
        choice3: ".svg",
        choice4: ".gif",
        answer: 3,
    },
];
// const questions = [
//   {
//     category: "Science: Computers",
//     type: "multiple",
//     difficulty: "easy",
//     question: "What does CPU stand for?",
//     correct_answer: "Central Processing Unit",
//     incorrect_answers: [
//       "Central Process Unit",
//       "Computer Personal Unit",
//       "Central Processor Unit",
//     ],
//   },
//   {
//     category: "Science: Computers",
//     type: "multiple",
//     difficulty: "easy",
//     question:
//       "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
//     correct_answer: "Final",
//     incorrect_answers: ["Static", "Private", "Public"],
//   },
//   {
//     category: "Science: Computers",
//     type: "boolean",
//     difficulty: "easy",
//     question: "The logo for Snapchat is a Bell.",
//     correct_answer: "False",
//     incorrect_answers: ["True"],
//   },
//   {
//     category: "Science: Computers",
//     type: "boolean",
//     difficulty: "easy",
//     question:
//       "Pointers were not used in the original C programming language; they were added later on in C++.",
//     correct_answer: "False",
//     incorrect_answers: ["True"],
//   },
//   {
//     category: "Science: Computers",
//     type: "multiple",
//     difficulty: "easy",
//     question:
//       "What is the most preferred image format used for logos in the Wikimedia database?",
//     correct_answer: ".svg",
//     incorrect_answers: [".png", ".jpeg", ".gif"],
//   },
//   {
//     category: "Science: Computers",
//     type: "multiple",
//     difficulty: "easy",
//     question: "In web design, what does CSS stand for?",
//     correct_answer: "Cascading Style Sheet",
//     incorrect_answers: [
//       "Counter Strike: Source",
//       "Corrective Style Sheet",
//       "Computer Style Sheet",
//     ],
//   },
//   {
//     category: "Science: Computers",
//     type: "multiple",
//     difficulty: "easy",
//     question:
//       "What is the code name for the mobile operating system Android 7.0?",
//     correct_answer: "Nougat",
//     incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
//   },
//   {
//     category: "Science: Computers",
//     type: "multiple",
//     difficulty: "easy",
//     question: "On Twitter, what is the character limit for a Tweet?",
//     correct_answer: "140",
//     incorrect_answers: ["120", "160", "100"],
//   },
//   {
//     category: "Science: Computers",
//     type: "boolean",
//     difficulty: "easy",
//     question: "Linux was first created as an alternative to Windows XP.",
//     correct_answer: "False",
//     incorrect_answers: ["True"],
//   },
//   {
//     category: "Science: Computers",
//     type: "multiple",
//     difficulty: "easy",
//     question:
//       "Which programming language shares its name with an island in Indonesia?",
//     correct_answer: "Java",
//     incorrect_answers: ["Python", "C", "Jakarta"],
//   },
// ];

//const SCORE_POINTS = 100;
const MAX_QUESTIONS = 10;
window.onload = function() {
    startQuiz = () => {
        questionCounter = 0;
        score = 0;
        availableQuestions = [...questions];
        getNewQuestion();
    };

    getNewQuestion = () => {
        if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
            localStorage.setItem("mostRecentScore", score);

            return window.location.assign("/end.html");
        }

        questionCounter++;
        progressText.innerText = `Question ${questionCounter} / ${MAX_QUESTIONS}`;
        /* progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;*/

        const questionsIndex = Math.floor(
            Math.random() * availableQuestions.length
        );
        currentQuestion = availableQuestions[questionsIndex];
        question.innerText = currentQuestion.question;

        choices.forEach((choice) => {
            const number = choice.dataset["number"];
            choice.innerText = currentQuestion["choice" + number];
        });

        availableQuestions.splice(questionsIndex, 1);

        acceptingAnswers = true;
    };

    choices.forEach((choice) => {
        choice.addEventListener("click", (e) => {
            if (!acceptingAnswers) return;

            acceptingAnswers = false;
            const selectedChoice = e.target;
            const selectedAnswer = selectedChoice.dataset["number"];

            let classToApply =
                selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

            /* if (classToApply === "correct") {
                                                                                                                                                                                                                            incrementScore(SCORE_POINTS);
                                                                                                                                                                                                                        }*/

            selectedChoice.parentElement.classList.add(classToApply);

            setTimeout(() => {
                selectedChoice.parentElement.classList.remove(classToApply);
                getNewQuestion();
            }, 1000);
        });
    });

    incrementScore = (num) => {
        score += num;
        //scoreText.innerText = score;
    };

    startQuiz();
};
/*window.onload = function() {
    // TIPS:
    // SE MOSTRI TUTTE LE RISPOSTE ASSIEME IN FORMATO LISTA:
    // Per ogni domanda, crea un container e incorporale tutte all'interno.
    // Crea poi dei radio button
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio
    // con le risposte corrette e incorrette come opzioni
    // (dovrai probabilmente cercare su un motore di ricerca come ottenere un valore da un radio button in JS per ottenere il punteggio finale)
    //
    // SE MOSTRI UNA DOMANDA ALLA VOLTA:
    // Mostra la prima domanda con il testo e i radio button.
    // Quando l'utente seleziona una risposta, passa alla domanda successiva dell'array e sostituisci quella precedentemente visualizzata con quella corrente,
    // salvando le risposte dell'utente in una variabile
};

// Come calcolare il risultato? Hai due strade:
// Se stai mostrando tutte le domande nello stesso momento, controlla semplicemente se i radio button selezionati sono === correct_answer
// Se stai mostrando una domanda alla volta, aggiungi semplicemente un punto alla variabile del punteggio che hai precedentemente creato SE la risposta selezionata è === correct_answer

// BUON LAVORO 💪🚀*/

/*<div class="hud-item">
    <p class="hud-prefix">Score</p>
    <h1 class="hud-main-text" id="score">0</h1>
</div> */ // ---> final score da aggiungere alla 3 pagina