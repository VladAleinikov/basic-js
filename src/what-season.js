const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  let month = date.getMonth();
  if ([12, 1, 2].indexOf(month) != -1) {

    if (month == 2 && date.getDay() >= 29)
      return "spring"
    return "winter"
  }
  else if ([3, 4, 5].indexOf(month) != -1) {
    if (month == 5 && date.getDay() >= 31)
      return "summer"
    return "spring"
  }
  else if ([6, 7, 8].indexOf(month) != -1) {
    if (month == 2 && date.getDay() >= 31)
      return "autumn"
    return "summer"
  }
  else if ([9, 10, 11].indexOf(month) != -1) {
    if (month == 2 && date.getDay() >= 31)
      return "winter"
    return "autumn"
  }

  // remove line with error and write your code here
}

module.exports = {
  getSeason
};
