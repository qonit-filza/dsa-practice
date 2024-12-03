/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const closingPairs = new Map([
    ['(', ')'],
    ['[', ']'],
    ['{', '}'],
  ]);
  const stacks = [];

  for (let i = 0; i < s.length; i++) {
    console.log({ i, stacks });
    if (closingPairs.has(s[i])) {
      stacks.push(s[i]);
      continue;
    }

    const topStack = stacks[stacks.length - 1];
    if (closingPairs.get(topStack) === s[i]) {
      stacks.pop();
    } else {
      return false;
    }
  }

  return !stacks.length;
};

const s1 = '()';

const s2 = '()[]{}';

const s3 = '(]';

console.log(isValid(s1));
console.log(isValid(s2));
console.log(isValid(s3));
console.log(isValid('{](}[)'));
console.log(isValid('{](}[)'));
