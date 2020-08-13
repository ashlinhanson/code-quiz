// Declaring some variables
// first page
var introPage = document.getElementById("introPage");
var introHead = document.getElementById("introHead");
var introP = document.getElementById("introP");
var startButton = document.getElementById("startButton");

// question pages
var questionsPage = document.getElementById("questionsPage");
var questionHead = document.getElementById("questionHead");
// answer choice buttons/variables
var answerDiv1 = document.getElementById("first");
var answerDiv2 = document.getElementById("second");
var answerDiv3 = document.getElementById("third");
var answerDiv4 = document.getElementById("fourth");
var optionSelection = document.getElementById("optionSelection");


// results variables
var resultsPage = document.getElementById("resultsPage");
var resultsHead = document.getElementById("resultsHead");
var totalScore = document.getElementById("totalScore");
var currentQIndex = 0;
//create an array for questions
var quizQs = [
    {
        question : "What does JavaScript control?",
            choices : ["a. Structure", "b. Style", "c. Behavior", "d. Aesthetic"],
            rightOption : "c. Behavior"
    },{
        question : "What is a Boolean?",
        choices : ["a. A true or false statement", "b. A conditional statement", "c. Something", "d. Something"],
            rightOption : "a. A true or false statement"
    },{
        question : "Who invented JavaScript?",
        choices : ["a. Elon Musk", "b. Mitchell Baker", "c. Bill Gates", "d. Brenden Eich"],
            rightOption : "d. Brenden Eich"
      }
];
var rightOption = quizQs.rightOption;

// for (i = 0; i < quizQs.length; i++){
//     console.log(quizQs[i].question)
// }
//hides questions while on intro page.
function hideQuestions() {
    questionsPage.style.display = "none";
}

hideQuestions();

//make intro page hidden to display questions
document.getElementById("startButton").addEventListener("click", function (){
    introPage.style.display = "none";
    window.setInterval(quizTimer, 1000)
    showQuestions();
}
)
//timer for the quiz
var time = 90;
var score = 0

function quizTimer() {
    time--;
    document.getElementById("timerElement").innerHTML = time;
    if (time === 0 || quizQs.length === questionsPage) {
        clearInterval(time);
        quizOver();
    }
}
//show the questions
function showQuestions() { 

    //make the questions appear first
    questionsPage.style.display = "block";
    
    let currentQuestion = quizQs[currentQIndex]; //global variable
    questionHead.innerHTML = currentQuestion.question;
    for (i = 0; i < currentQuestion.choices.length; i++){
        console.log(currentQuestion.choices[i])
        answerDiv1.innerHTML = "<p>"+currentQuestion.choices[0]+"</p>";
        answerDiv2.innerHTML = "<p>"+currentQuestion.choices[1]+"</p>";
        answerDiv3.innerHTML = "<p>"+currentQuestion.choices[2]+"</p>";
        answerDiv4.innerHTML = "<p>"+currentQuestion.choices[3]+"</p>";
    }

    answerDiv1.addEventListener("click", function (event) {
        checkAnswer(event);
      })
    answerDiv2.addEventListener("click", function (event) {
        checkAnswer(event);
      })
    answerDiv3.addEventListener("click", function (event) {
        checkAnswer(event);
      })
    answerDiv4.addEventListener("click", function (event) {
        checkAnswer(event);
      })
}

//Event listeners for answer choices


// //check answer function
var score = 0
var result = document.createElement("p");

function checkAnswer(event) {
    event.preventDefault();
  
    var answer = event.currentTarget.dataset.choices;
    var correctAnswer = null;
    
  
    if (answer === rightOption) {
    optionSelection.textContent = "Correct!"; // If correct, say correct
    } else {
    optionSelection.textContent = "Wrong!"; // If wrong, say wrong & deduct 10 points
        time -= 10
        if (time < 0) {
            time = 0;
        }
    }
    if (quizQs.length === currentQIndex+1) {
      quizEnd(); // If it has gone through all questions, show final score
      return; // If not, print the next question
    }
    currentQIndex++;
    showQuestions();
  }


//function to keep score during the quiz
// var score = 0; 

function hideResults() {
    resultsPage.style.display = "none";
}

hideResults();



function endQuiz() {
    resultsPage.style.display = "block";
    questionsPage.style.display = "none";
}