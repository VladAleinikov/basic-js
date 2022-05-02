const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {

  let count = {
    symbols: [],
    repeats: []
  };
  s1.split('').forEach(e1 => {
    let repeats = 1;
    let breakFor = false;
    s2.split('').forEach(e2 => {
      if (e1 == e2 && !breakFor) {
        if (count.symbols.indexOf(e1) == -1) {
          count.symbols.push(e1);
          count.repeats.push(1);
          breakFor = true;
        }
        else if (count.repeats[count.symbols.indexOf(e1)] < repeats) {
          count.repeats[count.symbols.indexOf(e1)]++;
          breakFor = true;
        }
        else
          repeats++;

      }

    });
  });


  return (count.repeats.length) ?
    count.repeats.reduce((a, b) => a + b) :
    0;
  // remove line with error and write your code here
}
module.exports = {
  getCommonCharacterCount
};
