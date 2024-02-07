let display = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let buttonsArray = Array.from(buttons);

let string = ' ';

buttonsArray.forEach(btn => {
  btn.addEventListener('click', (e) => {
    try {
      if (e.target.innerHTML == 'DEL') {
        string = string.substring(0, string.length - 1);
        updateDisplay();
      } else if (e.target.innerHTML == 'AC') {
        string = '';
        updateDisplay();
      } else if (e.target.innerHTML == '=') {
        string = evaluateExpression(string);
        updateDisplay();
      } else {
        string += e.target.innerHTML;
        updateDisplay();
      }
    } catch (error) {
      display.value = 'Syntax Error';
      string = '';
    }
  });
});

function evaluateExpression(expr) {
 
  try {
    return eval(expr);
  } catch (error) {
    throw new Error('Syntax Error');
  }
}

function updateDisplay() {
  display.value = string;
}