function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"]; 
    return choices[Math.floor(Math.random() * choices.length)]; 
}


let playerSelection = prompt("Choose: (rock)(paper) or (scissors)"); 
let pSelectionLowerCase = playerSelection.toLowerCase(); 

function playSingleRound(player, computer){
    let result = ''; 
    if (player === computer){
        result =  "That's a Tie!"
    } else {
        switch(player){
            case "rock":
                console.log(computer); 
                result = (computer === 'paper')? 'Computer Wins!' : 'You Win!'
                break; 
            case "paper":
                console.log(computer); 
                result = (computer === 'rock')? 'You Win!' : 'Computer Wins!'
                break; 
            case "scissors":
                console.log(computer); 
                result = (computer === 'paper')? 'You Win!' : 'Computer Wins!'
                break; 
        }
    }
    return result; 
}



function playGame(callback){
    let playerCounter = 0; 
    let computerCounter = 0; 
    for(let i = 1; i <= 5; i++){
        let result = callback(pSelectionLowerCase, getComputerChoice())
        if( result === "That's a Tie!"){
            console.log(result)
            continue;  
        }
        else if (result === "You Win!"){
            console.log(result)
            ++playerCounter; 
        } 
        else ++computerCounter; 
        console.log(result)
    }
    if(playerCounter === computerCounter){
        return `Tie Game! ${playerCounter} | ${computerCounter}`
    } else if (playerCounter > computerCounter){
        return `Player wins! ${playerCounter} | ${computerCounter}`
    } else 
    return `Computer wins! ${computerCounter} | ${playerCounter}`
}
console.log(playGame(playSingleRound))