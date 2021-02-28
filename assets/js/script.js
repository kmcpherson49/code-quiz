//GIVEN I am taking a code quiz WHEN I click the start button
var buttonEL 
//build start page in html with start button is an option

//THEN a timer starts and I am presented with a question

//WHEN I answer a question THEN I am presented with another question

//WHEN I answer a question incorrectly THEN time is subtracted from the clock

//WHEN all questions are answered or the timer reaches 0 THEN the game is over

//WHEN the game is over THEN I can save my initials and score

//quiz game that starts with a button click, and runs a timer
//has 5 questions, multiple choice, eahc answer moved to the next question
//incorrect answers detract time
//shows highscores
//uses localstorage to save high scores
//boilerplate code for html, link to bootstrap and local css/js files
//container where questions are displayed
//eventListener, jQuery, setTime methods
//array of questions move through dynamically; display: none, display:block;
//onclick.getelementbyid
//dynamic rendering
//variable for questions and answers and correctness

//card container w/ start menu when clicked use .empty to remove, then use jquery to create the next question
var countdown = 75;
var timer = document.getElementById('time');
var main = document.getElementById('main');
var quizbtn = document.getElementById('start');
var questions = [
  {
    question: "Commonly used data types DO Not Include:",
    answers:["strings", "booleans", "alerts", "numbers"],
    correctAnswer: "booleans"
  },
  {
    question: "The condition in an if/else statement is enclosed with _______",
    answers: ["quotes","curly brackets","parenthesis","square brackets"],
    correctAnswer: "quotes"
  },
  {
    question: "Arrays in Javascript can be used to store ______",
    answers: ["numbers and strings","other arrays","booleans","all of the above"],
    correctAnswer: "all of the above"
  },
  {
      question: "String values must be enclosed within ______ when being assigned to variables.",
      answers: [ "commas","curly brackets", "quotes","parenthesis"],
      correctAnswer: "quotes"
    },
    {
      question: "A very useful tool used during development and debugging for printing content to the debugger is:",
      answers: ["JavaScript","terminal/bash","for loops","console.log"],
      correctAnswer: "console.log"
    },
];

answers=[ [0].correctAnswer, [1].correctAnswer, [2].correctAnswer, [3].correctAnswer, [4].correctAnswer];
for (var i = 0; i < answers; i++) {
  if (questions === answers[i])
  var correct = true;
}
if (correct) {
  alert("Correct");
}
// else {
//   alert("Incorrect")
//   countdown-10;
// }
console.log(answers);


function time() {
  
  var timeInterval = setInterval(function() {
    if (countdown > 1) {
      timer.textContent = countdown + ' seconds remaining';
      countdown--;
    }
    else if (countdown === 1) {
      timer.textContent = countdown + ' seconds remaining';
      countdown--;
    }
    else {
      timer.textContent = "";
      clearInterval(timeInterval);
      timer.textContent = 'Times up!';
    }
  }, 1000);
};

// function beginQuiz () {
//   prompt(questions);
// }
// console.log('line 98' + answers);

$(quizbtn).on("click", time() );
start.addEventListener("click", questions);