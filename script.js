// Declaring some variables
// first page
var introPage = document.getElementById("#introPage");
var introHead = document.getElementById("#introHead");
var introP = document.getElementById("#introP");
var startButton = document.getElementById("#startButton");

// question pages
var questionsPage = document.getElementById("#questionsPage");
var questionHead = document.getElementById("#questionHead");
// answer choice buttons/variables
var optionA = document.getElementById("#first");
var optionB = document.getElementById("#second");
var optionC = document.getElementById("#third");
var optionD = document.getElementById("#fourth");
var optionSelection = document.getElementById("#optionSelection");
var rightOption

// results variables
var resultsPage = document.getElementById("#resultsPage");
var resultsHead = document.getElementById("#resultsHead");
var totalScore = document.getElementById("#totalScore");

//create an array for questions
var quizQs = [
    {
        "questionHead" : "What does JavaScript control?",
            "first" : "a. Structure",
            "second" : "b. Style",
            "third" : "c. Behavior",
            "fourth" : "d. Aesthetic",
            "rightOption" : "c. Behavior"
    },{
        "questionHead" : "What is a Boolean?",
            "first" : "a. A true or false statement",
            "second" : "b. A conditional statement",
            "third" : "c. Something",
            "fourth" : "d. Something",
            "rightOption" : "a. A true or false statement"
    },{
            "questionHead" : "Who invented JavaScript?",
            "first" : "a. Elon Musk",
            "second" : "b. Mitchell Baker",
            "third" : "c. Bill Gates",
            "fourth" : "d. Brenden Eich",
            "rightOption" : "d. Brenden Eich"
      },{
            "questionHead" : "Something about something?",
            "first" : "a. something",
            "second" : "b. something",
            "third" : "c. something",
            "fourth" : "d. something",
            "rightOption" : "something"
        }
];


//function to keep score during the quiz
var score = 0; 



// function to display the introduction page
function introductionPage() {
    introPage.style.display = "block";
    introHead.style.display = "block";
    questionsPage.style.display = "none";
    questionHead.style.display = "none";
    resultsPage.style.display = "none";
    resultsHead.style.display = "none";
}

//function to start the quiz
function quizStart() {
    questionsPage.style.display = "block";
    questionHead.style.display = "block";
}
//show questions
function questionDisplay() {
  

//check user input for the right option
function checkOption(event) {
    
}

//results page



//input initials


//scoreboard


//EVENT LISTENERS 
function questionDisplay(){
    optionA.addEventListener("click", function (event){
        checkOption(event);
    })
    optionB.addEventListener("click", function (event){
        checkOption(event);
    })
    optionC.addEventListener("click", function (event){
        checkOption(event);
    })
    optionD.addEventListener("click", function (event){
        checkOption(event);
    })
}

function quizStart(){
    startButton.addEventListener("click", function(){
        quizStart()
        console.log("start");
    })
}
