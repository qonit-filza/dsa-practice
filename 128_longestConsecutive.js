/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutiveV1 = function (nums) {
  // this only works for non-negative nums[i]
  const anwers = [];
  nums.forEach((num) => (anwers[num] = true));

  let longestConsecutive = 0;
  let countConsecutive = 0;
  for (let i = 1; i < anwers.length; i++) {
    if (anwers[i] && anwers[i - 1]) {
      countConsecutive++;
    } else if (anwers[i]) {
      if (countConsecutive > longestConsecutive) {
        longestConsecutive = countConsecutive;
      }
      countConsecutive = 1;
    }
  }

  return longestConsecutive;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutiveV2 = function (nums) {
  if (nums.length === 0) return 0;

  const uniqueNums = new Set(nums);
  const sorted = [...uniqueNums.values()].sort((a, b) => a - b);
  let longestConsecutive = 1;
  let countConsecutive = 1;

  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] === sorted[i - 1] + 1) {
      countConsecutive++;
    } else {
      countConsecutive = 1;
    }

    if (countConsecutive > longestConsecutive) {
      longestConsecutive = countConsecutive;
    }
  }

  return longestConsecutive;
};

var longestConsecutiveV3 = function (nums) {
  // change from using set to manual loop gurad
  if (nums.length === 0) return 0;

  const sorted = nums.sort((a, b) => a - b);
  let longestConsecutive = 1;
  let countConsecutive = 1;

  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] === sorted[i - 1]) continue;

    if (sorted[i] === sorted[i - 1] + 1) {
      countConsecutive++;
    } else {
      countConsecutive = 1;
    }

    if (countConsecutive > longestConsecutive) {
      longestConsecutive = countConsecutive;
    }
  }

  return longestConsecutive;
};

var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;

  const numSet = new Set(nums);
  const evaluated = new Set();
  let longestConsecutive = 1;

  for (let i = 0; i < nums.length; i++) {
    if (numSet.has(nums[i] - 1)) continue; // not the beginning
    if (evaluated.has(nums[i])) continue; // prevent reevalueate same number

    let countConsecutive = 1;
    let nextNum = nums[i] + 1;

    while (numSet.has(nextNum)) {
      countConsecutive++;
      nextNum++;
    }

    longestConsecutive = Math.max(longestConsecutive, countConsecutive);
    evaluated.add(nums[i]);
  }

  return longestConsecutive;
};

const nums = [100, 4, 200, 1, 3, 2, 100, 1, 1, 1, 1];
console.log(longestConsecutive(nums));

const nums2 = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
console.log(longestConsecutive(nums2));

// think of edge case if not mentioned in the question
