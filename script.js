// Define values

let previousValue = ''; 
let currentValue = '';
let operator = '';
let result = '';


// Math functions 

function add() {
  return previousValue + currentValue;
};

function subtract() {
  return previousValue - currentValue;
};

function multiply() {
  return previousValue * currentValue;
};

function divide() {
  return previousValue / currentValue;
};

function operate() {
  previousValue = Number(previousValue);
  currentValue = Number(currentValue);
  switch (operator) {
    case '+':
      return add(previousValue, currentValue);
    case '-':
      return subtract(previousValue, currentValue);
    case '*':
      return multiply(previousValue, currentValue);
    case '/':
      if (currentValue === 0) {
        return 'Error / 0';
      } else {
        return divide(previousValue, currentValue);
      };
  };
};


// DOM query selectors

let clear = document.querySelector('#clear');
let equal = document.querySelector('#result');
let decimal = document.querySelector('#decimal');
let premiums = document.querySelectorAll('.premium');

let numbers = document.querySelectorAll('.number');
let operators = document.querySelectorAll('.operator');

let currentScreen = document.querySelector('.display');
currentScreen.textContent = 0;

// Functions

numbers.forEach((number) => {
  number.addEventListener('click', () => {
    getNumber(number.textContent);
    currentScreen.textContent = currentValue;
  });
});

decimal.addEventListener('click', () => {
  if (!currentScreen.textContent.includes('.')) {
    currentValue += '.';
    currentScreen.textContent = currentValue;
  };
});

operators.forEach((op) => {
  op.addEventListener('click', () => {
    if (previousValue === '') {
      getOperator(op.textContent);
      previousValue = currentValue;
      currentValue = '';
    } else {
      currentScreen.textContent = parseFloat(operate().toFixed(5));
      getOperator(op.textContent);
      previousValue = currentScreen.textContent;
      currentValue = '';
    };
  });
});

function getNumber(num) {
  currentValue += num;
};

function getOperator(op) {
  operator = op;
};

clear.addEventListener('click', () => {
  previousValue = '';
  currentValue = '';
  operator = '';
  currentScreen.textContent = 0;
});

equal.addEventListener('click', () => {
  currentScreen.textContent = parseFloat(operate().toFixed(5));
});

premiums.forEach((premium) => {
  premium.addEventListener('click', () => {
    alert('Premium function! 100$ per month to use this.');
  });
});