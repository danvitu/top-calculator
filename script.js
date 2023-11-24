let a, b, sign;

function add(a, b) {
  return a + b;
};

function subtract(a, b) {
  return a - b;
};

function multiply(a, b) {
  return a * b;
};

function divide(a, b) {
  return a / b;
};

function operate(a, b, sign) {
  switch(sign) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
  };
};

// let dispValue;
// const display = document.querySelector('.display');
// const buttons = document.querySelectorAll('button');
// buttons.forEach((button) => {
//   button.addEventListener('click', () => {
//     dispValue = button.innerText;
//     display.textContent = dispValue;
//   });
// });