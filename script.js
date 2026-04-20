const questions = [

{
question: "What does HTML stand for?",
options: [
"Hyper Text Markup Language",
"High Transfer Machine Language",
"Hyper Tool Markup Language",
"Home Tool Markup Language"
],
answer: 0
},

{
question: "Which language is used to style web pages?",
options: [
"HTML",
"CSS",
"Python",
"Java"
],
answer: 1
},

{
question: "Which language is used for web page interactivity?",
options: [
"Java",
"Python",
"JavaScript",
"C++"
],
answer: 2
},

{
question: "Which HTML tag is used to insert an image?",
options: [
"<img>",
"<image>",
"<src>",
"<picture>"
],
answer: 0
},

{
question: "Which CSS property controls text size?",
options: [
"font-style",
"text-size",
"font-size",
"text-style"
],
answer: 2
}

];

let currentQuestion = 0;
let score = 0;
let time = 10;
let timer;

const questionEl = document.getElementById("question");
const optionEls = document.querySelectorAll(".option");
const nextBtn = document.getElementById("next");
const timerEl = document.getElementById("timer");

function loadQuestion(){

clearInterval(timer);

time = 10;
timerEl.innerText = "Time: " + time;

timer = setInterval(() => {

time--;
timerEl.innerText = "Time: " + time;

if(time === 0){
nextQuestion();
}

},1000);

let q = questions[currentQuestion];

questionEl.innerText = q.question;

optionEls.forEach((btn,index)=>{
btn.innerText = q.options[index];

btn.onclick = () => {

if(index === q.answer){
score++;
}

nextQuestion();

}

})

}

function nextQuestion(){

clearInterval(timer);

currentQuestion++;

if(currentQuestion < questions.length){
loadQuestion();
}
else{
showResult();
}

}

function showResult(){

document.getElementById("quiz").classList.add("hide");
document.getElementById("result").classList.remove("hide");

document.getElementById("score").innerText =
"You scored " + score + " out of 5";

}

nextBtn.onclick = nextQuestion;

loadQuestion();