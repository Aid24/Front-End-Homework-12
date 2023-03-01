// 1

const arr = [1, 2, "3", 4, "hello", 5.5];
const avg = calculateAverage(arr);
console.log(avg); 


function calculateAverage(numbers) {
  let sum = 0;
  let count = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === 'number') {
      sum += numbers[i];
      count++;
    }
  }

  return count > 0 ? sum / count : 0;
}


// 2

const x = 10;
const y = 3;
const znak = '+';
const result = doMath(x, znak, y);
console.log(result); 


function doMath(x, znak, y) {
  let result;

  switch (znak) {
    case '+':
      result = x + y;
      break;
    case '-':
      result = x - y;
      break;
    case '*':
      result = x * y;
      break;
    case '/':
      result = x / y;
      break;
    case '%':
      result = x % y;
      break;
    case '^':
      result = Math.pow(x, y);
      break;
    default:
      result = 'Некоректний знак операції';
      break;
  }

  return result;
}

// 3

const rows = prompt('Введіть кількість рядків:');
const cols = prompt('Введіть кількість стовпців:');
const arr = fillArray(rows, cols);
console.log(arr); 


function fillArray(rows, cols) {
  const arr = [];

  for (let i = 0; i < rows; i++) {
    const innerArr = [];
    for (let j = 0; j < cols; j++) {
      const value = prompt(`Введіть елемент масиву [${i}][${j}]:`);
      innerArr.push(value);
    }
    arr.push(innerArr);
  }

  return arr;
}

// 4

const str = " hello world";
const charsToRemove = ['l', 'd'];
const result = removeChars(str, charsToRemove);
console.log(result); 

function removeChars(str, chars) {
  const arr = str.split('');
  
  const filtered = arr.filter(char => !chars.includes(char));
  
  const result = filtered.join('');
  
  return result;
}


