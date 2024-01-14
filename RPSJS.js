let userScore = 0;
let compScore = 0;

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
    if(userChoice === compresult){
        msg.innerText = "Game was Draw, Play Again";
        msg.style.backgroundColor = "orange";
    }else if((userChoice === "rock" && compresult === "paper") || 
            (userChoice === "paper" && compresult === "scissor") || 
            (userChoice === "scissor" && compresult === "rock"))
    {
        msg.innerText = `Ohh! You Lost, computer's ${compresult} beats your's ${userChoice}`;
        msg.style.backgroundColor = "red";
        comMarks.innerText = ++compScore;

    }else {
        msg.innerText = `Hurray! You Win, your ${userChoice} beats computer's ${compresult}`;
        msg.style.backgroundColor = "green";
        userMarks.innerText = ++userScore;
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    });
});
