/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagramsV1 = function (strs) {
  //   O(nLogn)
  const isAnagram = (strA, strB) => {
    if (strA.length !== strB.length) return false;
    return strA.split('').sort().join() === strB.split('').sort().join();
  };

  const results = [];
  //   O(n²)
  for (let i = 0; i < strs.length; i++) {
    if (results.flat().includes(strs[i])) {
      continue;
    }
    const temp = [strs[i]];
    for (let j = i + 1; j < strs.length; j++) {
      if (results.flat().includes(strs[j])) {
        continue;
      }

      if (isAnagram(strs[i], strs[j])) {
        temp.push(strs[j]);
      }
    }
    results.push(temp);
  }

  //   return results.sort((a, b) => a.length - b.length);
  return results;
};

/**
 * only loop once. how?
 * - - - - - -
 * store to map while loop
 * eat => masuk ke map x [eat]
 * tea => cek map -> anagram dari map x -> push [eat,tea]
 * tan => no anagram fouund masuk ke map y [tan]
 *
 * ok just use key for the first word that found
 * - loop to all map keys
 * - loop all the keyscheck if there's map with anagram of key strs[i]
 *     no => create new key:value strs[i]: strs[i]
 *     yes => push strs[i] to the value
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagramsV2 = function (strs) {
  const isAnagram = (strA, strB) => {
    if (strA.length !== strB.length) return false;
    return strA.split('').sort().join() === strB.split('').sort().join();
  };

  const anagramGroup = {};
  for (let i = 0; i < strs.length; i++) {
    let foundAnagramKey = false;

    Object.keys(anagramGroup).forEach((key) => {
      if (isAnagram(key, strs[i])) {
        anagramGroup[key].push(strs[i]);
        foundAnagramKey = true;
      }
    });

    if (!foundAnagramKey) {
      anagramGroup[strs[i]] = [strs[i]];
    }
  }
  return Object.values(anagramGroup);
};

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagramsV3 = function (strs) {
  const isAnagram = (strA, strB) => {
    if (strA.length !== strB.length) return false;

    const countLetter = {};
    for (let i = 0; i < strA.length; i++) {
      if (countLetter.hasOwnProperty(strA[i])) {
        countLetter[strA[i]][0]++;
      } else {
        countLetter[strA[i]] = [1, 0];
      }

      if (countLetter.hasOwnProperty(strB[i])) {
        countLetter[strB[i]][1]++;
      } else {
        countLetter[strB[i]] = [0, 1];
      }
    }

    const countLetterPairs = Object.values(countLetter);
    for (let j = 0; j < countLetterPairs.length; j++) {
      if (countLetterPairs[j][0] !== countLetterPairs[j][1]) {
        return false;
      }
    }

    return true;
  };

  const anagramGroup = {};
  for (let i = 0; i < strs.length; i++) {
    let foundAnagramKey = false;

    Object.keys(anagramGroup).forEach((key) => {
      if (isAnagram(key, strs[i])) {
        anagramGroup[key].push(strs[i]);
        foundAnagramKey = true;
      }
    });

    if (!foundAnagramKey) {
      anagramGroup[strs[i]] = [strs[i]];
    }
  }
  return Object.values(anagramGroup);
};

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagramsV4 = function (strs) {
  const isAnagram = (strA, strB) => {
    if (strA.length !== strB.length) return false;

    const countLetter = {};
    for (let i = 0; i < strA.length; i++) {
      if (countLetter.hasOwnProperty(strA[i])) {
        countLetter[strA[i]][0]++;
      } else {
        countLetter[strA[i]] = [1, 0];
      }

      if (countLetter.hasOwnProperty(strB[i])) {
        countLetter[strB[i]][1]++;
      } else {
        countLetter[strB[i]] = [0, 1];
      }
    }

    const countLetterPairs = Object.values(countLetter);
    for (let j = 0; j < countLetterPairs.length; j++) {
      if (countLetterPairs[j][0] !== countLetterPairs[j][1]) {
        return false;
      }
    }

    return true;
  };

  const anagramGroup = {};
  for (let i = 0; i < strs.length; i++) {
    let foundAnagramKey = false;

    const keys = Object.keys(anagramGroup);
    for (let j = 0; j < keys.length; j++) {
      if (isAnagram(keys[j], strs[i])) {
        anagramGroup[keys[j]].push(strs[i]);
        foundAnagramKey = true;
        break;
      }
    }

    if (foundAnagramKey) {
      continue;
    } else {
      anagramGroup[strs[i]] = [strs[i]];
    }
  }
  return Object.values(anagramGroup);
};

/**
mengelompokkan anagram -> map & array




 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const anagramGroup = new Map();
  for (let i = 0; i < strs.length; i++) {
    const keyArr = new Array(26).fill(0);
    for (let j = 0; j < strs[i].length; j++) {
      const keyIndex = strs[i].charCodeAt(j) - 97;
      keyArr[keyIndex]++;
    }

    const key = keyArr.join('-');
    if (anagramGroup.has(key)) {
      const currentList = anagramGroup.get(key);
      anagramGroup.set(key, [...currentList, strs[i]]);
    } else {
      anagramGroup.set(key, [strs[i]]);
    }
  }

  return [...anagramGroup.values()];
};

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
console.log(groupAnagrams(['']));
console.log(groupAnagrams(['a']));
console.log(groupAnagrams(['bdddddddddd', 'bbbbbbbbbbc']));
