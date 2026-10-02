const choice = ["rock","paper","scissors"];

let computerScore = 0;
let humanScore = 0;





// The gameLogic
function gameLogic(computerChoice,humanChoice){

    if (computerChoice === humanChoice){
        console.log("It's a tie!");
        return "tie";
    }
    //Computer is Rock
    else if (computerChoice === choice[0] && humanChoice === choice[1]){
        return "human wins";
    }

    else if (computerChoice === choice[0] && humanChoice === choice[2]){
        return "computer wins";
    }
    
    //Computer is Paper
    else if (computerChoice === choice[1] && humanChoice === choice[0]){
        return "computer wins";
    }

    else if (computerChoice === choice[1] && humanChoice === choice[2]){
        return "human wins";
    }

    //Computer is Scissors
    else if (computerChoice === choice[2] && humanChoice === choice[0]){
        return "human wins";
    }

    else if (computerChoice === choice[2] && humanChoice === choice[1]){
        return "computer wins";
    }
    
}



// Play Game which contains the whole round
function playGame(){


    // Play Round
function playRound(){
     const computerSelection = getComputerChoice();
     const humanSelection = getHumanChoice();

     const result = gameLogic(computerSelection,humanSelection);

     if (result === "human wins"){
        humanScore = humanScore + 1;
        console.log(`You win, ${humanSelection} beats ${computerSelection}`);
     }

     else if(result === "computer wins"){
        computerScore = computerScore + 1;
        console.log(`You loss, ${computerSelection} beats ${humanSelection}`);
     }
    
}

    for(let i=0; i<5; i++){
        playRound();

    }
    console.log(`computerScore = ${computerScore} : humanScore = ${humanScore}`);
    return `computerScore = ${computerScore} : humanScore = ${humanScore}`;

}


// Computer Choice
function getComputerChoice(){
    let choice1 = choice[Math.floor(Math.random() * 3)];
    console.log(choice1);
    return choice1;
}


// Human Choice
function getHumanChoice(){
    let HumanInput = prompt("Enter Rock, Paper or Scissors");
    let Humanchoice = HumanInput.toLowerCase();
    console.log(Humanchoice)
    return Humanchoice;
}

playGame();