document.addEventListener("DOMContentLoaded", () => {
    const options = ["Rock", "Paper", "Scissors"]
    let word = "";
    let playerSelection = "";

    function getComputerChoice(arr) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
    };

    function propmtUser() {
        while (!(options.includes(playerSelection))) {
        word = prompt("Please, choose Rock, Paper or Scissors: ");
        playerSelection = word.charAt(0).toUpperCase()+ word.slice(1);
        };
        return playerSelection;
    };

    function playRound(you, opponent) {
        if (you === opponent) {
            return (`${you} vs ${opponent}! It's a tie!`);
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

    function game(rounds = 5) {
        for (let i = 0; i < rounds; i++) {
            console.log(`${i+1} round:`);
            console.log(playRound(propmtUser(), getComputerChoice(options)));
        }
    }

    console.log("Hi! Let\'s play 'Rock, Paper, Scissors!'");
    game();

});