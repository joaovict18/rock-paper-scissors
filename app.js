const choices = ["rock", "paper", "scissors"];
let randomChoice = Math.round(Math.random() * 2);

function getComputerChoice() {
    return choices[randomChoice];
}

let choice;

function getHumanChoice() {
    choice = prompt("Make your choice: ").toLowerCase();
    return choice;
}

let computerSelection = getComputerChoice();
let humanSelection = getHumanChoice();

let computerScore = 0
let humanScore = 0;

function playRound(computerChoice, humanChoice) {
    if (computerChoice == "rock" && humanChoice == "paper") {
        console.log("You win!");
        humanScore++;
    }
    else if (computerChoice == "paper" && humanChoice == "scissors") {
        console.log("You win!");
        humanScore++;
    }
    else if (computerChoice == "scissors" && humanChoice == "rock") {
        console.log("You win!");
        humanScore++;
    }
    else if (computerChoice == "paper" && humanChoice == "rock") {
        console.log("You loose.");
        computerScore++;
    }
    else if (computerChoice == "scissors" && humanChoice == "paper") {
        console.log("You loose.");
        computerScore++;
    }
    else if (computerChoice == "rock" && humanChoice == "scissors"){
        console.log("You loose.");
        computerScore++;
    }
    else {
        console.log("Withdraw.");
    }
}

// problem bellow
for (let i=0; i<3; i++) {
    playRound(computerSelection, humanSelection);
}

console.log(`Final score:\nComputer: ${computerScore}\nHuman: ${humanScore}`);
