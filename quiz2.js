var timeLimit =time;
 document.getElementById('timelimit').innerHTML ="you'll have  "+timeLimit+" second to answer each question.";
const section = document.getElementById('qna');

const fragment = document.createDocumentFragment();

myApp.forEach(question => {
  const paragraph = document.createElement('li');
  
  paragraph.innerHTML = `${question.question} - <span style='color: green;'>${question.options[question.answer]}</span>`;
  
  fragment.appendChild(paragraph);
});

section.appendChild(fragment);

function load(){
    number++;
   questionText.innerHTML=myApp[questionIndex].question;
    creatOptions();
    scoreBoard();
    currentQuestionNum.innerHTML=number + " / " +myApp.length;
}
function creatOptions(){
    optionBox.innerHTML="";
    let animationDelay=0.2;
    for(let i=0; i<myApp[questionIndex].options.length; i++){
        const option=document.createElement("div");
              option.innerHTML=myApp[questionIndex].options[i];
              option.classList.add("option");
              option.id=i;
              option.style.animationDelay=animationDelay + "s";
              animationDelay=animationDelay+0.2;
              option.setAttribute("onclick","check(this)");
              optionBox.appendChild(option);
        
    }
}

function generateRandomQuestion(){
    const randomNumber=Math.floor(Math.random() * myApp.length);
   let hitDuplicate=0;
   if(myArray.length == 0){
        questionIndex=randomNumber;
    }
    else{
        for(let i=0; i<myArray.length; i++){
            if(randomNumber == myArray[i]){
                //if duplicate found
                hitDuplicate=1;
                
            }
        }
        if(hitDuplicate == 1){
            generateRandomQuestion();
            return;
        }
        else{
            questionIndex=randomNumber;
        }
    }
    
    myArray.push(randomNumber);
    console.log(myArray)
    load();
}

function check(ele){
    const id=ele.id;
    if(id==myApp[questionIndex].answer){
       ele.classList.add("correct");
        score++;
        scoreBoard();
    }
    else{
        ele.classList.add("wrong");
        //show correct option when clicked answer is wrong
        for(let i=0; i<optionBox.children.length; i++){
            if(optionBox.children[i].id==myApp[questionIndex].answer){
                optionBox.children[i].classList.add("show-correct");
            }
        }
    }
    attempt++;
    disableOptions()
    showAnswerDescription();
    showNextQuestionBtn();
    stopTimer();
    
    if(number == myApp.length){
        quizOver();
    }
}
function timeIsUp(){
    showTimeUpText();
    //when time is up Show Correct Answer
    for(let i=0; i<optionBox.children.length; i++){
            if(optionBox.children[i].id==myApp[questionIndex].answer){
                optionBox.children[i].classList.add("show-correct");
				
            }
        }
    disableOptions()
    showAnswerDescription();
    showNextQuestionBtn();
	if(number == myApp.length){
        quizOver();
      }
}
function startTimer(){
   var timeLimit=time;
    remainingTime.innerHTML=timeLimit;
    remainingTime.classList.remove("less-time");
    interval=setInterval(()=>{
      timeLimit--;
        if(timeLimit < 10){
            timeLimit="0"+timeLimit;
            
            }
            if(timeLimit < 6){
                remainingTime.classList.add("less-time");
            }
            remainingTime.innerHTML=timeLimit;
            if(timeLimit == 0){
            clearInterval(interval);
            timeIsUp();
    }
    },1000)
}
function stopTimer(){
    clearInterval(interval);
}
function disableOptions(){
    for(let i=0; i<optionBox.children.length; i++){
        optionBox.children[i].classList.add("already-answered")
    }
}
function showAnswerDescription(){
    if(typeof myApp[questionIndex].description !== 'undefined'){
        answerDescription.classList.add("show");
        answerDescription.innerHTML=myApp[questionIndex].description;
    }
    
}
function hideAnswerDescription(){
    answerDescription.classList.remove("show");
    answerDescription.innerHTML="";
}

function showNextQuestionBtn(){
    nextQuestionBtn.classList.add("show");
}
function hideNextQuestionBtn(){
    nextQuestionBtn.classList.remove("show");
}
function showTimeUpText(){
    timeUpText.classList.add("show");
}
function hideTimeUpText(){
    timeUpText.classList.remove("show");
    
}
function scoreBoard(){
    correctAnswers.innerHTML=score;
}

nextQuestionBtn.addEventListener("click",nextQuestion);

function nextQuestion(){
   generateRandomQuestion();
    hideNextQuestionBtn();
    hideAnswerDescription();
    hideTimeUpText();
    startTimer();
}
function quizResult(){
    document.querySelector(".total-questions").innerHTML=myApp.length;
    document.querySelector(".total-attempt").innerHTML=attempt;
    document.querySelector(".total-correct").innerHTML=score;
    document.querySelector(".total-wrong").innerHTML=attempt-score;
    const percentage=(score/myApp.length)*100;
    document.querySelector(".percentage").innerHTML=percentage.toFixed(2) +"%";

}
function resetQuiz(){
  attempt=0;
  //questionIndex=0;
  score=0;
  number=0;
  myArray=[];
}

function quizOver(){
    nextQuestionBtn.classList.remove("show");
    seeResultBtn.classList.add("show");
}
seeResultBtn.addEventListener("click", ()=>{
    quizBox.classList.remove("show");
    seeResultBtn.classList.remove("show");
    quizOverBox.classList.add("show");
    quizResult();
     })

startAgainQuizBtn.addEventListener("click", ()=>{
    quizBox.classList.add("show");
    quizOverBox.classList.remove("show");
    resetQuiz();
    nextQuestion();
    })

goHomeBtn.addEventListener("click", ()=>{
    quizOverBox.classList.remove("show");
    quizHomeBox.classList.add("show")
    resetQuiz();
})
  
startQuizBtn.addEventListener("click", ()=>{
    quizHomeBox.classList.remove("show");
    quizBox.classList.add("show");
    nextQuestion();
})


</script>
</body>
</html>'));