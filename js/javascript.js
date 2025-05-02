// Rock Paper Scissors v1.1 Browser Edition

// Get elements from the html page
const controls = document.querySelector(".controls");
const winElem = document.querySelector("#win-pt");
const winnerElem = document.querySelector("#winner");
const roundList = document.querySelector(".rounds ol");
let round = document.querySelector("#current-round");
let humanScore = document.querySelector("#human-score");
let computerScore = document.querySelector("#computer-score");
/**
 * @type {["rock", "paper", "scissors"]}
 */
const [r, p, s] = ["rock", "paper", "scissors"];
const choices = [r, p, s];

/**
 * Get computer's choice
 * @param {string[]} data
 * @returns {string}
 */
function getComputerChoice(data) {
  return data[Math.floor(Math.random() * data.length)];
}

/**
 * Play a single round
 * @param {string} humanChoice
 * @param {string} computerChoice
 * @returns {*}
 */
function playRound(humanChoice, computerChoice) {
  let userWon = false;

  switch (humanChoice) {
    case computerChoice:
      round.textContent++;
      return "tie"; // A tie!
    case r:
      userWon = computerChoice === s;
      round.textContent++;
      break;
    case p:
      userWon = computerChoice === r;
      round.textContent++;
      break;
    case s:
      userWon = computerChoice === p;
      round.textContent++;
      break;
    default:
      console.log("Invalid choice");
      return;
  }
  return userWon;
}

function initGame(winPt) {
  // Set the points required to win the game
  winElem.textContent = winPt;
  // Copy the variable data to the page
  round.textContent = 0;
  humanScore.textContent = 0;
  computerScore.textContent = 0;

  winnerElem.style.visibility = "hidden";
}

function validateResult(result) {
  if (typeof result === "boolean") {
    if (result) {
      humanScore.textContent++;
      return "win";
    } else {
      computerScore.textContent++;
      return "lose";
    }
  } else if (result === "tie") {
    return "tie";
  }
}

/**
 * @param {string} humanChoice
 * @param {string} computerChoice
 */
function createRoundRecord(result, humanChoice, computerChoice) {
  const messages = {
    win: "You won this round.",
    lose: "Computer won this round.",
    tie: "It is a tie, no point is added.",
  };
  const record = document.createElement("li");

  record.textContent = `You draw: ${humanChoice}, Computer draws: ${computerChoice}. ${messages[result]}`;

  roundList.appendChild(record);
}

controls.addEventListener("click", (e) => {
  let target = e.target;
  const computerChoice = getComputerChoice(choices);
  let humanChoice;
  let result;

  switch (target.id) {
    case r:
      humanChoice = r;
      break;
    case p:
      humanChoice = p;
      break;
    case s:
      humanChoice = s;
      break;
  }

  if (humanScore.textContent == winPt || computerScore.textContent == winPt) {
    const buttons = controls.querySelectorAll(".action-btn");
    buttons.forEach((btn) => (btn.disabled = true));
    controls.disabled = true;

    const winMsg =
      humanScore.textContent == winPt
        ? "Victory is yours-well played!"
        : "You’ve been outsmarted by the machine.";
    winnerElem.textContent = winMsg;
    winnerElem.style.visibility = "visible";
  } else if (target.matches(".action-btn")) {
    result = playRound(humanChoice, computerChoice);
    createRoundRecord(validateResult(result), humanChoice, computerChoice);
  }
});

const winPt = 5;
initGame(winPt);
