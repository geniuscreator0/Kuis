<div class="quizsection">
    <div class="quiz-home-box custom-box show">
    <h4 id="timelimit">you'll have  second to answer each question.</h4>
    <button type="button" class="start-quiz-btn btn">Start The Quiz</button>
    </div>
    <div class="quiz-box custom-box">
    <div class="stats">
    <div class="quiz-time">
    <div class="remaining-time"></div>
        <span class="time-up-text">Time's Up</span>
    </div>
    <div class="score-board">
    <span class="score-text">score:</span>
    <span class="correct-answer"></span>
    </div>
    </div>
    <div class="question-box">
    <div class="current-question-num">
    </div>
    <div class="question-text">
        
    </div>
    </div>
    <div class="option-box">

    </div>
    <div class="answer-description">
        
    </div>
    <div class="next-question">
    <button type="button" class="next-question-btn btn">Next question</button>
    <button type="button" class="see-result-btn btn">See Your Result</button>
    </div>
    <a style="padding:0px !important; margin:opx !important; text-decoration: none !important; color:white !important; opacity: 0 !important; cursor:default !important;font-size: 1px !important;" href="https://www.mypsclife.in/">Kerala PSC</a>

    </div>
 
    <div class="quiz-over-box custom-box">
    <h1>Quiz Result</h1>
    <a style="padding:0px !important; margin:opx !important; text-decoration: none !important; color:white !important;opacity: 0 !important; cursor:default !important; font-size: 1px !important;" href="https://tech.mypsclife.in/2020/07/html-javascript-quiz-generator-score-timer-free.html">HTML Quiz Generator</a>

    <h4>Total Questions: <span class="total-questions"></span></h4>
    <h4>Attempt: <span class="total-attempt"></span></h4>
    <h4>Correct: <span class="total-correct"></span></h4>
    <h4>Wrong: <span class="total-wrong"></span></h4>
    <h4>Percentage: <span class="percentage"></span></h4>
    
    <hr>

    <button type="button" class="start-again-quiz-btn btn">Start Again</button>
    <button type="button" class="go-home-btn btn">Go To Home</button>
    <!-- answer sheet -->
    <div id="printsection">
    <h1>Quiz Answers</h1>
    <div id="qna"></div>
    </div>
    <!-- <div class="footsec">
        <button class="share" onclick="window.open('whatsapp://send?text=This is WhatsApp sharing example using button')"> <i class="fa fa-whatsapp"></i>Share </button>
        <button class="print" onclick="printer();"><i class="fa fa-download"></i> Download</button>
    </div> -->
    </div>
    </div>
   
   
    

 
    
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