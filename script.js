var questionEl = document.querySelector('#question');
var scoreText = document.querySelector('#score');
var containerEl = document.querySelector('#question-container');
var answersEl = Array.from(document.querySelector('#question'));
let currentQuestion = 0;


// if right, go to next question and add 1 to score
// increment the currQs var

// if wrong, go to next question and do not add to score, and deduct 10 seconds from timer, show red button

// once questions finish go to end screen showing total score and a form to add in high score - ask name, redirect high score user to highscore.html







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

 function renderQuestion (questionIndex) {
    // ..
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
        // 


        const buttonContainer = document.createElement('div');
        buttonContainer.setAttribute('class', 'answer-container');

        const prefix = document.createElement('p');
        prefix.setAttribute('class', 'answer-prefix');
        prefix.textContent = index + 1

        const answerContent = document.createElement('p');
        answerContent.setAttribute('class', 'answer-text');
        answerContent.setAttribute('data-question-index', questionIndex);
        answerContent.textContent = answerTitle;

        buttonContainer.appendChild(prefix);
        buttonContainer.appendChild(answerContent);

        buttonContainer.addEventListener('click', onAnswerClicked)
        containerEl.appendChild(buttonContainer);
        
    }


}

// add an event listener to the buttons to check if the answer is correct or not
function onAnswerClicked(event) {
    const target = event.target;  // element that fire this event

    console.log(target.textContent);

    // get the qs index from data attr  
    
    const questionIndex = 0
    const question = questions[questionIndex];

    const answers = question.answers;

    const found = answers.find((answer) => {
        return answer.title === target.textContent
    });

    console.log(found.isAnswer);

    // 

    currentQuestion ++;

    // renderQuestion(currentQuestion)

    renderQuestion(currentQuestion);
}

 renderQuestion(currentQuestion);