    console.log(`calculating`);
    let currentValue = ``;
    let firstOperand = ``;
    let secondOperand = ``;
    currentOperator = ``;
    let operatorSelected = false;
    let decimalCounter= false;
    // let yellowButtons = document.getElementsByClassName(`.button`);
    // console.log(yellowButtons);
  let calcDisplay = document.querySelector(`#calcDisplay`);
  const clearButton = document.querySelector(`#clear`);
  const negativeButton = document.querySelector(`#negative`);
  const percentButton = document.querySelector(`#percent`);
  const divideButton = document.querySelector(`#divide`);
  const sevenButton = document.querySelector(`#seven`);
  const eightButton = document.querySelector(`#eight`);
  const nineButton = document.querySelector(`#nine`);
  const multiplyButton = document.querySelector(`#multiply`);
  const fourButton = document.querySelector(`#four`);
  const fiveButton = document.querySelector(`#five`);
  const sixButton = document.querySelector(`#six`);
  const subtractButton = document.querySelector(`#subtract`);
  const oneButton = document.querySelector(`#one`);
  const twoButton = document.querySelector(`#two`);
  const threeButton = document.querySelector(`#three`);
  const addButton = document.querySelector(`#add`);
  const zeroButton = document.querySelector(`#zero`);
  const decimalButton = document.querySelector(`#decimal`);
  const equalsButton = document.querySelector(`#equals`);

  zeroButton.addEventListener(`click`, selectOperand);
  oneButton.addEventListener(`click`, selectOperand);
  twoButton.addEventListener(`click`, selectOperand);
  threeButton.addEventListener(`click`, selectOperand);
  fourButton.addEventListener(`click`, selectOperand);
  fiveButton.addEventListener(`click`, selectOperand);
  sixButton.addEventListener(`click`, selectOperand);
  sevenButton.addEventListener(`click`, selectOperand);
  eightButton.addEventListener(`click`, selectOperand);
  nineButton.addEventListener(`click`, selectOperand);

  addButton.addEventListener(`click`, selectOperator);
  subtractButton.addEventListener(`click`, selectOperator);
  multiplyButton.addEventListener(`click`, selectOperator);
  divideButton.addEventListener(`click`, selectOperator);

  equalsButton.addEventListener(`click`, runEquation);
  clearButton.addEventListener(`click`, clear);
  negativeButton.addEventListener(`click`, makeNegative);
  percentButton.addEventListener(`click`, turnToPercent);
  decimalButton.addEventListener(`click`, decimal);

  function selectOperand(x) {
    // if(operatorSelected) {
    //     let yellowButtons = document.getElementsByClassName(`.button`);
    //     console.log(yellowButtons);
    //     yellowButtons.forEach(function(x){x.style.background = `white`});
    // };
    let newNumber = x.target.innerHTML;
    firstOperand = firstOperand + newNumber;
    calcDisplay.innerHTML = firstOperand;
    return;
  }

  function selectOperator(x) {
    if (operatorSelected) { //runs the equation if two operands have been input with current operator
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
    if(firstOperand == ``) { //works when no equation is entered, after AC function
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
    if (firstOperand) { //clears current operand, leaves rest of equation
      firstOperand = ``;
      decimalCounter = false;
      calcDisplay.innerHTML = `0`;
      clearButton.innerHTML=`AC`;
    } else { //all clear, sets everything back to start point
      currentValue = ``;
      secondOperand = ``;
      currentOperator = ``;
      operatorSelected = false;
      decimalCounter = false;
      calcDisplay.innerHTML = `0`;
      clearButton.innerHTML=`C`;
    }
    return;
  };

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
    if (decimalCounter) { //can only have one decimal
      return;
    }
    firstOperand = firstOperand + `.`;
    decimalCounter = true;
    calcDisplay.innerHTML = firstOperand;
    return;
  }

