
const questionsArr=[
    {
        question:"What is the color of blood when it's inside your body ?",
    option_a:"Blue",
    option_b:"White",
    option_c:"Red",
    answerForA:false, 
    answerForB:false,
    answerForC:true

    },
    {
        question:"What is the fastest bird in the world ?",
    option_a:" Bald Eagle",
    option_b:" Peregrine Falcon",
    option_c:" Hummingbird",
        answerForA:false,
        answerForB:true,
        answerForC:false
        
    },
    {
        question:"What is the tallest waterfall in the world?",
    option_a:"Angel Falls, Venezuela",
    option_b:"Niagara Falls, New York",
    option_c:"Sutherland Falls, New Zealand",
    answerForA:true,
    answerForB:false,
    answerForC:false
        
    }, {
        question:"What letter is not present anywhere on the periodic table of elements?",
    option_a:"X",
    option_b:"F",
    option_c:"J",
        answerForA:false,
        answerForB:false,
        answerForC:true
        
    }, {
        question:"Which of these animals has the ability to laugh ?",
    option_a:"Dog",
    option_b:"Bear",
    option_c:"Whale",
        answerForA:true,
        answerForB:false,
        answerForC:false
        
    }, {
        question:"Which of these foods will never spoil?",
    option_a:"Honey",
    option_b:"Beed Jerky",
    option_c:"Beans",
        answerForA:true,
        answerForB:false,
        answerForC:false
        
    }
];
const eArr=questionsArr.splice(1)[Symbol.iterator]();
const qSection = document.querySelector(".questions-section");
const question =document.getElementById("question");
const op_section=document.getElementById("op_section");
const check_inputs=document.querySelectorAll(".option input");
const option=document.querySelectorAll(".option");
const op_a=document.getElementById("option_a");
const op_b=document.getElementById("option_b");
const op_c=document.getElementById("option_c");
const op_devA=document.querySelector(".option-a");
const op_devB=document.querySelector(".option-b");
const op_devC=document.querySelector(".option-c");
const next_btn=document.getElementById("next-btn");
const sub_btn=document.getElementById("sub-btn");
const res_btn=document.getElementById("res-btn");
const answer=document.querySelectorAll(".answer-erea");
const cancel_btn=document.querySelector(".cancel-btn");


question.innerHTML=questionsArr[0].question;
op_a.innerHTML=questionsArr[0].option_a;
op_a.dataset.answer=questionsArr[0].answerForA;
 op_b.innerHTML=questionsArr[0].option_b;
 op_b.dataset.answer=questionsArr[0].answerForC;
 op_c.innerHTML=questionsArr[0].option_c;
 op_c.dataset.answer=questionsArr[0].answerForB;



/// function handle the start btn event
function displayCard(){
  qSection.style.display="grid";
  
}
/// function to handle the next btn event
function handleNext(){
    let element=eArr.next();
   
 answer.forEach(answer=>{
     answer.innerHTML="";
 });
       
//  question.innerHTML=element.value.question;
// op_a.innerHTML= element.value.option_a;
// op_a.dataset.answer=element.value.answerForA;
// op_b.innerHTML =element.value.option_b;
// op_b.dataset.answer=element.value.answerForB;
// op_c.innerHTML=element.value.option_c;
// op_c.dataset.answer=element.value.answerForC;

try {
    question.innerHTML=element.value.question;
op_a.innerHTML= element.value.option_a;
op_a.dataset.answer=element.value.answerForA;
op_b.innerHTML =element.value.option_b;
op_b.dataset.answer=element.value.answerForB;
op_c.innerHTML=element.value.option_c;
op_c.dataset.answer=element.value.answerForC;
answer.innerHTML="";
}catch (err){
    console.log(err);
}finally {
    if(element.done == true){
next_btn.style.display="none";
sub_btn.style.display="none";
cancel_btn.style.display="none";
res_btn.style.display="block";
    }
    answer.innerHTML="";
}
    
  

option.forEach(ele=>{
    ele.style.backgroundColor="#f6f6f6";
    ele.firstChild.nextSibling.style.color="black";
});

 }
// && check_input.dataset.answer === true
const resArr=[];
function handleSubmit(){
    setTimeout(()=>{
        answer.forEach(answer=>{
            answer.innerHTML="";
        });
    },3000);
  check_inputs.forEach(input=>{
      // check if the anwser is true or false 
      
    
    if(input.checked == true && input.nextSibling.dataset.answer == "true"){
    
    
input.parentElement.style.background="#4BCA81";
input.nextElementSibling.nextElementSibling.innerHTML="Correct !";
input.nextElementSibling.nextElementSibling.style.color="white";
resArr.push(true);
}
else if (input.checked == true &&  input.nextSibling.dataset.answer == "false"){
    input.parentElement.style.background="#ff0033";
    input.nextElementSibling.nextElementSibling.innerHTML="Wrong!";
    input.nextElementSibling.nextElementSibling.style.color="white";
resArr.push(false);
}

  });
  
}
/// display the result 
var trueCounter=0;
    var falseCounter=0;
function displayRes(){
    
    let resHead;
    resArr.forEach(bol=>{
        if(bol == true){
            trueCounter = trueCounter+1;
        }else {
            falseCounter =falseCounter+1;
        }


    });
    let color;
    if(trueCounter > falseCounter){
resHead="you passed the quiz :"
color="#4BCA81";

    }else {
        resHead="you failed";
        color="#ff0033";
    }
    qSection.innerHTML=`<h1 class="result-head" style=color:${color} >${resHead}</h1> \n <p class="para-result" style=color:${color}> you have ${trueCounter} right answers you have ${falseCounter} wrong answers</p>`
   qSection.classList.add("result");

}
function removeQuiz(){
    qSection.remove()
}