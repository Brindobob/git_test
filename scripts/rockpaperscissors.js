// Initialize scores 
let userScore = 0
let computerScore = 0

// Game continues until 5 points are achieved
function playToFive() {
    while (userScore < 5 && computerScore < 5) {
        playRound();
        console.log(`Score - User: ${userScore}, Computer ${computerScore}`)
    }
    if (userScore === 5) {
        console.log("Game over. User has won.")
    } else {
        console.log("Game over. Computer has won.")
    }
}

// Round itself, gets and stores user and computer choice 
function playRound() {
    const userChoice = prompt("Choose: rock, paper, scissors").toLowerCase();
    const computerChoice = getRandomChoice();
    // Log for comparison
    console.log("User chose: " + userChoice);
    console.log("Computer chose: " + computerChoice);
    
    // Result
    const result = getUserResult(userChoice, computerChoice);
    console.log(result);
    
    // Increment score 
    if (result === "Tie!") {
        console.log("Tie, play again.")
    } else if (result === "Win!") {
        userScore++;
    } else if (result === "Lose!") {
        computerScore++;
    }
}

// Computer needs to generate random choice
function getRandomChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Compare
function getUserResult(userChoice, compChoice) {
    if (userChoice === compChoice) return "Tie!";
    return compChoice === getLosingChoiceOf(userChoice) ? "Win!" : "Lose!"

    function getLosingChoiceOf(choice) {
        switch (choice) {
            case "rock": return "scissors"
            case "paper": return "rock"
            case "scissors": return "paper"
        }
    }
}

playToFive();