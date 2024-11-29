console.log("hello")

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

console.log(getComputerChoice());

