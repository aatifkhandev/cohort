/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const str1Lower = str1.toLowerCase();
  const str2Lower = str2.toLowerCase();
  if (str1Lower.length !== str2Lower.length) {
    return false;
  }

  let counter = {};

  for (let letters of str1Lower) {
    counter[letters] = (counter[letters] || 0) + 1;
  }
  for (let item of str2Lower) {
    if (!counter[item]) return false;
    counter[item] -= 1;
  }
  return true
}


module.exports = isAnagram;
