const startButton = document.getElementById('start-butn');
const nextButton = document.getElementById('next-butn');
const quizBoxEl = document.getElementById('quiz-box');
var timerEl = document.getElementById('timer');
const questionEl = document.getElementById('questions')
const answersEl = document.getElementById('answer-butns')
var scoreCount = document.getElementById('score')
var initialsSave = document.getElementById('initials')
// const buttons = document.getElementsByClassName('butn')

let shuffleQuestions, nextQuestionindex;

var timer;
var timerCount;
var score = 0
var questionCount = 0
// var initial = prompt

const questions = [
    {
        question:'What data type has true and false values?',
        answers: [
            {text: 'Boolean', correct: true},
            {text:'String', correct: false},
            {text: 'number', correct: false},
            {text: 'function', correct: false}
        ]
    },
    {
        question:'Inside which HTML element do we put JavaScript?',
        answers: [
            {text: '<scripting>', correct: false},
            {text: '<javascript', correct: false},
            {text: '<script>', correct: true},
            {text: '<js>', correct: false},
        ]
    },
    {
        question:'What is the correct place to insert a Javascript?',
        answers: [
            {text:'<head>', correct: false},
            {text:'Both  <head> and <body> section.', correct: true},
            {text:'<Body> section', correct: false},
            {text:'<footer>', correct: false},
        ]
    }
]

startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', () => {
    nextQuestionindex ++
    nextQuestion();
})

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
        if (winGame) {
            winGame();
        }

    }, 1000);
}

function clearTimer() {
    clearInterval(timerCount);
}

function nextQuestion() {
    resetQuestion();
    showQuestions(shuffleQuestions[nextQuestionindex])
}

function resetQuestion() {
    nextButton.classList.add('hide')
    while (answersEl.firstChild) {
        answersEl.removeChild(answersEl.firstChild)
    }
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
        // questionCount = questionCount + 1;
    })
}

function chooseAnswer(e) {
    const chosenButton = e.target
    const correct = chosenButton.dataset.correct
    Array.from(answersEl.children).forEach(button => {
        setClass(button, button.dataset.correct)
    })
    if(shuffleQuestions.length > nextQuestionindex + 1) {
    nextButton.classList.remove('hide');
    } else {
        startButton.innerText = 'restart'
        startButton.classList.remove('hide')
    }
    questionCount = questionCount + 1;
    if (correct) {
        score = score + 10;
    }
}

function setClass(element, correct) {
    clearStatus(element);
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatus(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

function loseGame() {
    startButton.classList.remove('hide');
    quizBoxEl.classList.add('hide');
    if (loseGame) {
        initials()
        return;
        // var initialPrompt = prompt ("please enter your initials");
        // if (initialPrompt) {
            // getScore();
        
    }
}

function winGame() {
    if (questionCount === 3) {
        clearTimer()
        initials()
        return;
        // var initialPrompt = prompt("please enter your initials!");
        // if (initialPrompt) {
        //     getScore();
        //     return;
        // }
    }
    return;
}

function getScore() {
    scoreCount = text.score;
    initialsSave 
}

function initials() {
    var input = prompt("initials please");
    localStorage.setItem("input", input);
    location.replace("./Winlose.html");
}