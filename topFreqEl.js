'use strict';

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequentV1 = function (nums, k) {
  const elCount = {};
  for (let i = 0; i < nums.length; i++) {
    if (elCount.hasOwnProperty(nums[i])) {
      elCount[nums[i]]++;
    } else {
      elCount[nums[i]] = 1;
    }
  }

  console.log(elCount);

  return Object.entries(elCount)
    .sort((a, b) => b[1] - a[1])
    .map((el) => el[0])
    .slice(0, k);
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const numCount = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (numCount.has(nums[i])) {
      const lastValue = numCount.get(nums[i]);
      numCount.set(nums[i], lastValue + 1);
    } else {
      numCount.set(nums[i], 1);
    }
  }

  const freqBucket = new Array(nums.length + 1);
  //   .fill([]);
  numCount.forEach((count, num) => {
    // console.log({ count, num });
    // freqBucket[count].push('s'); // passed by reference
    // freqBucket[count] = [...freqBucket[count], num];

    if (Array.isArray(freqBucket[count])) {
      freqBucket[count].push(num);
    } else {
      freqBucket[count] = [num];
    }
  });

  const topK = [];

  //   let j = freqBucket.length;
  //   while (j > 0 && topK.length !== k) {
  //     if (!freqBucket[j]) {
  //       j--;
  //       continue;
  //     }

  //     let n = 0;
  //     while (n < freqBucket[j].length && topK.length !== k) {
  //       topK.push(freqBucket[j][n]);
  //       n++;
  //     }

  //     j--;
  //   }

  for (let j = freqBucket.length; j > 0; j--) {
    if (!freqBucket[j]) continue;
    for (let n = 0; n < freqBucket[j].length; n++) {
      topK.push(freqBucket[j][n]);
      if (topK.length === k) break;
    }
    if (topK.length === k) break;
  }

  return topK;
};

console.log(topKFrequent([4, 1, -1, 2, -1, 2, 3], 2));
// console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
// console.log(topKFrequent([1], 1));
