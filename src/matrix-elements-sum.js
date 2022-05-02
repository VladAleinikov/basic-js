const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix ) {
  let sumController = [];
  let sum = 0;
  matrix[0].forEach(e => {
    sumController.push(true);
  });

  matrix.forEach(e1 => {
    e1.forEach((e2, key2) => {
      if (e2 == 0)
        sumController[key2] = false;
      else if (sumController[key2])
        sum += e2;
    });
  });

  return sum;
  // remove line with error and write your code here
}

module.exports = {
  getMatrixElementsSum
};
