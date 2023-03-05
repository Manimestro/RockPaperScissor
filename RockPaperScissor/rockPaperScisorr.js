// --->Dom Manupulations 
let rock=document.getElementById("rock");
let paper=document.getElementById("paper");
let scissor=document.getElementById("scissor");
let result=document.getElementById("result");
let boxes=document.querySelectorAll(".rock");
let draw=document.getElementById("draw");
let score=document.getElementById("score");
let stop=document.getElementById("stop");
const items=["rock","paper","scissor"]
const emojis=["✊","👋","✌️"]
let count=0;
stop.onclick=()=>{
    result.innerText=``
    draw.innerText=``
    score.innerText=``
    count=0
}
boxes.forEach((item)=>{
    item.onclick=()=>{
        let bot=Math.floor(Math.random()*3)
        console.log(bot)
        if (item.id === items[bot]){
            result.innerText=` 🤖  👉   ${emojis[bot]} `
            draw.innerText=` IT'S A DRAW`
            score.innerText=count
            return 
        }
        if ((item.id === "rock" && bot==1) || (item.id === "paper" && bot==2) || (item.id === "scissor" && bot==0)){
            result.innerText=`🤖  👉   ${emojis[bot]} `
            draw.innerText=` BOT WINS`
            draw.style.color="red";
            count-=1
            score.innerText=count
            return 
        }
        if ((item.id === "rock" && bot==2) || (item.id === "paper" && bot==0) || (item.id === "scissor" && bot==1)){
            result.innerText=`🤖  👉   ${emojis[bot]} `
            draw.innerText=` YOU WINS`
            draw.style.color="lightblue";
            count+=1
            score.innerText=count
            return 
        }
    }
})
