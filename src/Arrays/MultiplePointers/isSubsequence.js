/**
 * @param {string} word word to be searched
 * @param {string} sentence sentence to be searched through
 */
module.exports = function isSubSequence(str1, str2) {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;
  const word = str1.toUpperCase();
  const sentence = str2.toUpperCase();
  for (let idx1 = 0; idx1 < sentence.length; idx1++) {
    for (let idx2 = 0; idx2 < word.length; idx2++) {
      const letterSentence = sentence[idx1];
      const letterWord = word[idx2];
      if (letterSentence != letterWord) {
        break;
      } else {
        //when its the end of the word just return success
        if (idx2 == word.length - 1) return true;

        idx1++;
      }
    }
  }
  return false;
};
