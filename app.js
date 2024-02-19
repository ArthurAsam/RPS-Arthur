function playGame(result){
        let playerCounter = 0; 
        let computerCounter = 0; 
        for(let i = 1; i <= 5; i++){
            //added getComputerChoice fn as a gn call rather than a variable to ensure it changes on each iteration
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




function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"]; 
    return choices[Math.floor(Math.random() * choices.length)]; 
}



let outputDiv = document.getElementById('output'); 
let container = document.querySelector('.btn-container')
container.addEventListener('click', event => {
    let playerId = event.target; 
    let result = ''
    switch(playerId.id){
        case 'rock':
            result = playSingleRound(playerId.id, getComputerChoice()); 
               
            
            break; 
        case 'paper':
            result = playSingleRound(playerId.id, getComputerChoice()); 
            
            break; 
        case 'scissors':
            result = playSingleRound(playerId.id, getComputerChoice()); 
            
            break; 
    }
})






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



