/**
 *
 * @param {Array} numbers list of numbers
 * @param {number} average value to be found dividing any 2 numbers in the first param
 * @returns {boolean} returns weather at least the average of any 2 items in the array is equal to the second param
 * Complexity: O(n)
 */
module.exports = function averagePair(numbers, average) {
  for (let fPointer = 0; fPointer < numbers.length - 1; fPointer++) {
    let firstElement = numbers[fPointer];

    for (let sPointer = fPointer + 1; sPointer < numbers.length; sPointer++) {
      let secondElement = numbers[sPointer];
      if (firstElement + secondElement / 2 === average) return true;
    }
  }
  return false;
};
