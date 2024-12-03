/**
 * - multiply all elements and divide by nums[i] -> O(n)
 * - loop all array for every answer[i] -> O(n²)
 * - create new array with nums.length fill it with 1 => loop nums array => multiply answer[i] with nums[i] on each loop
 *
 *
 *  - loop nums once -> push answer[i] with all other array
 *
 *  - 864
 * - 12 72
 * - 1 2 3 4
 *
 *
 *
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelfV1 = function (nums) {
  let answers = nums.map(() => []);
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      answers[i].push(1 * nums[i]);
    } else {
      answers[i].push(answers[i - 1][0] * nums[i]);
    }
  }

  for (let j = nums.length - 1; j >= 0; j--) {
    if (j === nums.length - 1) {
      answers[j].push(1 * nums[j]);
    } else {
      answers[j].push(answers[j + 1][1] * nums[j]);
    }
  }

  results = [];
  for (let k = 0; k < answers.length; k++) {
    const calcProductExceptSelf =
      (answers[k - 1]?.[0] ?? 1) * (answers[k + 1]?.[1] ?? 1);
    results.push(calcProductExceptSelf);
  }

  return results;
};

// const map = {
//   1: [1, 1],
//   2: [1, 1],
//   3: [1, 1],
//   4: [1, 1],
// };

/**
 * f36
 *
 *    1 2  3 4
 *
 *    1 1  2 6 24
 *24 24 12 4 1
 *
 */

// 24, 12, 8, 6

var productExceptSelf = function (nums) {
  let answers = [];

  let preFix = 1;
  for (let i = 0; i < nums.length; i++) {
    answers[i] = preFix;
    preFix *= nums[i];
  }

  let postFix = 1;
  for (let j = answers.length - 1; j >= 0; j--) {
    answers[j] *= postFix;
    postFix *= nums[j];
  }

  return answers;
};
console.log(productExceptSelf([1, 2, 3, 4]));

/**
 * 1
 * [1, 1, 1, 1]
 * [-x, 1, 1, 1]
 *
 *
 *
 * 2
 * [2, 2, 2, 2]
 * [2, 1x, 2, 2]
 *
 *
 * 3
 * [6, 6, 6, 6]
 * [6, 3, 2x, 6]
 *
 *
 *
 * 4
 * [24, 24, 24, 24]
 * [24, 12, 8, 6x]
 *
 *
 *
 *
 * answers = []
 *
 * 1.
 * answer[i] * nums[i]
 *
 *
 */
