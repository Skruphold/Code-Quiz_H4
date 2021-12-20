const startButton = document.getElementById('start-butn');
const quizBoxEl = document.getElementById('quiz-box');
var timerEl = document.getElementById('timer');

var timer;
var timerCount;

startButton.addEventListener('click', startQuiz);

function startQuiz() {
    // console.log('started')
    timerCount = 30;
    startButton.classList.add('hide');
    quizBoxEl.classList.remove('hide');
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

}

function chooseAnswer() {

}

function loseGame() {
    startButton.classList.remove('hide');
    quizBoxEl.classList.add('hide');
}