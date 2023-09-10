
function getComputerChoice(){
    let choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection===computerSelection){
        return 0;
    }
    if (playerSelection === "Rock") {
        switch(computerSelection){
            case "Paper": 
                return -1;
            case "Scissors":
                return 1;
            default:
                return "Error";
        }
    }
    
    else if (playerSelection === "Paper"){
        switch(computerSelection){
            case "Rock": 
                return 1;
            case "Scissors":
                return -1;
            default:
                return "Error";
        }
    }

    else if (playerSelection === "Scissors"){
        switch(computerSelection){
            case "Rock": 
                return -1;
            case "Paper":
                return 1;
            default:
                return "Error";
        }
    }
    return "Error"
}

let playerScore = 0;
let computerScore = 0;
const score = document.querySelector('.score');
score.textContent = `${playerScore} - ${computerScore}`;
const computerSelection = document.querySelector('.box');

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let computerChoice = getComputerChoice();
        let winner = playRound(button.textContent, computerChoice);
        if (winner === 1) {
            playerScore++;
        }
        else if (winner === -1){
            computerScore++;
        }
        score.textContent = `${playerScore} - ${computerScore}`;
        computerSelection.textContent = computerChoice;
    });
});
