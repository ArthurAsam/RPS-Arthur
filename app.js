function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"]; 
    return choices[Math.floor(Math.random() * choices.length)]; 
}

let computerSelection = getComputerChoice(); 
let playerSelection = prompt("Choose: (rock)(paper) or (scissors)").toLowerCase()
console.log(playerSelection)
function playSingleRound(playerSelection, computerSelection){

}