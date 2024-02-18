function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"]; 
    return choices[Math.floor(Math.random() * choices.length)]; 
}

let computerSelection = getComputerChoice(); 
let playerSelection = prompt("Choose: (rock)(paper) or (scissors)").toLowerCase()

function playSingleRound(player, computer){
    let result = ''; 
    if (player === computer){
        result =  "That's a Tie!"
    } else {
        switch(player){
            case "rock":
                console.log(computer); 
                result = (computer === 'paper')? 'Computer Wins!' : 'You Won!'
                break; 
            case "paper":
                console.log(computer); 
                result = (computer === 'rock')? 'You Win!' : 'You Lose!'
                break; 
            case "scissors":
                console.log(computer); 
                result = (computer === 'paper')? 'You Win!' : 'Computer Wins!'
                break; 
        }
    }
    return result; 
}

console.log(playSingleRound(playerSelection, computerSelection))