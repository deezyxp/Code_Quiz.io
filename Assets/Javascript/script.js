// Global DOM elements
var questionEl = document.querySelector('#question');
var scoreTextEl = document.querySelector('#score');
var containerEl = document.querySelector('#question-container');
var answersEl = Array.from(document.querySelector('#question'));
var timeEl = document.querySelector('#time');

// Constants
let index = 0;
let c = 30;
var score = 0

// Question Array
 let questions = [
     {
         question: 'Commonly used data types do not include:',
        answers: [
            {
                title: 'strings',
                isAnswer: false
            },
            {
                title: 'booleans',
                isAnswer: true
            },
            {
                title: 'numbers',
                isAnswer: false
            },
            {
                title: 'alerts',
                isAnswer: false
            },
        ]
    
     },
     {
        question: 'The condition in an if/else statement is enclosed within _______',
       answers: [
           {
               title: 'quotes',
               isAnswer: false
           },
           {
               title: 'curly brackets',
               isAnswer: false
           },
           {
               title: 'parentheses',
               isAnswer: true
           },
           {
               title: 'square brackets',
               isAnswer: false
           },
       ]
   
    },
    {
        question: 'Arrays in JavaScript can be used to store ____',
       answers: [
           {
               title: 'numbers and strings',
               isAnswer: false
           },
           {
               title: 'other arrays',
               isAnswer: false
           },
           {
               title: 'booleans',
               isAnswer: false
           },
           {
               title: 'all of the above',
               isAnswer: true
           },
       ]
   
    },
    {
        question: 'String values must be enclosed within ____ when bewing assigned to variables',
       answers: [
           {
               title: 'commas',
               isAnswer: false
           },
           {
               title: 'curly brackets',
               isAnswer: true
           },
           {
               title: 'quotes',
               isAnswer: false
           },
           {
               title: 'parentheses',
               isAnswer: false
           },
       ]
   
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
       answers: [
           {
               title: 'Javascript',
               isAnswer: false
           },
           {
               title: 'terminal/bash',
               isAnswer: false
           },
           {
               title: 'for loops',
               isAnswer: false
           },
           {
               title: 'console.log',
               isAnswer: true
           },
       ]
   
    },
 ];

// Create function to renderQuestion
 function renderQuestion (questionIndex) {

    containerEl.innerHTML = '';

    const question = questions[questionIndex];

    const questionTitle  = question.question;
    const answers = question.answers;

    // set the content of our qs element to 'questionTitle'
    questionEl.textContent = questionTitle;

    // do a for loop on 'answers' and generate the question buttons
    for (let index = 0; index < answers.length; index++) {
        const answer = answers[index];

        const answerTitle = answer.title;
    


        const buttonContainer = document.createElement('div');
        buttonContainer.setAttribute('class', 'answer-container');

        const prefix = document.createElement('p');
        prefix.setAttribute('class', 'answer-prefix');
        prefix.textContent = index + 1

        const answerContent = document.createElement('p');
        answerContent.setAttribute('class', 'answer-text');
        answerContent.setAttribute('data-question-index', index);
        answerContent.textContent = answerTitle;

        buttonContainer.appendChild(prefix);
        buttonContainer.appendChild(answerContent);

        buttonContainer.addEventListener('click', onAnswerClicked)
        containerEl.appendChild(buttonContainer);
        
    }

}

// add an event listener to the buttons to check if the answer is correct or not
function onAnswerClicked(event) {
    var target = event.target;
    var answerIndex = target.getAttribute("data-question-index")

    if(questions[index].answers[answerIndex].isAnswer === true){
        console.log(score)
    }
    else {
        console.log(false)
        // subtract the value from the timer
        c -=5
    }

    index++;

    if (index > 4) {
        localStorage.setItem('mostRecentScore', c)
        return window.location.assign('end.html')
    }
    renderQuestion(index);
}


// Timer Function

function countDown() {
    c = c - 1;
    if (c < 30) {
        timeEl.innerHTML = c;
    }
    
    if (c < 1) {
        window.clearInterval(update);
        return window.location.assign('end.html')
    }
}

update = setInterval("countDown()", 1000)

 renderQuestion(index);