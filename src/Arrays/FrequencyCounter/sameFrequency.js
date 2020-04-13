/**
 *
 * @param {number} first first positive integer to be compared.
 * @param {number} second second positive integer to be compared.
 * @returns {boolean} returns true if both numbers have the same frequency of digits.
 * Complexity: O(n)
 */
module.exports = function sameFrequency(first, second) {
  const strFirst = first.toString();
  const strSecond = second.toString();
  if (strFirst.length != strSecond.length) return false;
  const primeiro = {};

  for (let letter of strFirst) {
    primeiro[letter] ? ++primeiro[letter] : (primeiro[letter] = 1);
  }
  for (const letter of strSecond) {
    if (!primeiro[letter]) return false;
    primeiro[letter]--;
  }
  return true;
};
