
let humanScore = 0, computerScore = 0;
let humanChoice = "spock";
let computerChoice = "lizard";
function getComputerChoice(computerChoice) {
            let randomNumber = Math.random();
            if (randomNumber > 0.66) {
                computerChoice = "Rock";
            }
            else if (randomNumber < 0.33) {
                computerChoice = "Paper";
            }
            else {
                computerChoice = "Scissors"
            }
            return computerChoice;

        }
        function getHumanChoice(humanChoice) {
            humanChoice = prompt("Enter your choice(Rock, Paper or Scissors):", "    ")
            return humanChoice;

        }
function playGame() {
    for (let roundCount = 0; roundCount < 5; roundCount++) {
        playRound(getComputerChoice, getHumanChoice);
    }
    if (computerScore > humanScore) {
        return console.log("Computer wins the game!")
    }
    else if (humanScore === computerScore) {
        return console.log("The game is a tie! Try again.");
    }
    else {
        return console.log("Congrats! You win the game!")
    }

    function playRound(getComputerChoice, getHumanChoice) {
        
        let computerChoice=getComputerChoice();
        let humanChoice=getHumanChoice();



        if (humanChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() == "scissors") {
            console.log("You win. Rock beats Scissors!")
            humanScore++;
            return;
        }
        else if (humanChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "rock") {
            console.log("You win. Paper beats Rock!")
            humanScore++;
            return;
        }
        else if (humanChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "paper") {
            console.log("You win. Scissors beats Paper!");
            humanScore++;
            return;
        }
        else if (humanChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "paper") {
            console.log("You lose. Paper beats Rock!");
            computerScore++;
            return;
        }
        else if (humanChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "scissors") {
            console.log("You lose. Scissors beats Paper!");
            computerScore++;
            return;
        }
        else if (humanChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "rock") {
            console.log("You lose. Rock beats Scissors!");
            computerScore++;
            return;
        }
        else if (humanChoice.toLowerCase() == computerChoice.toLowerCase()) {
            console.log("It's a tie!");
            return;
        }
    }
}
playGame();
