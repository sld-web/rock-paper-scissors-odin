console.log("hello")


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

console.log(getHumanChoice());
console.log(getComputerChoice());

