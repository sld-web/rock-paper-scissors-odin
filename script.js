console.log("hello")

let humanScore = 0 ;
let ComputerScore = 0 ;
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection,computerSelection);


// main function 
function getComputerChoice(){
    const randomNumber = Math.random();
    if (randomNumber < 0.33){
        return "Rock"
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

function playRound(humanChoice,computerChoice){
    
    const winconditions = {rock:"scissors", paper:"rock", scissors:"paper"};
    
    if (humanChoice === computerChoice){
       console.log("Tie ...!"+" "+ "try again !")
    }

    else if (winconditions[humanChoice] === computerChoice){
        console.log("You win"+" " + "You got a one point !")
        humanScore += 1;
    }

    else if (winconditions[computerChoice] === humanChoice){
        console.log ("Computer win"+" "+"Never give up ")
        ComputerScore += 1;
    }

    else{
        console.log("Please enter valid input")
    }
}



console.log(playRound());

