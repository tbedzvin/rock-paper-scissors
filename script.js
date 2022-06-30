function computerPlay(){
    let compSelect = Math.floor(Math.random() * 8);
    if (compSelect < 3){
        compSelect = 'rock';
    } else if(compSelect > 5){
        compSelect = "paper";
    } else {
        compSelect = "scissors"
    }
    return compSelect;
}

let playerSelection = prompt("Make your choice: rock/paper/scissors!").toLowerCase();
let computerSelection = computerPlay();
let playerWinCount = 0;
let computerWinCount = 0;


function playRound(playerSelection, computerSelection){
     if (playerSelection == "rock" && computerSelection == "scissors"){
        playerWinCount++;
        return console.log("You win! Rock beats scissors!")
    } else if (playerSelection == "paper" && computerSelection == "rock"){
        playerWinCount++;
        return console.log("You win! Paper beats rock!")
    } else if (playerSelection == "scissors" && computerSelection == "paper"){
        playerWinCount++;
        return console.log("You win! Scissors beat paper!")
    } else if (playerSelection == "rock" && computerSelection == "paper"){
        computerWinCount++;
        return console.log("You lose! Paper beats rock!")
    } else if (playerSelection == "paper" && computerSelection == "scissors"){
        computerWinCount++;
        return console.log("You lose! Scissors beat paper!")
    } else if (playerSelection == "scissors" && computerSelection == "rock"){
        computerWinCount++;
        return console.log("You lose! Rock beats scissors!")
    } else if (playerSelection == computerSelection){ return console.log(`Tie! You've both choose ${playerSelection}.`)}
        
}


function game(){
    for (let i = 1; i < 5; i++){
        playRound(playerSelection, computerSelection);
        playerSelection = prompt("Make your choice: rock/paper/scissors!").toLowerCase();
        computerSelection = computerPlay();
    }
    if (playerWinCount > computerWinCount){
        return console.log(`You won scoring ${playerWinCount} against computers ${computerWinCount}. Congratulations!`);
    } else if (playerWinCount < computerWinCount){
        return console.log(`You lost scoring ${playerWinCount} against computers ${computerWinCount}`);
    } else {
        return console.log(`You and computer both scored ${playerWinCount} It's a tie!`);
    }
}

game();