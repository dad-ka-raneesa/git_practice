const chalk = require('chalk');

const sum = function(a, b) {
  return a + b;
};

const substract = function(a, b) {
  return a - b;
};

console.log(chalk.red(sum(3,4)));
exports.sum = sum;
//exports.substract = substarct;
