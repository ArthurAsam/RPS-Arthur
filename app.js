function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"]; 
    return choices[Math.floor(Math.random() * choices.length)]; 
}

let outputDiv = document.querySelector('.output'); 
let container = document.querySelector('.btn-container')
let playerCounter = 0; 
let computerCounter = 0; 
let btnClickCounter = 0; 

//check if 5 btns have been clicked representing 5 player selections if so 5 games have been played 
//therefore run the play game fn which determines the winner of the 5 games
container.addEventListener('click', event => {
    ++btnClickCounter; 
    if (btnClickCounter == 5){
        let allBtn = document.querySelectorAll('.btn')
        allBtn.forEach(btn => btn.disabled = true)
        playGame(playerCounter, computerCounter);  
    }
    
})
//event delegation to use container to identify each btn with in and get the id and run the switch case
container.addEventListener('click', event => {
    
    let playerId = event.target; 
    switch(playerId.id){
        case 'rock':
            playSingleRound(playerId.id, getComputerChoice());  
            break; 
        case 'paper':
            playSingleRound(playerId.id, getComputerChoice()); 
            break; 
        case 'scissors':
            playSingleRound(playerId.id, getComputerChoice()); 
            break; 
    }
})


//plays single rounds updating the counter each time until 5 games are reached and the playGame fn is fired 
// that will then look at the counters to determine who won
function playSingleRound(player, computer){
let paraResult = ''
let result = ''; 

    if (player === computer){
        result = "That's a Tie!"
        paraResult = document.createElement('p'); 
        paraResult.textContent = result; 
        console.log(paraResult)
        outputDiv.appendChild(paraResult); 
    } else {
        switch(player){
            case "rock":
                console.log(computer); 
                result = computer === 'paper'? 'Computer Wins!' : 'You Win!'
                paraResult = document.createElement('p'); 
                paraResult.textContent = result; 
                console.log(paraResult)
                outputDiv.appendChild(paraResult); 
                result === 'Computer Wins!'? ++computerCounter : ++playerCounter
                break; 
            case "paper":
                console.log(computer); 
                result = computer === 'rock'? 'You Win!' : 'Computer Wins!'
                paraResult = document.createElement('p'); 
                paraResult.textContent = result; 
                console.log(paraResult)
                outputDiv.appendChild(paraResult); 
                result === 'You Win!'? ++playerCounter : ++computerCounter
                break; 
            case "scissors":
                console.log(computer); 
                result = computer === 'paper'? 'You Win!' : 'Computer Wins!'
                paraResult = document.createElement('p'); 
                paraResult.textContent = result; 
                console.log(paraResult)
                outputDiv.appendChild(paraResult); 
                result === 'You Win!'? ++playerCounter : ++computerCounter
                break; 
            }
        } 
       // output to container the running score
        let paraCounter = document.createElement('p'); 
        paraCounter.textContent= `Player: ${playerCounter}    |    Computer: ${computerCounter}`; 
        outputDiv.appendChild(paraCounter); 
        outputDiv.style.cssText = "border: 2px solid black; margin: 50px; padding: 20px; font-size: 30px;"

    }


function playGame(playerCounter, computerCounter){
    let para = '' 
    let playAgain = document.createElement('button')
    let bottomOut = document.querySelector('.bottom-output'); 
    playAgain.style.cssText = "padding: 10px; margin: 20px; font-size: 20px;"
    playAgain.textContent = 'Play Again \u{21BA}'; 
    bottomOut.appendChild(playAgain);

    if(playerCounter === computerCounter){
        para = document.createElement('span'); 
        para.textContent = "Tie Game!"; 
        outputDiv.after(para)
        playAgain.onclick = () => removeAndRestart(para, playAgain) ;
    } else if (playerCounter > computerCounter){
        let para = document.createElement('span');
        para.textContent = "Player wins Game!"; 
        outputDiv.after(para)
        playAgain.onclick = () => removeAndRestart(para, playAgain) ;
    } else {
        let para = document.createElement('span')
        para.textContent = "Computer Wins Game!";
        outputDiv.after(para)
        playAgain.onclick = () => removeAndRestart(para, playAgain) ;
        console.log(para)
    }
    
    

    function removeAndRestart(para, playAgain){
        console.log(para)
        bottomOut.removeChild(playAgain); 
        document.body.removeChild(para)  
        outputDiv.innerHTML = ''; 
        restartGame(); 
    };  
}

    function restartGame(){
        playerCounter = 0; 
        computerCounter = 0; 
        btnClickCounter = 0
        outputDiv.style.cssText = "border: none;"
        let allBtn = document.querySelectorAll('.btn')
        allBtn.forEach(btn => btn.disabled = false)
        return; 
    
    }
