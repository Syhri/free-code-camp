let playerScore = 0;
let computerScore = 0;

const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const optionsContainer = document.querySelector(".options-container");
const rockButton = document.getElementById("rock-btn");
const paperButton = document.getElementById("paper-btn");
const scissorsButton = document.getElementById("scissors-btn");
const roundResultMsg = document.getElementById("results-msg");
const winnerMsg = document.getElementById("winner-msg");
const resetGameButton = document.getElementById("reset-game-btn");

function getRandomComputerChoice() {
  const options = ["Rock", "Paper", "Scissors"];
  const randomNumberIndex = Math.floor(Math.random() * 3);
  return options[randomNumberIndex]
}

// this will be return boolean
// apakah player menang round? true or false
function hasPlayerWonTheRound(player, computer){
  // if(player === "Rock" && computer === "Scissors"){
  //   return true;
  // }else if(player === "Paper" && computer === "Rock"){
  //   return true;
  // }else if(player === "Scissors" && computer === "Paper"){
  //   return true;
  // }else{
  //   return false;
  // }
  return (
    (player === "Paper" && computer === "Rock") ||
    (player === "Rock" && computer === "Scissors") || 
    (player === "Scissors" && computer === "Paper")
  );
}

// this will be return a string if either won the round
function getRoundResult(userOption){
  const computerResult = getRandomComputerChoice();
  
  if(hasPlayerWonTheRound(userOption, computerResult)){
    playerScore++;
    return `Player menang! ${userOption} mengalahkan ${computerResult}`;
  }else if(userOption === computerResult){
    return `Seri! Keduanya memilih ${userOption}`;
  }else{
    computerScore++;
    return `Computer menang! ${computerResult} mengalahkan ${userOption}`;
  }
}

// this function will be return a 
function showResult(userOption){
  roundResultMsg.innerText = getRoundResult(userOption);
  playerScoreSpanElement.innerText = playerScore;
  computerScoreSpanElement.innerText = computerScore;
  
  if((playerScore === 3) || (computerScore ===3)){
    winnerMsg.innerText = `${playerScore === 3 ? "Player" : "Computer"} memenangkan game!`;
 
    optionsContainer.style.display = "none";
    resetGameButton.style.display = "block";
  }
}

rockButton.addEventListener("click", () => {
  showResult("Rock");
});
paperButton.addEventListener("click", () => {
  showResult("Paper");
});
scissorsButton.addEventListener("click", () => {
  showResult("Scissors");
});

function resetGame(){
  playerScore = 0;
  computerScore = 0;
  playerScoreSpanElement.innerText = playerScore;
  computerScoreSpanElement.innerText = computerScore;
  roundResultMsg.innerText = '';
  winnerMsg.innerText = '';
  optionsContainer.style.display = "block";
  resetGameButton.style.display = "none";
}

resetGameButton.addEventListener("click", resetGame); 