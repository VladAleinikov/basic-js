const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let nums = n.toString().split('');
  console.log(nums);
  let max = -100000;

  for (let i = 0; i < nums.length; i++) {
    let newNum = parseInt(nums.filter((e, key) => {
      if (key != i)
        return e;
    }).join(''));
    if (newNum > max)
      max = newNum;

  }

  return max;



  // remove line with error and write your code here
}

module.exports = {
  deleteDigit
};
