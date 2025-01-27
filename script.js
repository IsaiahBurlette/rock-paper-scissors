
function aI() {
    computer = Math.floor(Math.random()*3);
    if (computer == 0) {
        computerInput = "rock";
        return computerInput;
    } else if (computer == 1) {
        computerInput = "paper";
        return computerInput;
    } else if (computer == 2) {
        computerInput = "scissors";
        return computerInput;
    }
}


function playGame() {
    gameTally = 0;
    computerScore = 0;
    userScore = 0;
    while (gameTally < 2){
        computerInput = aI();
        userInput = prompt("Rock, paper, or scissors?").toLowerCase();
        if (userInput == computerInput) {
            alert("Draw!");
            gameTally ++;
        }else if (userInput == "rock" && computerInput == "paper") {
            alert("Computer Won! Paper beats rock.");
            computerScore ++;
            gameTally++;
        }else if (userInput == "paper" && computerInput == "rock") {
            alert("You Won! Paper beats rock");
            userScore ++;
            gameTally++;
        }else if (userInput == "rock" && computerInput == "scissors") {
            alert("You Won! Rock beats scissors.");
            userScore++;
            gameTally++;
        }else if (userInput == "scissors" && computerInput == "rock") {
            alert("Computer Won! Rock beats scissors.");
            computerScore ++;
            gameTally++;
        }else if (userInput == "paper" && computerInput == "scissors") {
            alert("Computer Won! Scissors beats paper.");
            computerScore ++;
            gameTally++;
        }else if (userInput == "scissors" && computerInput == "paper") {
            alert("You Won! Scissors beats paper.");
            userScore ++;
            gameTally++;
        }
        alert(`Computer score: ${computerScore}, Your score: ${userScore}`);
        if (computerScore == 1 && userScore == 1) {
            gameTally --;
        }else if (computerScore == 1 && userScore == 0 && drawScore == 1) {
            gameTally --;
        }
        else if (computerScore == 0 && userScore == 1 && drawScore == 1) {
            gameTally --;
        }
    }
}

