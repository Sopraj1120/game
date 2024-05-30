const game = ["Rock", "Paper", "Scissor"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

function playergame(playerGame) {
    const computerGame = game[Math.floor(Math.random() * 3)];
    let result = "";
    if (playerGame === computerGame) {
        result = ("It's Tie")
    } else if ((playerGame === "Rock" && computerGame === "Scissor") ||
        (playerGame === "Scissor" && computerGame === "Paper")||
        (playerGame === "Paper" && computerGame === "Rock")

    ){
        result =("You Are Win!")
    }
    else{
        result =("Computer is Win!")
    }

    playerDisplay.textContent = `Player: ${playerGame}`;
    computerDisplay.textContent = `Computer: ${computerGame}`;
    resultDisplay.textContent = result;
}