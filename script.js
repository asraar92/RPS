
let humanScore = 0, computerScore = 0;
let humanChoice = "spock";
let computerChoice = "lizard";
const human = document.querySelector(".human");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
function getComputerChoice(computerChoice) {
    let randomNumber = Math.random();
    if (randomNumber > 0.66) {
        computerChoice = "rock";
    }
    else if (randomNumber < 0.33) {
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors"
    }
    return computerChoice;

}
function playGame() {


    if (computerScore === 5 || humanScore === 5) {
        if (computerScore > humanScore) {
            const results = document.createElement("div");
            let result = `Computer wins the game!  User:${humanScore} Computer:${computerScore}`;
            results.textContent = result;
            human.appendChild(results);
            computerScore++;

        }
        else if (humanScore === computerScore) {
            const results = document.createElement("div");
            results.textContent = `The game is a tie!  User:${humanScore}  Computer:${computerScore}`
            human.appendChild(results);
            humanScore++;

        }
        else {
            const results = document.createElement("div");
            results.textContent = `Congrats! You win the game!  User:${humanScore}  Computer:${computerScore}`
            human.appendChild(results);
            humanScore++;

        }
    }
    else {
        return;
    }
}

function playRound() {
    if (humanScore > 4 || computerScore > 4) {
        playGame();
    }
    else {

        let computerChoice = getComputerChoice();



        if (humanChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() == "scissors") {
            humanScore++;
            const newDiv = document.createElement("div")
            newDiv.textContent = `You win. Rock beats Scissors. User:${humanScore}  Computer:${computerScore}`
            human.appendChild(newDiv);
            playGame();




            return;
        }
        else if (humanChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "rock") {
            humanScore++;
            const newDiv = document.createElement("div")
            newDiv.textContent = `You win. Paper beats Rock. User:${humanScore}  Computer:${computerScore}`
            human.appendChild(newDiv);

            playGame();


            return;
        }
        else if (humanChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "paper") {
            humanScore++;
            const newDiv = document.createElement("div")
            newDiv.textContent = `You win. Scissors beats Paper. User:${humanScore}  Computer:${computerScore}`
            human.appendChild(newDiv);

            playGame();


            return;
        }
        else if (humanChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "paper") {
            computerScore++;

            const newDiv = document.createElement("div")
            newDiv.textContent = `You lose. Paper beats Rock. User:${humanScore}  Computer:${computerScore}`
            human.appendChild(newDiv);
            playGame();


            return;
        }
        else if (humanChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "scissors") {
            computerScore++;

            const newDiv = document.createElement("div")
            newDiv.textContent = `You lose. Scissors beats Paper. User:${humanScore}  Computer:${computerScore}`
            human.appendChild(newDiv);
            playGame();


            return;
        }
        else if (humanChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "rock") {
            computerScore++;

            const newDiv = document.createElement("div")
            newDiv.textContent = `You lose. Rock beats Scissors. User:${humanScore}  Computer:${computerScore}`
            human.appendChild(newDiv);
            playGame();


            return;
        }
        else if (humanChoice.toLowerCase() == computerChoice.toLowerCase()) {
            const newDiv = document.createElement("div")
            newDiv.textContent = `It's a tie! User:${humanScore}  Computer:${computerScore}`
            human.appendChild(newDiv);
            playGame();
            return;
        }
    }
}
rock.addEventListener('click', () => {
    humanChoice = "rock";
    playRound();
})
paper.addEventListener('click', () => {
    humanChoice = "paper";
    playRound();
})
scissors.addEventListener('click', () => {
    humanChoice = "scissors";
    playRound();
})


