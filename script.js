const startButton = document.getElementById('start-butn')
const quizBoxEl = document.getElementById('quiz-box')

startButton.addEventListener('click', startQuiz)

function startQuiz() {
    // console.log('started')
    startButton.classList.add('hide')
    quizBoxEl.classList.remove('hide')

}

function nextQuestion() {

}

function chooseAnswer() {

}