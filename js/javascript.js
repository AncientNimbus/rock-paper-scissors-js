// Rock Paper Scissors v1.0 Console Edition
/**
 * Program Flow
 * 1. Create an array that contain 3 string value: rock, paper and scissors
 * 2. Create a function that randomly pick a value from the array
 * 3. This value will be stored as computer's choice
 * 4. Create a prompt that will collect user's choice
 * 5. Check user's choice against the array to ensure the option is valid
 * 6. Initialized user's score and computer's score
 * 7. Compare computer's choice against user's choice
 * 8. If user win, add a point to the user
 * 9. If user lose, add a point to the computer
 * 10. If it is a tie, restart the round
 * 11. The first to reach 5 points win the game
 */

const rps = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

/**
 * Get computer's choice
 * @param {string[]} data
 * @returns {string}
 */
function getComputerChoice(data) {
  return data[Math.floor(Math.random() * data.length)];
}

/**
 * Get user's choice
 * @param {string[]} data
 * @returns {string}
 */
function getHumanChoice(data) {
  let humanChoice = prompt("Rock, Paper, Scissors?", getComputerChoice(data));

  if (humanChoice == null) {
    // Re-prompt if the prompt is empty
    return getHumanChoice(data);
  } else {
    humanChoice = humanChoice.toLowerCase();
    // Re-prompt if the prompt response is incorrect
    humanChoice =
      data.indexOf(humanChoice) >= 0 ? humanChoice : getHumanChoice(data);

    return humanChoice;
  }
}

// TODO: Store user's score

// TODO: Play a single round

// TODO: Play the entire game (5 rounds)

const computerChoice = getComputerChoice(rps);
const humanChoice = getHumanChoice(rps);
// console.log(computerChoice);
console.log(humanChoice);
