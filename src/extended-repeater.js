const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let repeated = "";
  if (typeof options.separator == "undefined")
    options.separator = "+";
  if (typeof options.additionSeparator == "undefined")
    options.additionSeparator = "|"
  if (typeof options.addition == "undefined")
    options.addition = "";
  if (typeof options.repeatTimes == "undefined")
    options.repeatTimes = 1;
  if (typeof options.additionRepeatTimes == "undefined")
    options.additionRepeatTimes = 1
  for (let i = 0; i < options.repeatTimes; i++) {

    if (i != 0)
      repeated += options.separator;
    repeated += str;
    for (let j = 0; j < options.additionRepeatTimes; j++) {
      if (j == 0)
        repeated += options.addition;
      else
        repeated += options.additionSeparator + options.addition;

    }


  }

  return repeated;
  // remove line with error and write your code here
}

module.exports = {
  repeater
};
