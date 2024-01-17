let userScore = 0;
let compScore = 0;
const limit = prompt("Enter Final Score Limit for Game: ");
let mode = document.querySelector("#toggle");

const accesspopup = document.querySelector(".popup");
const accesspopupText = document.querySelector("#display");

const choices = document.querySelectorAll(".myImage");
const msg = document.querySelector("#msg");
let userMarks = document.querySelector("#user-score");
let comMarks = document.querySelector("#com-score");
const compChoice = () => {
    const compClick = ["rock", "paper", "scissor"];
    let idx = Math.floor((Math.random())*3);
    return compClick[idx];
}

const playGame = (userChoice) => {
    const compresult = compChoice();
    if(userChoice === compresult)
    {
        msg.innerText = "Game was Draw, Play Again";
        msg.style.backgroundColor = "orange";
    }
    else if((userChoice === "rock" && compresult === "paper") || 
            (userChoice === "paper" && compresult === "scissor") || 
            (userChoice === "scissor" && compresult === "rock"))
    {
        msg.innerText = `Ohh! You Lost, computer's ${compresult} beats your's ${userChoice}`;
        msg.style.backgroundColor = "red";
        comMarks.innerText = ++compScore;
    } 
    else 
    {
        msg.innerText = `Hurray! You Win, your ${userChoice} beats computer's ${compresult}`;
        msg.style.backgroundColor = "green";
        userMarks.innerText = ++userScore;
    }
}
const RestartBtn = document.querySelector("#btn");
const RePlay = ()=>{
        RestartBtn.addEventListener("click", ()=>{
        window.location.reload();
});
};

const popUpRules = () => {
    document.body.style.visibility = "hidden";
    accesspopup.style.visibility = "visible";
    // accesspopup.style.backgroundColor = "white";
}

const addEvent = choices.forEach(
    (choice) => {
        choice.addEventListener("click", () => {
            const userChoice = choice.getAttribute("id");
            if ((limit == userScore) || (limit == compScore))
            {
                if (userScore == limit)
                {
                    popUpRules();
                    accesspopupText.innerText = "You won the match";
                    accesspopupText.style.color = "green";
                    RePlay();
                    document.body.style.backgroundColor = "ligray";
                }
                else if (compScore == limit)
                {
                    popUpRules();
                    accesspopupText.innerText = "You lost the match";
                    accesspopupText.style.color = "red";
                    RePlay();
                    document.body.style.backgroundColor = "gray";
                }
            }
            else 
            {
                playGame(userChoice);
            }
        });
    }
)
const headTitle = document.querySelector("#title");
const bodyOne = document.querySelector("html");
const scoreBoard = document.querySelector(".score-board");
const modeBtn = document.querySelector("#tbutton");
let isThemeChange = false; 
const darkMode =  mode.addEventListener("click",()=>{
    if(!isThemeChange){
        bodyOne.style.backgroundColor ="#212121";
        headTitle.style.color = "white";
        choices.forEach(
            (choice) => {
                choice.style.opacity = 1;
                choice.addEventListener("mouseleave", ()=>{
                    choice.style.opacity = 1;
                });
                choice.addEventListener("mouseenter", ()=>{
                    choice.style.opacity = 1;
                });
            }
        );
        scoreBoard.style.color = "white";
        mode.style.backgroundColor = "yellow";
        mode.style.color = "black";
        mode.style.fontWeight = "bold";
        mode.style.borderWidth = "4px";
        mode.style.borderColor = "white";
        mode.addEventListener("mouseenter", ()=>{
            mode.style.boxShadow = "0 0 20px white";
        });
        mode.addEventListener("mouseleave", ()=>{
            mode.style.boxShadow = "none";
        });

    }else{
        bodyOne.style.backgroundColor = "white";
        headTitle.style.color = "rgb(51, 51, 255)";
        choices.forEach(
            (choice) => {
                choice.style.opacity = 0.5;
                choice.addEventListener("mouseleave", ()=>{
                    choice.style.opacity = 0.5;
                });
                choice.addEventListener("mouseenter", ()=>{
                    choice.style.opacity = 1;
                });
            }  
        )
        scoreBoard.style.color = "black";
        mode.style.backgroundColor = "blue";
        mode.style.color = "white";
        mode.style.fontWeight = "bold";
        mode.style.borderWidth = "4px";
        mode.style.borderColor = "black";
        mode.addEventListener("mouseenter", ()=>{
            mode.style.boxShadow = "0 0 20px blue";
        });
        mode.addEventListener("mouseleave", ()=>{
            mode.style.boxShadow = "none";
        });
    }
    isThemeChange = !isThemeChange;
});

