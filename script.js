const quizBox = document.getElementById(".quiz-container");
const submitButton = document.getElementId(".submit");
const resultsBox = document.getElementById(".results-container");


//function to keep score during the quiz
var score = 0; //this holds data for the score numbers
var scoreKeeper = function (num) {

}
//function to build the quiz
function createQuiz()

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