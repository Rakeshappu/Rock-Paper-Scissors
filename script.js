let userScore = 0;
let compScore =0;

const choices = document.querySelectorAll(".choice");
const winnerdiv = document.querySelector(".msg-container");
const showmsg = document.querySelector(".showWinner");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const hand = document.querySelector(".PHrotate");
const hand2 = document.querySelector(".CHrotate");
const USscore = document.querySelector(".Pscore");
const COscore = document.querySelector(".Cscore");
const shake = document.querySelector(".shake");
const shake2 = document.querySelector(".shake2");
const Cshow = document.querySelector(".Cshow");
const reset = document.querySelector(".resetgame");

const randomChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIndx = Math.floor(Math.random()*3);
    return options[randIndx];  
}
reset.addEventListener("click",()=>{
    userScore = 0;
    compScore = 0;
    console.log("asd");
    USscore.innerText = userScore;
    COscore.innerText = compScore;
    showmsg.innerText = "";
    Cshow.innerText = "";
    hand.innerHTML = "✊🏻";
    hand2.innerHTML = "✊🏻";
    winnerdiv.style.backgroundColor ="rgb(202, 238, 238)";
})



const drawGame = () => {
    showmsg.innerText ="DRAW";
    winnerdiv.style.backgroundColor ="white";
    
}

const showWinner = (userWin) => {
    if(userWin){
        userScore++;
        USscore.innerText = userScore;
        showmsg.innerText ="You WON!!";
        winnerdiv.style.backgroundColor ="#cbf9cb";
        // hand.classList.add("gloww");
        // hand2.classList.add("glow");

        
    }else{
        compScore++;
        COscore.innerText = compScore;
        showmsg.innerText ="You LOSE";
        winnerdiv.style.backgroundColor ="#f57e7e";
        // hand.classList.add("glow");
        // hand2.classList.add("glow");
    }
    
}

const playGame = (userChoice) => {

    shake.classList.add("paused");
    shake2.classList.add("paused");

    setTimeout(() => {
        const compChoice = randomChoice();
        Cshow.innerText = compChoice;
        shake.classList.remove('paused');
        shake2.classList.remove('paused');
        if(compChoice === "rock"){
            hand2.innerHTML = "✊🏻";
            console.log(compChoice);
        }
        if(compChoice === "paper"){
            hand2.innerHTML = "✋🏻";
            console.log(compChoice);
        }
        if(compChoice === "scissors"){
            hand2.innerHTML = "✌🏻";
            console.log(compChoice);
        }
   
        if(userChoice === compChoice){
            drawGame();
        }
        else{
            let userWin = true;
            if(userChoice === "rock"){
                if(compChoice === "paper"){
                    userWin = false;
                }
                else{
                    userWin = true;
                }
                if(compChoice === "scissors"){
                    userWin = true;
                }
                else{
                    userWin = false;
                }
            }
            else if(userChoice === "paper"){
                if(compChoice === "rock"){
                    userWin = false;
                }
                else{
                    userWin = true;
                }
                if(compChoice === "scissors"){
                    userWin = false;
                }
                else{
                    userWin = true;
                }
            }
            else {
                if(compChoice === "rock"){
                    userWin = false;
                }
                else{
                    userWin = true;
                }
                if(compChoice === "paper"){
                    userWin = true;
                }
                else{
                    userWin = false;
                }
            }
      
        showWinner(userWin);
    }
    }, 300);
}

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        rock.addEventListener("click", ()=>{
            hand.innerHTML ="✊🏻";
            // shake.style.animation="none";
        })
        paper.addEventListener("click", ()=>{
            hand.innerHTML ="✋🏻";
            // shake.style.animation="none";
        })
        scissors.addEventListener("click", ()=>{
            hand.innerHTML ="✌🏻";
            // shake.style.animation="none";
        })
        playGame(userChoice);
    })
    
});



