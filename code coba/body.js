//  keyword()
//printer
// function printer(){
//     // var originalContents = document.body.innerHTML;
//     var printContents = document.getElementById('printsection').innerHTML;
//      document.body.innerHTML = printContents;
//      window.print();
//     //  window.close();
//      window.location.reload();
//     //  document.body.innerHTML = originalContents;
// }
const questionText=document.querySelector(".question-text");
const optionBox=document.querySelector(".option-box");
const currentQuestionNum=document.querySelector(".current-question-num");
const answerDescription=document.querySelector(".answer-description");
const nextQuestionBtn=document.querySelector(".next-question-btn");
const correctAnswers=document.querySelector(".correct-answer");
const seeResultBtn=document.querySelector(".see-result-btn");
const remainingTime=document.querySelector(".remaining-time");
const timeUpText=document.querySelector(".time-up-text");
const quizHomeBox=document.querySelector(".quiz-home-box");
const quizBox=document.querySelector(".quiz-box");
const quizOverBox=document.querySelector(".quiz-over-box");
const startAgainQuizBtn=document.querySelector(".start-again-quiz-btn");
const goHomeBtn=document.querySelector(".go-home-btn");
const startQuizBtn=document.querySelector(".start-quiz-btn");
let attempt=0;
let questionIndex=0;
let score=0;
let number=0;
let myArray=[];
let interval;