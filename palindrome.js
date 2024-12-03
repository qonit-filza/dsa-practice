'use strict';

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  if (!s.length) return true;

  const isAlphabet = (c) => {
    const charCode = c.charCodeAt();
    return charCode >= 65 && charCode <= 90;
  };

  const isNumeric = (c) => {
    const charCode = c.charCodeAt();
    return charCode >= 48 && charCode <= 57;
  };

  const isAlphanumeric = (c) => {
    return isAlphabet(c) || isNumeric(c);
  };

  let pointerA = 0;
  let pointerB = s.length - 1;
  const string = s.toUpperCase();

  while (pointerA < pointerB) {
    while (!isAlphanumeric(string[pointerA]) && pointerA < pointerB) {
      pointerA++;
    }

    while (!isAlphanumeric(string[pointerB]) && pointerA < pointerB) {
      pointerB--;
    }

    if (string[pointerA] !== string[pointerB]) {
      return false;
    }

    pointerA++;
    pointerB--;
  }

  return true;
};

// console.log(isPalindrome('1ab2aba.../.,;=+,,..]2ba1'));
// console.log(isPalindrome('A man, a plan, a canal: Panama'));
// console.log(isPalindrome('race a car'));
console.log(isPalindrome('.,'));
