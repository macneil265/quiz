const quizData = [
    {
        question: "How old is Swithan?",
        a: "10",
        b: "1",
        c: "4",
        d: "2",
        correct: "b", 
    }, 
    {
        question: "Who is the best footballer in the world?",
        a: "Messi",
        b: "Neymah",
        c: "Forlan",
        d: "Suarez",
        correct: "b",
    },
    {
        question: "What is the best programming language in 2023?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    }, 
    {
        question: "What is the best video game you have ever played?",
        a: "Fifa",
        b: "Call of Duty",
        c: "God of War",
        d: "Cradle to the grave",
        correct: "a",
    }, 
    {
        question: "What is the best sport you have participated in?",
        a: "Football",
        b: "Basket Ball",
        c: "Tennis",
        d: "Rugby",
        correct: "a",
    }, 
    {
        question: "What does HTML stand for?",
        a: "Hyper Text Language",
        b: "Hyper Text Markup Language",
        c: "God of War",
        d: "Cradle to the grave",
        correct: "b",
    }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0; // Initialize the score

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // Check the selected answer
    const selectedAnswer = getSelected();
    if (selectedAnswer === quizData[currentQuiz].correct) {
        score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
        // Load the next question
        loadQuiz();
        deselectAnswers(); // Clear the selected answer for the new question
    } else {
        // Show results
        quiz.innerHTML = `<h2>You answered correctly ${score}/${quizData.length} questions.</h2>`;
    }
});
