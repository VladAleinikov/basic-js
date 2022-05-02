const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let newArr = arr.map(e => e);

  arr = arr.sort((a, b) => a - b);

  for (let i = 0, j = 0; i < newArr.length;) {

    if (arr[j] == -1)
      j++;
    else if (newArr[i] == -1)
      i++;
    else {
      newArr[i] = arr[j];
      i++;
      j++;
    }


  }
  return newArr;
  // remove line with error and write your code here
}

module.exports = {
  sortByHeight
};
