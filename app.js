let choices = ["rock", "paper", "scissors"];
let randomChoice = Math.floor(Math.random() * choices.length);

function getComputerChoice() {
    return choices[randomChoice];
}



function getHumanChoice() {
    
}

console.log(getComputerChoice());