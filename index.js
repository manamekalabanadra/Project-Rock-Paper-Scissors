console.log("Hello World");

function getComputerChoice(){
    const item1 = "rock";
    const item2 = "paper";
    const item3 = "scissors";

// Generate a random integer between 1 and 3
    const randomIndex = Math.floor(Math.random() * 3) + 1;

    let chosenItem;

// Assign the item based on the random number
    switch (randomIndex) {
    case 1:
        chosenItem = item1;
        break;
    case 2:
        chosenItem = item2;
        break;
    case 3:
        chosenItem = item3;
        break;
    }
    
    return chosenItem;
}
//console.log(getComputerChoice());
//Getting user input
function getHumanChoice(){
   let humanInput =  prompt("rock paper scissors");
   return humanInput;
    
}


let humanScore;
let computerScore;

function playGame(rounds){
    
    for(let i = 0;i < rounds;i++){
        //setting score
    humanScore = 0;
    computerScore = 0;


        //logical code for decide winner in case
        function playRound(humanChoice, computerChoice) {
            if (humanChoice.toLowerCase() === "rock" && 
            computerChoice === "paper"){
                computerScore += 1;
                console.log(`You lose! ${humanChoice} beats ${computerChoice}`);
            }
            else if(humanChoice.toLowerCase() === "paper" && 
            computerChoice === "scissors"){
                computerScore += 1;
                console.log(`You lose! ${humanChoice} beats ${computerChoice}`);
            }
            else if(humanChoice.toLowerCase() === "scissors" && 
            computerChoice === "Rock"){
                computerScore += 1;
                console.log(`You lose! ${humanChoice} beats ${computerChoice}`);
            }
            else if(humanChoice.toLowerCase() === computerChoice){
                console.log("Tie");
            }
            else{
                humanScore += 1;
                console.log(`You won! ${humanChoice} beats ${computerChoice}`);
            }
        }

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }
    
}

let results = playGame(5);
console.log(results);

