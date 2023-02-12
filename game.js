document.addEventListener("DOMContentLoaded", () => {
    const options = ["Rock", "Paper", "Scissors"]

    function getComputerChoice(arr) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
    };

    function playRound(you, opponent) {
        if (you === opponent) {
            return ("It's a tie!");
        } else {
            if ((you === "Rock" && opponent === "Scissors")
            || (you === "Scissors" && opponent === "Paper")
            || (you === "Paper" && opponent === "Rock")) {
                return (`You win! ${you} beats ${opponent}!`);
            } else {
                return (`You lose! ${opponent} beats ${you}!`);
            }
        }
    };

    console.log("Hi! Let\'s play 'Rock, Paper, Scissors!'");

    let word = "";
    let playerSelection = "";
    while (!(options.includes(playerSelection))) {
        console.log("Please, type Rock, Paper or Scissors!");
        word = prompt("Your choice: ");
        playerSelection = word.charAt(0).toUpperCase()+ word.slice(1);
    };

    const computerSelection = getComputerChoice(options);
    console.log(playRound(playerSelection, computerSelection));

});