document.addEventListener("DOMContentLoaded", () => {

    const options = ["Rock", "Paper", "Scissors"]
    let yourScore = 0;
    let oppScore = 0;
    
    function getComputerChoice(arr) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
    };

    function playRound(you) {
        const opponent = getComputerChoice(options);
        if (you === opponent) {
            yourScore += 1;
            oppScore += 1;
            return([`${you} vs ${opponent}!`, yourScore, oppScore]);
        } else {
            if ((you === "Rock" && opponent === "Scissors")
            || (you === "Scissors" && opponent === "Paper")
            || (you === "Paper" && opponent === "Rock")) {
                yourScore += 1;
                return [`${you} beats ${opponent}!`, yourScore, oppScore]
            } else {
                oppScore += 1;
                return([`${opponent} beats ${you}!`, yourScore, oppScore]);
            }
        }
    };

    const rock = document.getElementById("rock");
    const paper = document.getElementById("paper");
    const scissors = document.getElementById("scissors");
    const resultText = document.getElementById("round-text");
    const winText = document.getElementById("win-text")
    const you = document.getElementById("you");
    const opp = document.getElementById("opponent");


    function checkResults (yourchoice) {
        let gameResults = [];
        winText.textContent = "";
        gameResults = playRound(yourchoice);
        you.textContent = gameResults[1];
        opp.textContent = gameResults[2];
        if (rounds < 5) {
            resultText.textContent = gameResults[0];
        } else {
            resultText.textContent = "5 round game finished!";
            if (yourScore === oppScore) {
                winText.textContent = "It's a Tie!";
            } else if (yourScore > oppScore) {
                winText.textContent = "You won!";
            } else {
                winText.textContent = "Computer won!";
            }
            yourScore = 0;
            oppScore = 0;
            rounds = 0;
        }
    };

    let rounds = 0;
    rock.addEventListener("click", () => {
        rounds += 1;
        checkResults("Rock");
    });
    paper.addEventListener("click", () => {
        rounds += 1;
        checkResults("Paper");
    });
    scissors.addEventListener("click", () => {
        rounds += 1;
        checkResults("Scissors");
    });
});