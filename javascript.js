let playerSelection = 'paper';
let computerSelection = 'rock';
let pScore = 0;
let cScore = 0;
let round;

function getComputerChoice(){
    x = Math.floor(Math.random() * 3);
    if(x == 1){
        return "rock";
    }else if(x == 2){
        return "paper";
    }else if(x == 0){
        return "scissors";
    }
}


function playRound(playerSelection,computerSelection) {
    p = playerSelection.toLowerCase();
    c = computerSelection.toLowerCase();

    if(p == c){
    round--;
    game();
    return 'itsa tie';
    }

    if(p == 'rock' && c == 'scissors'||
   p == 'scissors' && c == 'paper'||
   p == 'paper' && c == 'rock'){
    pScore++;
   return `you da winna! ${p} beats ${c}`; 
   }else{
    cScore++;
    return `you da looza! ${c} beats ${p}`;
   }
}    

function game(){
    
    playerSelection = prompt(`what is your choice?`);
    computerSelection = getComputerChoice();

    console.log(playRound(playerSelection,computerSelection));
    
    if(pScore == 5){
        console.log(`you've won the game!`)
    }
    if(cScore == 5){
        console.log(`you've lost the game...`)

    }

    
}    

game();
game();
game();
game();
game();