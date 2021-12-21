const startButton = document.getElementById('start-butn');
const nextButton = document.getElementById('next-butn');
const quizBoxEl = document.getElementById('quiz-box');
var timerEl = document.getElementById('timer');
const questionEl = document.getElementById('questions')
const answersEl = document.getElementById('answer-butns')
const buttons = document.getElementsByClassName('butn')

let shuffleQuestions, nextQuestionindex;

var timer;
var timerCount;

const questions = [
    {
        question:'What data type has true and false values?',
        answers: [
            {text: 'Boolean', correct: true},
            {text:'String', correct: false},
            {text: 'number', correct: false},
            {text: 'function', correct: false}
        ]


    }
]

startButton.addEventListener('click', startQuiz);

function startQuiz() {
    // console.log('started')
    timerCount = 30;
    startButton.classList.add('hide');
    quizBoxEl.classList.remove('hide');
    shuffleQuestions = questions.sort(() =>Math.random()-.5);
    nextQuestionindex = 0;
    startTimer();
    nextQuestion();
}

function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timerEl.textContent = timerCount;
        if (timerCount === 0) {
            clearInterval(timer);
            loseGame();
        }
    }, 1000);
}

function nextQuestion() {
    resetQuestion();
    showQuestions(shuffleQuestions[nextQuestionindex])
}

function resetQuestion() {
    nextButton.classList.add('hide');
}

function showQuestions(questions) {
    questionEl.innerText = questions.question
    questions.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText= answer.text;
        button.classList.add('butn');
        if (answer.correct) {
            button.dataset.correct= answer.correct;
        }
        button.addEventListener('click', chooseAnswer);
        answersEl.appendChild(button);
    })
}

function chooseAnswer(e) {

}

function loseGame() {
    startButton.classList.remove('hide');
    quizBoxEl.classList.add('hide');
}