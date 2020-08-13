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
var answerDiv = document.getElementById("answers");
var optionSelection = document.getElementById("optionSelection");
var rightOption

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

function quizTimer() {
    time--;
    document.getElementById("timerElement").innerHTML = time;
    if (time === 0 || quizQs.length === questionsPage) {
        clearInterval(timer);
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
        answerDiv.innerHTML = "<p>"+currentQuestion.choices[i]+"</p>";
    }
}

// //check answer function
// function checkAnswer(userAnswer){
//     if(userAnswer == currentQuestion.rightOption){
//         console.log("correct!");
//         currentQIndex++;
//     }else{
//         console.log("incorrect!");
//         currentQIndex++;
//     }

// }




//function to keep score during the quiz
// var score = 0; 

function hideResults() {
    resultsPage.style.display = "none";
}

hideResults();



// //show questions
// function questionDisplay() {
  

//check user input for the right option
// function checkOption(event) {
//     var option = event.currentTarget.dataset.checkAnswer
    
// }

// //results page



// //input initials


// //scoreboard


// //EVENT LISTENERS 
// function questionDisplay(){
//     optionA.addEventListener("click", function (event){
//         checkOption(event);
//     })
//     optionB.addEventListener("click", function (event){
//         checkOption(event);
//     })
//     optionC.addEventListener("click", function (event){
//         checkOption(event);
//     })
//     optionD.addEventListener("click", function (event){
//         checkOption(event);
//     })
// }

// function quizStart(){
//     startButton.addEventListener("click", function(){
//         quizStart()
//         console.log("start");
//     })
// }
