// Declaring some variables
// first page
var introPage = document.getElementById("introPage");
var startButton = document.getElementById("startButton");
// question pages
var questionsPage = document.getElementById("questionsPage");
var answerDiv1 = document.getElementById("first");
var answerDiv2 = document.getElementById("second");
var answerDiv3 = document.getElementById("third");
var answerDiv4 = document.getElementById("fourth");
// results variables
var resultsPage = document.getElementById("resultsPage");
var resultsHead = document.getElementById("resultsHead");

var currentQIndex = 0;
// array for questions
var quizQs = [
    {
        question : ["What does JavaScript control?"],
        choices : ["a. Structure", "b. Style", "c. Behavior", "d. Aesthetic"],
    },{
        question : ["What is a Boolean?"],
        choices : ["a. A true or false statement", "b. A conditional statement", "c. Something", "d. Something"],
    },{
        question : ["Who invented JavaScript?"],
        choices : ["a. Elon Musk", "b. Mitchell Baker", "c. Bill Gates", "d. Brenden Eich"],
    },{
        question : ["What type of data does an Array hold in JavaScript?"],
        choices : ["Booleans", "Strings", "Other Arrays", "All of the above"],
      }
];
// variable for the answers
var correctAnswers = ["c. Behavior", "a. A true or false statement", "d. Brenden Eich", "d. All of the above"];

//hides questions while on intro page.
function hideQuestions() {
    questionsPage.style.display = "none";
}

hideQuestions();
hideResults();

//make intro page hidden to display questions
document.getElementById("startButton").addEventListener("click", function (){
    introPage.style.display = "none";
    window.setInterval(quizTimer, 1000)
    showQuestions();
}
)
//timer for the quiz
var time = 90;
var score = 0;
var interval = setInterval(time, 1000);

function quizTimer() {
    time--;
    document.getElementById("timerElement").innerHTML = "Time left: " + time;
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
        //display the question
    questionHead.innerHTML = quizQs[currentQIndex].question;
        // display the choices
    answerDiv1.innerHTML = quizQs[currentQIndex].choices[0];
    answerDiv2.innerHTML = quizQs[currentQIndex].choices[1];
    answerDiv3.innerHTML = quizQs[currentQIndex].choices[2];
    answerDiv4.innerHTML = quizQs[currentQIndex].choices[3];

    if (currentQIndex === 4) {
        endQuiz();
        }
};


    //the feedback for the user choice(incorrect or correct)
    var choiceMessage = document.createElement("p");
    document.getElementById("questionsPage").appendChild(choiceMessage);

    //correct choice message
    function rightChoice() {
        choiceMessage.innerHTML = "Correct!";
        score += 5;
        currentQIndex++;
        showQuestions();
    };

    //incorrect choice message + consequences
    function wrongChoice() {
        choiceMessage.innerHTML = "Incorrect!";
        score -= 5;
        currentQIndex++;
        if (time < 0) {
                time = 0;
                clearInterval(interval);
            } else {
                time -= 10;
            };
            showQuestions();
    };

    

            //Event listeners for answer choices
            answerDiv1.addEventListener("click", function () {
                if (currentQIndex === 3){
                    rightChoice();
                }else {
                    wrongChoice();
                }
            });
            answerDiv2.addEventListener("click", function () {
                if (currentQIndex === 1){
                    rightChoice();
                }else {
                    wrongChoice();
                }
            });
            answerDiv3.addEventListener("click", function () {
                if (currentQIndex === 4){
                    rightChoice();
                }else {
                    wrongChoice();
                }
            });
            answerDiv4.addEventListener("click", function () {
                if (currentQIndex === 4){
                    rightChoice();
                }else {
                    wrongChoice();
                }
            });


var score = 0
var result = document.createElement("p");

//function to keep score during the quiz

function hideResults() {
    resultsPage.style.display = "none";
}





function endQuiz() {
    hideQuestions();
    document.getElementById("timerElement").style.display = "none";
    clearInterval(interval);
    resultsPage.style.display = "block";
    var totalScore = document.createElement("p");
    document.getElementById("totalScore").appendChild(totalScore);
    totalScore.innerHTML = "Your total score is " + score;

}