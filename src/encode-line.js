const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {

  let strArr = str.split('');

  let finalStr = "";
  strArr.forEach((e, key) => {


    let i = 0;

    while (strArr[key + i] == e)
      i++;

    if (key == 0 || e != strArr[key - 1])
      finalStr += ((i == 1) ? "" : i) + e;
  });
  return finalStr;
  // remove line with error and write your code here
}

module.exports = {
  encodeLine
};
