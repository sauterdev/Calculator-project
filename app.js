let currentValue = ``;
let firstOperand = ``;
let secondOperand = ``;
currentOperator = ``;
let operatorSelected = false;
let decimalCounter = false;

let calcDisplay = document.querySelector(`#calcDisplay`);

//selects all operands and operators in a node list to loop over for event listeners
const operandButton = document.querySelectorAll(`.operand-button`);
const  operatorButton = document.querySelectorAll(`.operator-button`);
//

 const clearButton = document.querySelector(`#clear`);
 const negativeButton = document.querySelector(`#negative`);
 const percentButton = document.querySelector(`#percent`);
const decimalButton = document.querySelector(`#decimal`);
const equalsButton = document.querySelector(`#equals`);

for (let i = 0; i < operandButton.length; i++) { //puts a click event on all the numbers
  operandButton[i].addEventListener(`click`, selectOperand)
};

for (let i = 0; i < operatorButton.length; i++) { //puts a click event on all opertor buttons
  operatorButton[i].addEventListener(`click`, selectOperator)
};

equalsButton.addEventListener(`click`, runEquation);
clearButton.addEventListener(`click`, clear);
negativeButton.addEventListener(`click`, makeNegative);
percentButton.addEventListener(`click`, turnToPercent);
decimalButton.addEventListener(`click`, decimal);

function selectOperand(x) {
  if (operatorSelected) {
    let yellowButtons = document.getElementsByClassName(`operator-button`);
    for (let i = 0; i < yellowButtons.length; i++) {
      yellowButtons[i].style.background = `white`;
    }
  }
  if (calcDisplay.innerHTML.length == 9 && firstOperand != ``) {
    return;
  } //limits character length in display
  let newNumber = x.target.innerHTML;
  firstOperand = firstOperand + newNumber;
  calcDisplay.innerHTML = firstOperand;
}

function selectOperator(x) {
  if (operatorSelected) {
    //runs the equation if two operands have been input with current operator
    runEquation();
  }
  currentOperator = x.target.innerHTML;
  x.target.style.background = "yellow";
  operatorSelected = true;
  secondOperand = firstOperand;
  firstOperand = ``;
  decimalCounter = false;
  return;
}

function runEquation() {
  if (firstOperand == ``) {
    //works when no equation is entered, after AC function
    return;
  } else {
    currentValue = eval(secondOperand + currentOperator + firstOperand);
  }
  calcDisplay.innerHTML = currentValue;
  firstOperand = currentValue;
  operatorSelected = false; //lets you keep hitting equal with last operator and operand
  return;
}

function clear() {
  if (firstOperand) {
    //clears current operand, leaves rest of equation
    firstOperand = ``;
    decimalCounter = false;
    calcDisplay.innerHTML = `0`;
    clearButton.innerHTML = `AC`;
  } else {
    //all clear, sets everything back to start point
    currentValue = ``;
    secondOperand = ``;
    currentOperator = ``;
    operatorSelected = false;
    decimalCounter = false;
    calcDisplay.innerHTML = `0`;
    clearButton.innerHTML = `C`;
  }
  return;
}

function makeNegative() {
  firstOperand = firstOperand * -1;
  calcDisplay.innerHTML = firstOperand;
  return;
}

function turnToPercent() {
  firstOperand = firstOperand / 100;
  calcDisplay.innerHTML = firstOperand;
}

function decimal() {
  if (decimalCounter) {
    //can only have one decimal
    return;
  }
  firstOperand = firstOperand + `.`;
  decimalCounter = true;
  calcDisplay.innerHTML = firstOperand;
  return;
}
