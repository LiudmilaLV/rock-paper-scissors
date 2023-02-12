const options = ["Rock", "Pape", "Scissors"]

function getComputerChoice(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
};
console.log(getComputerChoice(options));