const rock = document.querySelector("#rockBtn");
const paper = document.querySelector("#paperBtn");
const scissors = document.querySelector("#scissorsBtn");
const result = document.querySelector("#result");

rock.addEventListener("click", () => playRound(getComputerChoice(), "rock"))
paper.addEventListener("click", () => playRound(getComputerChoice(), "paper"))
scissors.addEventListener("click", () => playRound(getComputerChoice(), "scissors"))

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let randomChoice = Math.round(Math.random() * 2);
    return choices[randomChoice];
}

let computerScore = 0
let humanScore = 0;

function playRound(computerChoice, humanChoice) {
    
    if (computerChoice == "rock" && humanChoice == "paper") {
        result.textContent = "You win!";
        console.log("You win!");
        humanScore++;
    }
    else if (computerChoice == "paper" && humanChoice == "scissors") {
        result.textContent = "You win!";
        console.log("You win!");
        humanScore++;
    }
    else if (computerChoice == "scissors" && humanChoice == "rock") {
        result.textContent = "You win!";
        console.log("You win!");
        humanScore++;
    }
    else if (computerChoice == "paper" && humanChoice == "rock") {
        result.textContent = "You loose!";
        console.log("You loose.");
        computerScore++;
    }
    else if (computerChoice == "scissors" && humanChoice == "paper") {
        result.textContent = "You loose!";
        console.log("You loose.");
        computerScore++;
    }
    else if (computerChoice == "rock" && humanChoice == "scissors") {
        result.textContent = "You loose!";
        console.log("You loose.");
        computerScore++;
    }
    else {
        console.log("Withdraw.");
    }

    result.innerHTML += `<br>Computer score: ${computerScore} | Player score: ${humanScore}`
}
