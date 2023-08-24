import { highScores } from "./highScores.js";
console.log(highScores);
let currentScore = 0;
let currentHighScore = 0;
let selectedTimesTable = "1";
const timesRadios = document.getElementsByName("timesTableradio");
const timesTableDropdown = document.getElementById("timesTableDropdown");

// Event listener for radio buttons when viewed on medium and up devices
for (const radio of timesRadios) {
  radio.addEventListener("change", function () {
    if (this.checked) {
      updateSelectedTimesTable(this.value);
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
  const indexNumber = this.value - 1;
  const hiScore = highScores[indexNumber];
  currentHighScore = hiScore[indexNumber + 1];
  document.getElementById("highScore").innerHTML = currentHighScore;
  setSum(selectedTimesTable, numGenerator());
});

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

document
  .getElementById("checkAnswerBtn")
  .addEventListener("click", checkAnswer);

function checkAnswer() {
  const valueOne = parseFloat(document.getElementById("operand1").innerHTML);
  const valueTwo = parseFloat(document.getElementById("operand2").innerHTML);
  const answerInput = parseFloat(document.getElementById("answer").value);

  if (answerInput === valueOne * valueTwo) {
    currentScore += 1;
    document.getElementById("result").innerHTML = "Well done, you are right!";
    document.getElementById("score").innerHTML = currentScore;
  } else {
    document.getElementById(
      "result"
    ).innerHTML = `"Wrong, sorry! Your final score is ${currentScore}`;
    checkHighScore(selectedTimesTable, currentScore); // Pass the selected times table
  }
}

document.getElementById("nextQuestion").addEventListener("click", nextQuestion);

function nextQuestion() {
  document.getElementById("result").innerHTML = "";
  document.getElementById("answer").value = "";
  setSum(selectedTimesTable, numGenerator());
}

// // display current times table high score
// document.getElementById("highScore").innerHTML = currentHighScore;

function checkHighScore(timesTable, score) {
  console.log(timesTable);
  console.log(score);
}

//   const fs = require('fs');
//   const data = fs.readFilesSync("highScores.json");
//   const jsonData = JSON.parse(data);

//   jsonData.highScores.push({
//     timesTable: newCurrentScore,
//   });
//   fs.writeFileSync("highScores.json", JSON.stringify(jsonData));
// }
