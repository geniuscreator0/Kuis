<title> Quiz Application </title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
 
 <style>
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800&display=swap');
@import url('https://fonts.googleapis.com/css?family=Concert+One&display=swap');

 body{
 margin:0px;
 background-image: url();
 background-attachment: fixed;
 font-family: 'Montserrat', sans-serif;
 display: block;
 }
 #qna{
 text-align: left;

 box-sizing: border-box;
 }
 .custom-box{
 max-width: 800px;
 background-image: url();
 margin:30px auto;
 padding: 50px 40px;
 border-radius: 10px;
 }
 .quiz-home-box{
 text-align:center;
 display: none;
 }
 .quiz-home-box.show{
 display: block;
 animation: fadeInRight 1s ease;
 }
 .quiz-home-box h4{
 font-size: 30px;
 font-weight: 500;
 color:#000;
 margin: 0 0 30px;
 }
 .btn{
 background-color: #0077ff;
 border: 2px solid #000000;
 padding: 14px 40px;
 color: #ffffff;
 font-size: 20px;
 border-radius: 10px;
 font-family: 'Montserrat', sans-serif;
 cursor: pointer;
 white-space: nowrap;
 margin: 0 10px;
 }
 .btn:focus{
 outline:none;
 }
 .quiz-box{
 background-image: url();
 background-color: #ebd8b7;
 display: none;
 }
 .quiz-box.show{
 display: block;
 animation: fadeInRight 1s ease;
 }
 .quiz-box .stats{
 display: flex;
 flex-wrap: wrap;
 justify-content: space-between;
 font-size: 30px;
 text-transform: none;
 color: #1d1b19;
 }
 .quiz-box .stats .quiz-time{
 flex-basis: calc(50% - 20px);
 max-width: calc(50% - 20px);
 /*background: red;*/
 text-align: left;
 }
 .quiz-box .stats .time-up-text{
 /* display: inline-block;*/
 color:#d23723;
 font-weight: 500;
 display: none;
 }
 .quiz-box .stats .time-up-text.show{
 display:inline-block;
 animation: fadeInOut 1s linear infinite;
 }
 @keyframes fadeInOut{
 0%{
 opacity: 0;
 }
 50%{
 opacity: 1;
 }
 100%{
 opacity: 0;
 }
 }
 .quiz-box .stats .quiz-time .remaining-time{
 height: 60px;
 width: 60px;
 color:#059e4c;
 border: 2px solid #059e4c;
 background-color: #fff;
 font-weight: 800;
 line-height: 56px;
 text-align: center;
 border-radius: 50%;
 display:inline-block;
 }
 .quiz-box .stats .quiz-time .remaining-time.less-time{
 color:#d23723;
 border-color:#d23723;
 }
 .quiz-box .stats .score-board{
 flex-basis: calc(50% - 20px);
 max-width: calc(50% - 20px);
 /*background: blue;*/
 text-align: right;
 
 }
 .quiz-box .stats .score-board .correct-answer{
 font-weight: 800;
 }
 .quiz-box .question-box{
 background-color: #ffffff;
 padding: 40px 30px;
 margin-top: 40px;
 border-radius: 10px;
 font-size: 28px;
 border: 2px solid #000000;
 text-align: center;
 position: relative;
 }
 .quiz-box .question-box .current-question-num{
 height: 50px;
 width: 80px;
 background-color: #fff;
 border:2px solid #000;
 font-size: 20px;
 font-weight: 800;
 color:#000;
 border-radius: 9%;
 line-height: 50px;
 text-align: center;
 position: absolute;
 top:-95px;
 left:50%;
 margin-left: -35px;
 z-index:1;
 }
 .quiz-box .question-box .question-text{
 font-size: 22px;
 font-family: 'Concert One', cursiv;
 color:#000000;
 }
 .quiz-box .option-box{
 display: flex;
 flex-wrap: wrap;
 justify-content: space-between;
 
 }
 .quiz-box .option-box .option{
 background-color: #ffffff;
 flex-basis: calc(50% - 20px);
 max-width: calc(50% - 20px);
 margin-top: 30px;
 padding: 7px 7px;
 text-align: center;
 font-size: 20px;
 text-transform: none;
 font-weight: 500;
 color:#000000;
 border:2px solid #000000;
 border-radius: 9px;
 cursor: pointer;
 position: relative;
 animation: zoomIn .3s linear forwards;
 opacity: 0;
 }
 @keyframes zoomIn{
 0%{
 transform: scale(0.8);
 }
 100%{
 transform: scale(1);
 opacity:1;
 }
 }
 .quiz-box .option-box .option.already-answered{
 pointer-events: none;
 }
 .quiz-box .option-box .option.show-correct{
 background-color: #11c466;
 border-color:#059e4c;
 color: #ffffff;
 transition: all .3s ease;
 }
 .quiz-box .option-box .option.correct{
 background-color: #11c466;
 border-color:#059e4c;
 color:#ffffff;
 opacity:1;
 animation: pulse 1s linear;
 }
 @keyframes pulse{
 0%{
 transform: scale(1);
 }
 50%{
 transform: scale(1.1);
 }
 100%{
 transform: scale(1);
 }
 }
 .quiz-box .option-box .option.correct::before{
 content: '';
 position: absolute;
 height: 30px;
 width: 30px;
 right: 15px;
 top:7px;
 background-image: url("");
 background-size: 20px;
 background-position: center;
 background-repeat: no-repeat;
 animation: fadeInRight .5s ease;
 }
 .quiz-box .option-box .option.wrong{
 background-color: #f85943;
 border-color:#d23723;
 color: #ffffff;
 opacity:1;
 animation: shake 1s linear;
 } @keyframes shake{
 0%,30%,50%{
 transform: translateX(10px);
 }
 20%,40%{
 transform: translateX(-10px);
 }
 60%{
 transform: translateX(-7px);
 }
 70%{
 transform: translateX(7px);
 }
 80%{
 transform: translateX(-4px);
 }
 90%{
 transform: translateX(4px);
 }
 100%{
 transform: translateX(0px);
 }
}
 .quiz-box .option-box .option.wrong::before{
 content: '';
 position: absolute;
 height: 30px;
 width: 30px;
 right: 15px;
 top:7px;
 background-image: url("");
 background-size: 20px;
 background-position: center;
 background-repeat: no-repeat;
 animation: fadeInRight .5s ease;
 }

 @keyframes fadeInRight{
 0%{
 opacity:0;
 transform: translateX(40px);
 }
 100%{
 opacity: 1;
 transform: translateX(0px);
 }
 }

 
 .quiz-box .answer-description{
 /*background-color: #ffffff;
 border:2px solid #c2af91;
 */
 margin-top: 20px;
 padding: 15px;
 border-radius:10px;
 color: #555555;
 display: none;
 
 }
 .quiz-box .answer-description.show{
 display: block;
 animation: fadeInRight 1s ease;
 }
 .quiz-box .next-question{
 margin-top: 20px;
 text-align: center;
 }
 .see-result-btn,.next-question-btn{
 display: none;
 }
 .see-result-btn.show,
 .next-question-btn.show{
 display: inline-block;
 animation: fadeInRight 1s ease;
 }
 .quiz-over-box{
 text-align: center;
 display: none;
 }
 .quiz-over-box.show{
 display: block;
 animation: fadeInRight 1s ease;
 }
 .quiz-over-box h1{
 font-size:50px;
 font-family: 'Concert One', cursive;
 color: #f70b0b;
 margin:0px 3 20px;
 }
 .quiz-over-box h4{
 font-size:25px;
 font-weight: normal;
 color: #0910f7;
 margin: 15px 0 20px;
 }
 .quiz-over-box h4 span{
 font-weight: 800;
 color:#000;
 }
 .start-again-quiz-btn,
 .go-home-btn{
 margin-top: 15px;
 
 }
 
 #qna{
    padding-top: 10px;
}
#qna li{
    padding-top: 20px;
    list-style: decimal;
}
 .footsec{
     width: 100%;
    margin-top: 20PX;
}
.footsec button{
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    width: 46%;
    padding:5px;
    font-size: 18px;
    border-radius: 10px;
}

 .share{
     background-color:green;
     float: left;
     color: white;
 }
 .print{
    float:right ;
 }
 .footsec i{
     padding-right: 20px;
     
 }

 
 /*responsive*/
 @media (max-width: 767px){
 .custom-box{
 background-color: #fff;
 }
 .quiz-home-box h4{
 font-size: 20px;
 }
 .btn{
 padding: 10px 20px;
 font-size: 15px;
 }
 .quiz-box .question-box{
 padding: 40px 0px;
 }
 .quiz-box .question-box .question-text{
 font-size: 17px;
 font-family: sans-serif;
 color: #1d1b19;
 }
 .custom-box{
 padding: 30px 10px 50px 10px;
 background-color: #fff;
 }
 .quiz-box .stat{
 font-size:20px;
 }
 .quiz-box .stats .quiz-time {
 flex-basis: calc(60% - 10px);
 max-width: calc(60% - 10px);
 font-size: 18px;
 }
 .quiz-box .stats .score-board{
 flex-basis: calc(40% - 10px);
 max-width: calc(40% - 10px);
 font-size: 16px;
 }
 .quiz-box .stats .quiz-time .remaining-time{
 height: 50px;
 width: 50px;
 line-height: 46px;
 color: #045e2e;
 border: 2px solid #045e2e;
 }
 .quiz-box .question-box .current-question-num{
 height: 28px;
 width: 80px;
 line-height: 30px;
 top: -31px;
 margin-left: -30px;
 font-size: 16px;
 }
 .quiz-box .option-box .option{
 flex-basis: 100%;
 max-width: 100%;
 font-size: 16px;
 margin-top: 15px;
 }
 .quiz-over-box h1{
 font-size: 30px;
 
 
 }
 .quiz-over-box h4{
 font-size: 20px;
 margin: 10px 0 15px;
 
 }
 
 }
 </style>
</head>
<body>
  
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
