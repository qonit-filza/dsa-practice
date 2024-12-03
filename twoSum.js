'use strict';

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSumV1 = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSumV2 = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const indexPair = nums.indexOf(target - nums[i], i + 1);
    if (indexPair > -1) return [i, indexPair];
  }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSumV3_uncomplete = function (nums, target) {
  const mapNumsIndex = nums.reduce((accum, val, i) => {
    const obj = { ...accum };
    if (obj[val]) {
      obj[val].push(i);
    } else {
      obj[val] = [i];
    }
    return obj;
  }, {});

  for (let i = 0; i < nums.length; i++) {
    const targetPairValue = target - nums[i];
    const targetPairIndexes = mapNumsIndex[targetPairValue];
    if (!targetPairIndexes) continue;

    const pairIndex = targetPairIndexes.find((el) => el > i);
    return [i, pairIndex];
  }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const mapIndex = new Map();

  for (let i = 0; i < nums.length; i++) {
    const targetPair = target - nums[i];

    if (mapIndex.has(targetPair)) {
      return [i, mapIndex.get(targetPair)];
    }

    mapIndex.set(nums[i], i);
  }
};

console.log(twoSum([2, 7, 11, 5], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
