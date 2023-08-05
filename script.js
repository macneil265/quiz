const quizData = [
    {
        question: "How old is Swithan?",
        a: "10",
        b: "1",
        c: "4",
        d: "2",
        correct: "b" 
    }, {
        question: "Who is the best footballer in the world?",
        a: "Messi",
        b: "Neymah",
        c: "Forlan",
        d: "Suarez",
        correct: "b"
    }, {
        question: "What is the best programming language in 2023?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d"
    }, {
        question: "What is the best video game you have ever played?",
        a: "Fifa",
        b: "Call of Duty",
        c: "God of War",
        d: "Cradle to the grave",
        correct: "a"
    }, {
        question: "What is the best sport you have participated in?",
        a: "Football",
        b: "Basket Ball",
        c: "Tennis",
        d: "Rugby",
        correct: "a"
    }, {
        question: "What does HTML stand for",
        a: "Hyper Text Language",
        b: "Hyper Text Markup Language",
        c: "God of War",
        d: "Cradle to the grave",
        correct: "b"
    }
];

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");


let currentQuiz = 0;

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData [currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    currentQuestion++;
}