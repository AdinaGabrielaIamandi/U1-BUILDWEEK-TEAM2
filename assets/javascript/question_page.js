const questions = [{
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "What does CPU stand for?",
        correct_answer: "Central Processing Unit",
        incorrect_answers: [
            "Central Process Unit",
            "Computer Personal Unit",
            "Central Processor Unit",
        ],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
        correct_answer: "Final",
        incorrect_answers: ["Static", "Private", "Public"],
    },
    {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question: "The logo for Snapchat is a Bell.",
        correct_answer: "False",
        incorrect_answers: ["True"],
    },
    {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question: "Pointers were not used in the original C programming language; they were added later on in C++.",
        correct_answer: "False",
        incorrect_answers: ["True"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "What is the most preferred image format used for logos in the Wikimedia database?",
        correct_answer: ".svg",
        incorrect_answers: [".png", ".jpeg", ".gif"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "In web design, what does CSS stand for?",
        correct_answer: "Cascading Style Sheet",
        incorrect_answers: [
            "Counter Strike: Source",
            "Corrective Style Sheet",
            "Computer Style Sheet",
        ],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "What is the code name for the mobile operating system Android 7.0?",
        correct_answer: "Nougat",
        incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "On Twitter, what is the character limit for a Tweet?",
        correct_answer: "140",
        incorrect_answers: ["120", "160", "100"],
    },
    {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question: "Linux was first created as an alternative to Windows XP.",
        correct_answer: "False",
        incorrect_answers: ["True"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "Which programming language shares its name with an island in Indonesia?",
        correct_answer: "Java",
        incorrect_answers: ["Python", "C", "Jakarta"],
    },
];

let currentQuestion = 0;
let questionCounter = 1;
let score = 0;

function showQuestion() {
    counter.innerText = `${questionCounter}`;
    // recupera la domanda corrente
    const question = questions[currentQuestion];

    // mostra la domanda
    document.querySelector("#question").innerHTML = question.question;

    // mostra le risposte
    let answersHTML = "";
    for (const answer of question.incorrect_answers) {
        answersHTML += `<button class="choice">${answer}</button>`;
    }
    answersHTML += `<button class="choice">${question.correct_answer}</button>`;
    document.querySelector("#answers").innerHTML = answersHTML;
}

document.querySelector("#answers").addEventListener("click", (event) => {
    // verifica se l'utente ha selezionato la risposta corretta
    if (event.target.innerHTML === questions[currentQuestion].correct_answer) {
        score += 1;
    }

    // passa alla domanda successiva
    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
        questionCounter++;
        counter.innerText = `${questionCounter}`;
    } else {
        alert(score);
        return window.location.assign(`../../Results03.html?result=${score}`);
    }
    return score;
});

// mostra la prima domanda
showQuestion();

//