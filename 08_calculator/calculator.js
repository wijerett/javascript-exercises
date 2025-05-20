const add = function(a, b) {
	const num = a + b;
  return num;
};

const subtract = function(a, b) {
	const num = a - b;
  return num;
};

const sum = function(array) {
	const sum = array.reduce((total, num) => total + num, 0);
  return sum;
};

const multiply = function(array) {
  const product = array.reduce((total, num) => total * num, 1);
  return product;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(fact) {
  if (fact < 0) return "Undefined";
  let num = 1;
  for (let i = 1; i <= fact; i++) {
    num *= i;
  }
  return num;
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
