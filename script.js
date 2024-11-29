console.log("hello")



// main function 
function getComputerChoice(){
    const randomNumber = Math.random();
    if (randomNumber < 0.33){
        return "rock"
    }

    else if (randomNumber < 0.56){
        return "paper"
    }

    else {
        return "scissors"
    }

}

//user input function
function getHumanChoice(){
    // prompt the user for their choice
    let userChoice = prompt("Enter your choice : rock,paper or scissors");
    // ensure the user input is valid
    userChoice = userChoice.toLowerCase();
    if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
        return userChoice;}
    else{
        console.log("Invalid choice try again !")
        return(null);
    }
}


//play round function

function playRound(humanChoice,computerChoice){
    
    const winconditions = {rock:"scissors", paper:"rock", scissors:"paper"};
    
    if (humanChoice === computerChoice){
       console.log("Tie ...!"+" "+ "try again !")
       return 0;
    }

    else if (winconditions[humanChoice] === computerChoice){
        console.log("You win"+" " + "You got a one point !")
       // humanScore += 1;
       return 1;
    }

    else if (winconditions[computerChoice] === humanChoice){
        console.log ("Computer win"+" "+"Never give up ")
        //ComputerScore += 1;
        return -1;
    }

    else{
        console.log("Please enter valid input")
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection,computerSelection);





function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= 5; i++) {
        console.log(`Round ${i}:`);
        
        let humanChoice = getHumanChoice();
        if (humanChoice === null) {
            console.log("Invalid input, please try again.");
            i--; 
            continue;
        }

        let computerChoice = getComputerChoice();
        console.log(`Computer chose: ${computerChoice}`);

        const result = playRound(humanChoice, computerChoice);

        if (result === 1) {
            humanScore++;
        } else if (result === -1) {
            computerScore++;
        }
        
        console.log(`Scores after Round ${i} - You: ${humanScore}, Computer: ${computerScore}`);
        console.log("----------");
    }

    console.log("Game Over!");
    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (humanScore < computerScore) {
        console.log("Computer wins the game! Better luck next time.");
    } else {
        console.log("It's a tie! Great game!");
    }
    
}


playGame();
