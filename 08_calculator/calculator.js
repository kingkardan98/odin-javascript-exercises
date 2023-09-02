const checkNumber = function(num){
  return (typeof(num) === 'number' && !Number.isNaN(num) && isFinite(num));
}

const add = function(...args) {
  // Add works with numbers, while sum works with arrays.
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    if (checkNumber(args[i])) {
      sum += args[i];
    }
  }
  return sum;
};

const subtract = function(...args) {
  // Pretty much the same as sum. Start on the first number, subtract all the others.
  let difference = args[0];
  for (let i = 1; i < args.length; i++) {
    if (checkNumber(args[i])) {
      difference -= args[i];
    }
  }
  return difference;
};

const sum = function(array) {
  // Here the expected argument is an array. This is the same as
  // the sum function, just with a name change, since the array
  // is explicitly declared.
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (checkNumber(array[i])) {
      sum += array[i];
    }
  }
  return sum;
};

const multiply = function(array) {
  // Multiply expects an array.
  // Just copy from sum and we're good.
  let product = 1;
  for (let i = 0; i < array.length; i++) {
    if (checkNumber(array[i])) {
      product *= array[i];
    }
  }
  return product;
};

const power = function(...args) {
	// Power expects numbers. ...args in action.
  if (!checkNumber(args[0]) && !checkNumber(args[1])) {
    return "ERROR";
  } else {
    let base = args[0];
    let exponent = args[1];
    powerResult = base ** exponent;
  }

  for (let i = 2; i < args.length; i++) {
    if (!checkNumber(args[i])) {
      return "ERROR";
    } else {
      base = powerResult;
      exponent = args[i];
      powerResult = base ** exponent;
    }
  }
  return powerResult;
};

const factorial = function(num) {
	// Factorial expects a number.
  let result = 1;
  if (!checkNumber(num)) {
    return "ERROR";
  } else {
    for (let i = num; i > 0; i--) {
      result *= i;
    }
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
