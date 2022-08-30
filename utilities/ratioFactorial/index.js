const findRatio = require("../ratio/index.js");
const findFactorial = require("../factorial/index.js");

function ratioAndFactorial(n1, n2, n3) {
  const ratio = findRatio(n1, n2);
  const factorial = findFactorial(n3);
  return { ratio: ratio, factorial: factorial };
}

console.log(ratioAndFactorial(2, 3, 3));

module.exports = ratioAndFactorial;
