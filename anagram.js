'use strict';

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram1 = function (s, t) {
  if (s.length !== t.length) return false;

  const letterCount = {};
  s.split('').forEach((l) => {
    if (!letterCount[l]) {
      letterCount[l] = [1, 0];
    } else {
      letterCount[l][0]++;
    }
  });

  t.split('').forEach((l) => {
    if (!letterCount[l]) {
      letterCount[l] = [0, 1];
    } else {
      letterCount[l][1]++;
    }
  });

  let resultFlag = true;

  Object.values(letterCount).forEach((count) => {
    if (count[0] !== count[1]) resultFlag = false;
  });

  return resultFlag;
};

// let s = 'anagram';
// let t = 'nagaram';
// console.log(isAnagram(s, t));

// s = 'rat';
// t = 'car';
// console.log(isAnagram1(s, t));

// console.log(isAnagram(s,t))

//-----------------------------------

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isAnagram2 = function (s, t) {
//   if (s.length !== t.length) return false;

//   const letterCount = new Map()
//   for (let i = 0; i < s.length; i++) {
//     if (!letterCount.get(s[i])) {
//         letterCount.set(s[i], [1, letterCount.get(s[i][1])])
//     } else {
//         letterCount.set(s[i], [letterCount.get(s[i][0])++, letterCount.get(s[i][0])])
//     }

//     // if (!letterCount.get(t[i])) {
//     //     letterCount.set(t[i], [letterCount.get(t[i][0]), 1])
//     // } else {
//     //     letterCount.set(t[i], [letterCount.get(t[i][0]), letterCount.get(t[i][1])++])
//     // }
//   }

//   return letterCount;
// };

// console.log(isAnagram2('car', 'rat'))
// console.log(isAnagram2('car', 'rat'))

//---------------

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram3 = function (s, t) {
  if (s.length !== t.length) return false;

  const sortS = s.split('').sort().join('');
  const sortT = t.split('').sort().join('');

  if (sortS !== sortT) return false;
  return true;
};

console.log(isAnagram3('car', 'rat'));
console.log(isAnagram3('anagram', 'ganaram'));
