import { highScores } from "./highScores.js";
import {
  kermitLoser,
  kermitFine,
  kermitHighscore,
  removeKermit,
} from "./kermit.js";

console.log(highScores);
let currentScore = 0;
let currentHighScore = 0;
let selectedTimesTable = "1";
let answerChecked = false;
let previousNum2 = null;
let lastQuestionIncorrect = false;
const timesRadios = document.getElementsByName("timesTableradio");
const timesTableDropdown = document.getElementById("timesTableDropdown");

function initialisePage() {
  setSum(selectedTimesTable, numGenerator());

  // Event listener for radio buttons when viewed on medium and up devices
  for (const radio of timesRadios) {
    radio.addEventListener("change", function () {
      if (this.checked) {
        updateSelectedTimesTable(this.value);
        removeKermit();
        document.getElementById("answer").value = "";
        document.getElementById("result").innerHTML = "";
        const indexNumber = this.value - 1;
        const hiScore = highScores[indexNumber];
        currentHighScore = hiScore[indexNumber + 1];
        document.getElementById("highScore").innerHTML = currentHighScore;
        setSum(selectedTimesTable, numGenerator());
      }
    });
  }

  // Event listener for dropdown for viewing on small devices.
  timesTableDropdown.addEventListener("change", function () {
    updateSelectedTimesTable(this.value);
    removeKermit();
    document.getElementById("answer").value = "";
    document.getElementById("result").innerHTML = "";
    const indexNumber = this.value - 1;
    const hiScore = highScores[indexNumber];
    currentHighScore = hiScore[indexNumber + 1];
    document.getElementById("highScore").innerHTML = currentHighScore;
    setSum(selectedTimesTable, numGenerator());
  });

  // Event listener for checkAnswerBtn 'Go'
  document
    .getElementById("checkAnswerBtn")
    .addEventListener("click", function () {
      const answerInput = parseFloat(document.getElementById("answer").value);
      if (answerChecked === true) {
        alert("Please select next question.");
      } else if (isNaN(answerInput)) {
        alert("Please input an answer first");
      } else {
        checkAnswer(answerInput);
        answerChecked = true; // Set the flag to true after checking the answer
      }
    });

  // Event listener for nextQuestion button
  document
    .getElementById("nextQuestion")
    .addEventListener("click", function () {
      if (answerChecked) {
        nextQuestion();
        answerChecked = false; // Reset the flag when moving to the next question
      } else {
        // Display a message or perform an action indicating that the answer needs to be checked first
        alert("Please answer the sum first.. thanks");
      }
    });
}

window.addEventListener("load", initialisePage);
// Event listener for restart button
document.getElementById("restart").addEventListener("click", restartTheFunc);

function restartTheFunc() {
  removeKermit();
  currentScore = 0;
  document.getElementById("score").innerHTML = currentScore;
  document.getElementById("answer").value = "";
  document.getElementById("result").innerHTML = "";
  // checkHighScore(selectedTimesTable, currentScore);
  setSum(selectedTimesTable, numGenerator());
  answerChecked = false;
}

function updateSelectedTimesTable(value) {
  if (selectedTimesTable !== value) {
    selectedTimesTable = value;
    currentScore = 0; // Reset currentScore if times table changes
    document.getElementById("score").innerHTML = currentScore; // Update score display
  }
}

function numGenerator() {
  const operandNum = Math.floor(Math.random() * 12);
  return operandNum;
}

function setSum(num1, num2) {
  const operandOne = document.getElementById("operand1");
  operandOne.innerHTML = num1;

  const operandTwo = document.getElementById("operand2");
  operandTwo.innerHTML = num2;
}

function checkAnswer(inputtedAnswer) {
  const valueOne = parseFloat(document.getElementById("operand1").innerHTML);
  const valueTwo = parseFloat(document.getElementById("operand2").innerHTML);
  // const answerInput = parseFloat(document.getElementById("answer").value);

  if (inputtedAnswer === valueOne * valueTwo) {
    currentScore += 1;
    document.getElementById("result").innerHTML = "Well done, you are right!";
    document.getElementById("score").innerHTML = currentScore;
  } else {
    document.getElementById(
      "result"
    ).innerHTML = `"Wrong, sorry! Your final score is ${currentScore}`;

    lastQuestionIncorrect = true;
    checkHighScore(selectedTimesTable, currentScore); // Pass the selected times table
  }
}

function nextQuestion() {
  document.getElementById("result").innerHTML = "";
  document.getElementById("answer").value = "";
  removeKermit();
  //reset currentScore if last question answered incorrectly.
  if (lastQuestionIncorrect) {
    currentScore = 0;
    document.getElementById("score").innerHTML = currentScore;
    lastQuestionIncorrect = false; // Reset the flag
  }
  // Generate a new num2 value that is not the same as the previous value
  let newNum2;
  do {
    newNum2 = numGenerator();
  } while (newNum2 === previousNum2);

  setSum(selectedTimesTable, newNum2);

  previousNum2 = newNum2;
}

function checkHighScore(timesTable, score) {
  const indexToUpdate = highScores.findIndex(
    (scoreObj) => Object.keys(scoreObj)[0] == timesTable.toString()
  );
  if (indexToUpdate !== -1) {
    // Get the existing high score
    const existingHighScore = highScores[indexToUpdate][timesTable];

    // Update only if the provided score is higher
    if (score > existingHighScore) {
      highScores[indexToUpdate][timesTable] = score;
      document.getElementById("highScore").innerHTML = score;
      const highScoresString = JSON.stringify(highScores);
      localStorage.setItem("highScoresData", highScoresString);
      kermitHighscore(score);
      console.log(highScoresString);
    } else if (score < 3) {
      kermitLoser();
    } else {
      kermitFine();
    }
  }
}
