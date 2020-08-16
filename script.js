// Declaring some variables
var introPage = document.getElementById("introPage");
// question pages
var questionsPage = document.getElementById("questionsPage");
var answerDiv1 = document.getElementById("first");
var answerDiv2 = document.getElementById("second");
var answerDiv3 = document.getElementById("third");
var answerDiv4 = document.getElementById("fourth");
var scorePage = document.getElementById("scorePage");
var saveBtn = document.getElementById("saveBtn");
var currentQIndex = 0;
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
var correctAnswers = ["c. Behavior", "a. A true or false statement", "d. Brenden Eich", "d. All of the above"];
//functions begin

//hides questions while on intro page.
function hideQuestions() {
    questionsPage.style.display = "none";
}

function hideScorePage() {
    scorePage.style.display = "none";
}

hideQuestions();
hideScorePage();

//make intro page hidden to display questions
document.getElementById("startButton").addEventListener("click", function (){
    introPage.style.display = "none";
    window.setInterval(quizTimer, 1000);
    showQuestions();
}
);
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

    if (currentQIndex === 4) {
        endQuiz();
        }else{

    questionsPage.style.display = "block";
    scorePage.style.display = "none";
    var questionHead = document.getElementById("questionHead");
    questionHead.innerHTML = quizQs[currentQIndex].question;
    answerDiv1.innerHTML = quizQs[currentQIndex].choices[0];
    answerDiv2.innerHTML = quizQs[currentQIndex].choices[1];
    answerDiv3.innerHTML = quizQs[currentQIndex].choices[2];
    answerDiv4.innerHTML = quizQs[currentQIndex].choices[3];

        }
}


    //the feedback for the user choice(incorrect or correct)
    var choiceMessage = document.createElement("p");
    document.getElementById("questionsPage").appendChild(choiceMessage);

    //correct choice message
    function rightChoice() {
        choiceMessage.innerHTML = "Correct!";
        score += 25;
        currentQIndex++;
        showQuestions();
    }

    //incorrect choice message + consequences
    function wrongChoice() {
        choiceMessage.innerHTML = "Incorrect!";
        score -= 25;
        currentQIndex++;
        if (time < 0) {
                time = 0;
                clearInterval(interval);
            } else {
                time -= 10;
            }
            showQuestions();
    }

    

            //Event listeners for answer choices
            answerDiv1.addEventListener("click", function () {
                if (correctAnswers[0]){
                    rightChoice();
                }else {
                   wrongChoice();
                }
            });
            answerDiv2.addEventListener("click", function () {
                if (correctAnswers[1]){
                    rightChoice();
                }else {
                  wrongChoice();
                }
            });
            answerDiv3.addEventListener("click", function () {
                if (correctAnswers[2]){
                    rightChoice();
                }else {
                   wrongChoice();
                }
            });
            answerDiv4.addEventListener("click", function () {
                if (correctAnswers[3]){
                    rightChoice();
                }else {
                    wrongChoice();
                }
            });
            saveBtn.addEventListener("click", function() {

                var scoreIndex = "";
                for (var i = 0; i < userScore.length; i++){
                    if(userScore[i][0].includes(userInitials.value.trim())){
                        scoreIndex = i; 
                    }
                }
                if (scoreIndex !== ""){
                    userScore[scoreIndex][1] = totalScore;
                }else{
                    userScore.push([userInitials.value.trim(), score])
                }
                storeScores();
            });


var userScore = [];
var scoreList = document.getElementById("scoreList");
var userInitials = document.getElementById("userInitials");

function endQuiz() {
    hideQuestions();
    document.getElementById("timerElement").style.display = "none";
    clearInterval(interval);
    scorePage.style.display = "block";
    totalScore.innerHTML = "Your score is: " + score;

}

function storeScores(){
    window.localStorage.setItem("userScore", JSON.stringify(userScore)); 
    scores();
};

function scores() {
    for (var i = 0; i < userScore.length; i++){
        var scoreItem = document.createElement("li");
        scoreItem.textContent = userScore[i][0] + " - " + userScore[i][1];
        scoreList.appendChild(tag);
    }
}

var retakeBtn = document.getElementById("retakeBtn");
    
    retakeBtn.addEventListener("click", function(){
        location.reload();
    });
