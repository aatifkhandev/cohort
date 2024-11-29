/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // Convert the string to lowercase to handle case-insensitivity
  str = str.toLowerCase();

  // Remove all non-alphanumeric characters (spaces, punctuation, etc.)
  str = str.replace(/[^a-z0-9]/g, '');

  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}
//   let normalized = str.toLowerCase();

//   // Reverse the normalized string
//   let rev = normalized.split("").reverse().join("");

//   // Compare the normalized string with its reverse
//   return normalized === rev;
// }

module.exports = isPalindrome;



