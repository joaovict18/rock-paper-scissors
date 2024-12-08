function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let randomChoice = Math.round(Math.random() * 2);
    return choices[randomChoice];
}

function getHumanChoice() {
    let choice = prompt("Make your choice: ").toLowerCase();
    return choice;
}

let computerScore = 0
let humanScore = 0;

function playRound(computerChoice, humanChoice) {
    if (computerSelection == "rock" && humanSelection == "paper") {
        console.log("You win!");
        humanScore++;
    }
    else if (computerSelection == "paper" && humanSelection == "scissors") {
        console.log("You win!");
        humanScore++;
    }
    else if (computerSelection == "scissors" && humanSelection == "rock") {
        console.log("You win!");
        humanScore++;
    }
    else if (computerSelection == "paper" && humanSelection == "rock") {
        console.log("You loose.");
        computerScore++;
    }
    else if (computerSelection == "scissors" && humanSelection == "paper") {
        console.log("You loose.");
        computerScore++;
    }
    else if (computerSelection == "rock" && humanSelection == "scissors"){
        console.log("You loose.");
        computerScore++;
    }
    else {
        console.log("Withdraw.");
    }
}

let computerSelection;
let humanSelection;


for (let i=0; i<3; i++) {
    computerSelection = getComputerChoice();
    humanSelection = getHumanChoice();

    playRound(computerSelection, humanSelection);
}

console.log(`Final score:\nComputer: ${computerScore}\nHuman: ${humanScore}`);