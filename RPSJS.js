
let limit = prompt("Enter Final Score Limit for Game: ");
const choiceY = document.querySelector("#y");
const choiceN = document.querySelector("#n");
const quitPop = document.querySelector(".Quitpopup");
const endMsg = document.querySelector("#endMsg");

const Yes = () =>{
    choiceY.addEventListener("click", () =>{
        console.log("hii");
        document.body.style.visibility = "hidden";
        quitPop.style = "hidden";
        endMsg.style.visibility = "visible";
        endMsg.textContent = "Thankyou for Visiting us, Please back soon :)";
        endMsg.style.fontStyle = "italic";
        endMsg.style.fontWeight = "bold";
        endMsg.style.fontSize = "50px";
        endMsg.style.color = "#FF00FF";
        endMsg.style.marginTop = "-60px"; 
    })
}
const No = () =>{
    choiceN.addEventListener("click", () =>{
        window.location.reload();
    })
}
const QuitpopUpRules = () => {
    quitPop.style.visibility = "visible";
    // accesspopup.style.backgroundColor = "white";
}
if (limit === null){
    document.body.style.visibility = "hidden";
    QuitpopUpRules();
    Yes();
    No();
    console.log("Hello");
}else {
limit = parseInt(limit);
let userScore = 0;
let compScore = 0;
let mode = document.querySelector("#toggle");
const accesspopup = document.querySelector(".popup");
const accesspopupText = document.querySelector("#display");
const imagesBlock = document.querySelector("#images");
const choices = document.querySelectorAll(".myImage");
const msg = document.querySelector("#msg");
let userMarks = document.querySelector("#user-score");
let comMarks = document.querySelector("#com-score");
const limitScore = document.querySelector("#limitScore");
const limitValue = document.querySelector("#limitValue");
const reStart = document.querySelector("#restart");

const popUpRules = () => {
    document.body.style.visibility = "hidden";
    accesspopup.style.visibility = "visible";
    // accesspopup.style.backgroundColor = "white";
}

const RestartBtn = document.querySelector("#btn");
const RePlay = ()=>{
        RestartBtn.addEventListener("click", ()=>{
        window.location.reload();
});
};


if(!isNaN(limit)){

limitScore.textContent = limit;

const RestartFun = reStart.addEventListener("click", () =>{
    window.location.reload();
}); 


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

const addEvent = choices.forEach(
    (choice) => {
        choice.addEventListener("click", () => {
            const userChoice = choice.getAttribute("id");
            if ((limit === userScore) || (limit === compScore))
            {
                if (userScore === limit)
                {
                    popUpRules();
                    accesspopupText.innerText = "You won the match";
                    accesspopupText.style.color = "green";
                    RePlay();
                    document.body.style.backgroundColor = "ligray";
                }
                else if (compScore === limit)
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
const textContainer = document.querySelector(".text-container");
const score = document.querySelectorAll(".score");
let isThemeChange = false; 

const darkMode =  mode.addEventListener("click",()=>{
    if(!isThemeChange){
        bodyOne.style.backgroundColor ="#212121";
        headTitle.style.color = "black";
        headTitle.style.backgroundColor = "#FFFFE0";
        imagesBlock.style.backgroundColor = "#212121";
        limitValue.style.color = "white";
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
        scoreBoard.style.backgroundColor = "#212121";
        textContainer.style.backgroundColor = "#212121";
        score.forEach(
            (childScore) => {
                childScore.style.backgroundColor = "#212121";
            }
        )
        mode.style.backgroundColor = "#283593";
        mode.textContent = "Light";
        mode.style.color = "white";
        mode.style.fontWeight = "bold";
        mode.style.borderWidth = "2px";
        mode.style.borderColor = "black";
        mode.addEventListener("mouseenter", ()=>{
            mode.style.boxShadow = "0 0 20px black";
        });
        mode.addEventListener("mouseleave", ()=>{
            mode.style.boxShadow = "none";
        });

    }else{
        bodyOne.style.backgroundColor = "#FFFFE0";
        imagesBlock.style.backgroundColor = "#FFFFE0";
        headTitle.style.color = "white";
        headTitle.style.backgroundColor = "#283593";
        limitValue.style.color = "black";
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

        score.forEach(
            (childScore) => {
                childScore.style.backgroundColor = "#FFFFE0";
            }
        )
        textContainer.style.backgroundColor = "#FFFFE0";
        scoreBoard.style.color = "black";
        scoreBoard.style.backgroundColor = "#FFFFE0";
        mode.textContent = "Dark";
        mode.style.backgroundColor = "black";
        mode.style.color = "white";
        mode.style.fontWeight = "bold";
        mode.style.borderWidth = "2px";
        mode.style.borderColor = "white";
        mode.addEventListener("mouseenter", ()=>{
            mode.style.boxShadow = "0 0 20px blue";
        });
        mode.addEventListener("mouseleave", ()=>{
            mode.style.boxShadow = "none";
        });
    }
    isThemeChange = !isThemeChange;
});

} else{
    popUpRules();
    accesspopupText.style.color = "red";
    accesspopupText.style.fontSize = "50px";
    accesspopupText.textContent = "Enter Valid Number";
    RePlay();
}
}

