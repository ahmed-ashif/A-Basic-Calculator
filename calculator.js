//To handle the button's input when clicked by user
function toCalculate(val) {
  let symbol = document.querySelector('#display');
  symbol.value += val;
}
//All clear button
function allClear() {
  let inputBar = document.querySelector('#display');
  inputBar.value = '';
}
//Clear one element
function back() {
  let oneEleBack = document.querySelector('#display');
  oneEleBack.value = oneEleBack.value.slice(0,-1);
}
//To handle the keyboard input
document.addEventListener('keydown', function(event) {
  const key = event.key;
  if (/\d|\+|\-|\*|\/|\./.test(key)) {
    // /\d|\+|\-|\*|\/|\./ is a regular expression pattern in programming, \d matches any digit from 0 to 9,| is OR operator,and +,-,*,/ matches addition,subtraction,multiplication,division respectively.
    toCalculate(key); 
  }else if (key === 'Enter' || key === '=') {
    result();
  } else if (key === 'Escape' || key === 'c' || key === 'C') { 
    allClear(); 
  }else if(key ==='Backspace') {
    back();
  }
});
//Evaluating the final result
function result() {
  const expression = document.getElementById('display').value;  
  if (expression) {
    try {
      const result = eval(expression);
      if (result === Infinity) {
        document.getElementById('display').value = 'Cannot divide by 0';
      } else {
        document.getElementById('display').value = result;
      }
    }catch (error) {
      document.getElementById('display').value = 'Error!';
    }
  }
}