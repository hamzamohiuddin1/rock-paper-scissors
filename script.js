function getComputerChoice(){
    let choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection===computerSelection){
        return "You tie!";
    }
    if (playerSelection === "Rock") {
        switch(computerSelection){
            case "Paper": 
                return "You lose! Paper beats rock!";
            case "Scissors":
                return "You win! Rock beats Paper!";
            default:
                return "Error";
        }
    }
    
    else if (playerSelection === "Paper"){
        switch(computerSelection){
            case "Rock": 
                return "You win! Paper beats rock!";
            case "Scissors":
                return "Lose! Scissors beats Paper!";
            default:
                return "Error";
        }
    }

    else if (playerSelection === "Scissors"){
        switch(computerSelection){
            case "Rock": 
                return "You lose! Rock beats Scissors!";
            case "Paper":
                return "You win! Scissors beats Paper!";
            default:
                return "Error";
        }
    }
    return "Error"
}

const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));