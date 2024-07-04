let humanScore = 0;
let computerScore = 0;

//UI
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
rock.textContent = "Rock";
paper.textContent = "Paper";
scissors.textContent = "Scissors";

function result() {
  let final = "";
  if (humanScore < computerScore) {
    final = "Loose";
  } else if (humanScore > computerScore) {
    final = "Win";
  } else if (humanScore === computerScore) {
    final = "Tie";
  }
  //   console.log(
  //     "humanScore:" + humanScore + ", " + "computerScore:" + computerScore
  //   );
  return final;
}
//Computer Choice
function getComputerChoice() {
  let computerChoice = "";
  let number = getRandomInt(3);
  switch (number) {
    case 0:
      computerChoice = "rock";
      break;
    case 1:
      computerChoice = "paper";
      break;
    case 2:
      computerChoice = "scissors";
      break;
  }
  return computerChoice.toLowerCase();
}

//Human Choice
rock.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});
paper.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});
scissors.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});

//scripts
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
//Compare
function playRound(humanChoice, computerChoice) {
  switch (humanChoice) {
    case "rock":
      if (computerChoice === "scissors") {
        humanScore++;
      } else if (computerChoice === "paper") {
        computerScore++;
      }
      break;
    case "paper":
      if (computerChoice === "rock") {
        humanScore++;
      } else if (computerChoice === "scissors") {
        computerScore++;
      }
      break;
    case "scissors":
      if (computerChoice === "rock") {
        computerScore++;
      } else if (computerChoice === "paper") {
        humanScore++;
      }
      break;
  }
  //DOM Result
  const choice = document.createElement("div");
  const score = document.createElement("div");
  const body = document.querySelector("body");

  choice.textContent =
    "humanChoice: " + humanChoice + ", " + "computerChoice: " + computerChoice;
  score.textContent =
    "humanScore: " + humanScore + ", " + "computerScore: " + computerScore;
  body.appendChild(choice);
  body.appendChild(score);
  if (humanScore >= 5 || computerScore >= 5) {
    const div = document.createElement("h2");
    div.textContent = "You are " + result();
    body.appendChild(div);
    rock.style.display = "none";
    paper.style.display = "none";
    scissors.style.display = "none";
  }
}
