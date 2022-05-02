const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(box) {
  let findCats = (arr, index) => {
    return (arr.indexOf("^^", index) != -1) ?
      findCats(arr, arr.indexOf("^^", index) + 1) + 1 :
      0;
  }
  let cats = 0;

  box.forEach(element => {
    cats += findCats(element, 0);
  });

  return cats;
  // remove line with error and write your code here
}

module.exports = {
  countCats
};
