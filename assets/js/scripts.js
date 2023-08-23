const timesRadios = document.getElementsByName("timesTableradio");

for (const radio of timesRadios) {
  radio.addEventListener("change", function () {
    if (this.checked) {
      setSum(this.value, numGenerator());
    }
  });
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

let currentScore = 0;
function checkAnswer() {
  const valueOne = parseFloat(document.getElementById("operand1").innerHTML);
  const valueTwo = parseFloat(document.getElementById("operand2").innerHTML);
  const answerInput = parseFloat(document.getElementById("answer").value);
  if (answerInput === valueOne * valueTwo) {
    currentScore += 1;
    document.getElementById("result").innerHTML = "Well done, you are right!";
    document.getElementById("score").innerHTML = currentScore;
  } else {
    document.getElementById("result").innerHTML = "Wrong, sorry!";
  }
}

document.getElementById("nextQuestion").addEventListener("click", nextQuestion);

function nextQuestion() {
  const timesTable = document.querySelector(
    "input[name='timesTableradio']:checked"
  );
  document.getElementById("result").innerHTML = "";
  document.getElementById("answer").value = "";
  setSum(timesTable.value, numGenerator());
}
