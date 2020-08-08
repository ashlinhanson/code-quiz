const quizBox = document.querySelector(".quiz-container");
const submitButton = document.querySelector(".submit");
const resultsBox = document.querySelector(".results-container");


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
            b: "something",
            c: "something",
            d: "something"
        },
        rightAnswer: "a"
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