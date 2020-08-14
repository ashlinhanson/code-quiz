// Declaring some variables
// first page
var introPage = document.getElementById("introPage");
var introHead = document.getElementById("introHead");
var introP = document.getElementById("introP");
var startButton = document.getElementById("startButton");

// question pages
var questionsPage = document.getElementById("questionsPage");
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
    },{
        question : "What is a Boolean?",
        choices : ["a. A true or false statement", "b. A conditional statement", "c. Something", "d. Something"],
    },{
        question : "Who invented JavaScript?",
        choices : ["a. Elon Musk", "b. Mitchell Baker", "c. Bill Gates", "d. Brenden Eich"],
      }
];

var correctAnswers = ["c. Behavior", "a. A true or false statement", "d. Brenden Eich"];
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
        endQuiz();
    }
}
//show the questions
function showQuestions() { 

    //make the questions appear first

    questionsPage.style.display = "block";
    resultsPage.style.display = "none";
    var questionHead = document.getElementById("questionHead");
    questionHead.innerHTML = quizQs[currentQIndex].question;
        // console.log(currentQuestion.choices[i])
    answerDiv1.innerHTML = quizQs[currentQIndex].choices[0];
    answerDiv2.innerHTML = quizQs[currentQIndex].choices[1];
    answerDiv3.innerHTML = quizQs[currentQIndex].choices[2];
    answerDiv4.innerHTML = quizQs[currentQIndex].choices[3];
    

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

function checkAnswer (event){
    var choice = event.currentTarget.innerHTML;
    // if they choose correctly, give them points
    if (quizQs[currentQIndex] === correctAnswers[currentQIndex]){
        result.innerHTML = "Correct answer!";
        score += 10;
    } else { //if they choose incorrectly, deduct points and time left on the timer
        result.innerHTML = "Wrong answer!";
        score -= 10;
        if (time < 0) {
            time = 0;
            clearInterval(quizTimer);
        } else {
            time -= 10;
        }
    }
    // if they've gone through all the questions, make the quiz stop and input high score
    if (quizQs.length - 1 === correctAnswers){
        endQuiz();
        return;
    } else { //if there's more questions, keep going
        quizQs++;
        showQuestions();
    }
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