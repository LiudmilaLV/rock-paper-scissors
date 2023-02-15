document.addEventListener("DOMContentLoaded", () => {

    const options = ["Rock", "Paper", "Scissors"]
    
    function getComputerChoice(arr) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
    };

    function playRound(you, opponent) {
        if (you === opponent) {
            console.log(`${you} vs ${opponent}! It's a tie!`);
        } else {
            if ((you === "Rock" && opponent === "Scissors")
            || (you === "Scissors" && opponent === "Paper")
            || (you === "Paper" && opponent === "Rock")) {
                console.log(`You win! ${you} beats ${opponent}!`);
            } else {
                console.log(`You lose! ${opponent} beats ${you}!`);
            }
        }
    };

    // function game(playerSelection, rounds = 1) {
    //     for (let i = 0; i < rounds; i++) {
    //         console.log(`${i+1} round:`);
    //         console.log(playRound(playerSelection, computerSelection));
    //     }
    // }

    

    const rock = document.getElementById("rock");
    const paper = document.getElementById("paper");
    const scissors = document.getElementById("scissors");
    rock.addEventListener("click", () => playRound("Rock", getComputerChoice(options)));
    paper.addEventListener("click", () => playRound("Paper", getComputerChoice(options)));
    scissors.addEventListener("click", () => playRound("Scissors", getComputerChoice(options)));

});