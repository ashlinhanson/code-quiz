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
var optionA = document.getElementById("#optionA");
var optionB = document.getElementById("#optionB");
var optionC = document.getElementById("#optionC");
var optionD = document.getElementById("#optionD");
var optionSelection = document.getElementById("#optionSelection");

// results variables
var resultsPage = document.getElementById("#resultsPage");
var resultsHead = document.getElementById("#resultsHead");
var totalScore = document.getElementById("#totalScore");

//create an array for questions
var quizQs = [
    {
        question : "What does JavaScript control?",
        options : {
            a: "Structure",
            b: "Style",
            c: "Behavior",
            d: "Aesthetic"
        },
        rightAnswer: "c"
   },
   {
        question : "What is a Boolean?",
        options : {
            a: "a true or false statement",
            b: "a conditional statement",
            c: "",
            d: "something"
        },
        rightAnswer: "a"
    },
   {
       question : "Who invented JavaScript?",
       options : {
            a: "Elon Musk",
            b: "Mitchell Baker",
            c: "Bill Gates",
            d: "Brenden Eich"
      },
       rightAnswer: "d"
   },
   {
    question : "Something about something?",
    options : {
         a: "something",
         b: "something",
         c: "something",
         d: "something"
   },
    rightAnswer: "d"
   },
   {
    question : "Something about something?",
    options : {
         a: "something",
         b: "something",
         c: "something",
         d: "something"
   },
    rightAnswer: "d"
   },
   {
    question : "Something about something?",
    options : {
         a: "something",
         b: "something",
         c: "something",
         d: "something"
   },
    rightAnswer: "d"
   },
   {
    question : "Something about something?",
    options : {
         a: "something",
         b: "something",
         c: "something",
         d: "something"
   },
    rightAnswer: "d"
   },
];


//function to keep score during the quiz
var score = 0; //this holds data for the score numbers 