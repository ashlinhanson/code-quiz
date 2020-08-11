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
        question : "What does JavaScript control?",
        options : {
            "first" : "a. Structure",
            "second" : "b. Style",
            "third" : "c. Behavior",
            "fourth" : "d. Aesthetic",
            "rightOption" : "c. Behavior"
        },
   },
   {
        question : "What is a Boolean?",
        options : {
            "first" : "a. A true or false statement",
            "second" : "b. A conditional statement",
            "third" : "c. Something",
            "fourth" : "d. Something",
            "rightOption" : "a. A true or false statement"
        },
    },
   {
       question : "Who invented JavaScript?",
       options : {
            "first" : "a. Elon Musk",
            "second" : "b. Mitchell Baker",
            "third" : "c. Bill Gates",
            "fourth" : "d. Brenden Eich",
            "rightOption" : "d. Brenden Eich"
      },
   },
   {
    question : "Something about something?",
    options : {
            "first" : "a. something",
            "second" : "b. something",
            "third" : "c. something",
            "fourth" : "d. something",
            "rightOption" : ""
   },
   },
];


//function to keep score during the quiz
var score = 0; //this holds data for the score numbers 