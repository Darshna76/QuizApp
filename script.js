    const quizData = [
        {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "javascript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "In which HTML element, we put the JavaScript code" ,
        a: "<javascript>...</javascript>",
        b: "<js>...</js>",
        c: "<script>...</script>",
        d: "<css>...</css>" ,
        correct : "c",

    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    }
   
];
const playNow =document.querySelector("#play-now");
const question = document.querySelector("#question");
const answers = document.querySelectorAll(".answer")
const a_text = document.querySelector("#a_text");
const b_text = document.querySelector("#b_text")
const c_text = document.querySelector("#c_text")
const d_text = document.querySelector("#d_text")
const submit = document.querySelector("#submit");

 playNow.addEventListener("click" , ()=>{
  document.querySelector(".lets-play").style.display = "none";
  document.querySelector(".quiz-container").style.display="block";
 })
let quizDataCount = 0;
let score = 0;
const deselectAns = ()=>{
    let answer;
    answers.forEach(ansElement => {
        if(ansElement.checked){
            answer = ansElement.id;
        }
        return answer;
    });

}
const quizLoad = () => {
    deselectAns();
    const currentQuizData=quizData[quizDataCount];
    question.innerText=currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}
 
quizLoad();

submit.addEventListener("click" , ()=> {
    const answer = deselectAns();
    if(answer==quizData[quizDataCount].correct){
        score++;

    }
    quizDataCount++;
    if(quizDataCount<quizData.length){
        quizLoad();
    }else {
        quiz.innerHTML = `
        <h2>You scored ${score}/${quizData.length}...</h2>
        <button onclick="location.reload()">Play Again!</button>
        `
    }
})