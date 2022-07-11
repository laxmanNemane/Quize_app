const quizData = [{
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
},
{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},
{
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
}, {
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
}
];

var index = 0

let questionEl = document.querySelector(".question")

var aEl = document.querySelector("#option1");
var option2El = document.querySelector("#option2");
var option3El = document.querySelector("#option3");
var option4El = document.querySelector("#option4");

var submitEl = document.querySelector("#submit")
var answers = document.querySelectorAll(".answer")


var showscoreEl = document.querySelector("#Showscore")
let score = 0;

const loadQuiz = () => {


    var question = quizData[index];


    questionEl.innerHTML = `${index + 1}) &nbsp; ${question.question}`;

    aEl.innerHTML = question.a;
    option2El.innerHTML = question.b;
    option3El.innerText = question.c;
    option4El.innerText = question.d;


}

const getcheckAnswer = () => {
    let ans;

    answers.forEach((currentEle) => {
        if (currentEle.checked) {
            ans = currentEle.id
        }
    })

    return ans;


}

submitEl.addEventListener('click', () => {
    var checkAnswer = getcheckAnswer();
    if (checkAnswer === quizData[index].correct) {
        score++;

    };
    index++;
    reset();
    if (index < quizData.length) {
        loadQuiz();
    } else {
        showscoreEl.innerHTML = `
        <h2>Your Score is ${score}/${quizData.length} &#128525;</h2>
        <botton class="btn btn-primary mb-3" onclick="location.reload()"> play Again</button> `;
        showscoreEl.classList.remove('showScore');
    }

})

const reset = () => {
    answers.forEach((currentEle) => {
        currentEle.checked = false;
    })
}
loadQuiz();