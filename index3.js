const userChoiceDisplay = document.querySelector(".user-choice");
const computerChoiceDisplay = document.querySelector(".computer-choice");
const resultDisplay = document.querySelector(".msg");
const choicesLeft = document.querySelector(".trials-left");
const userInstant = document.querySelector(".user-score");
const computerInstant = document.querySelector(".computer-score");
const FinalResult = document.querySelector(".final-result");
const resetbtn = document.querySelector(".reset-button");


const choices = ['rock' , 'paper' , 'scissors'];
let userChoice;
let computerChoice;
let trials = 10;
let userScore = 0;
let computerScore = 0;

const trialsLeft = () =>{
    if(trials === 1){
        Reset();
       if(userScore> computerScore){
           FinalResult.innerHTML = "Final Result:  You Won!!!";
       }
      else if(userScore< computerScore){
         FinalResult.innerHTML = "Final Result:  You Lost!!!";
       }
       else{
         FinalResult.innerHTML = "Final Result:  It's a tie!!!"; 
       }
    }
    trials--;
    choicesLeft.innerHTML =trials;
    
 }

 const Reset = () =>{
    FinalResult.style.display = "block"; 
    resetbtn.style.display = "block";
    for (let i = 0; i < choices.length; i++) {
        const button = document.querySelectorAll(".btn")[i];
        button.style.display = "none";
       }
       resetbtn.addEventListener('click',handleReset);
 }

 const handleReset = () =>{
    for (let i = 0; i < choices.length; i++) {
        const button = document.querySelectorAll(".btn")[i];
        button.style.display = "block";
       }
     trials = 10;
     userScore = 0;
     computerScore = 0;
    userInstant.innerHTML = userScore;
    computerInstant.innerHTML =computerScore;
     FinalResult.style.display = "none"; 
     resetbtn.style.display = "none";
     choicesLeft.innerHTML =trials;
}

const handleClick = (event) =>{

    userChoice = event.target.id;
    console.log(userChoice);
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResults();
    trialsLeft();
}

const generateComputerChoice = () =>{
    const randomChoice = choices[Math.floor(Math.random()* choices.length)] ;
    computerChoice = randomChoice;
    computerChoiceDisplay.innerHTML = randomChoice;
}

for (let i = 0; i < choices.length; i++) {
 const button = document.querySelectorAll(".btn")[i];
 button.id = choices[i]; 
 resetbtn.style.display = "none";
 button.addEventListener('click',handleClick);
}


const getResults = () =>{
    switch(userChoice + computerChoice){
        case 'scissorspaper':
        case 'rockcscissors':
        case 'paperrock':
        resultDisplay.innerHTML ="You win this round!";
        userScore++;
        break;
        case 'paperscissors':
        case 'scissorsrock':
        case 'rockpaper':
        resultDisplay.innerHTML = "You lost this round!";
        computerScore++;
        break;
        case 'paperpaper':
        case 'scissorsscissors':
        case 'rockrock':
        resultDisplay.innerHTML = "It\'s a tie!!";
        break;
    }
    userInstant.innerHTML = userScore;
    computerInstant.innerHTML =computerScore;
}
