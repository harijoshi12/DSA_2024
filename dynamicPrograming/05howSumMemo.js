// write a function that takes in a targetSum and an arry of numbers as arguments
// the function should return an array containing any combination of elements that add up to exactly the targetSum. If there is no combination that adds up to the targetSum, then return null
// if there are multiple combinations possible, you may return anu single one.

// n - target sum, m - nums length
// T - O(n^m + m), S- O(m)

let nums = [5, 3, 4, 7];
const howSum1 = (targeSum, nums) => {
  // console.log("target1  = ", targeSum);
  if (targeSum == 0) return [];
  if (targeSum < 0) return null;
  for (let i = 0; i < nums.length; i++) {
    let result = howSum1(targeSum - nums[i], nums);
    // console.log("target  = ", targeSum, ", res = ", result);
    if (result) {
      return [...result, nums[i]]; // O(m)
    }
  }
  return null;
};

// console.log(howSum1(31, nums));

// memoised
// T-O(n*m^2), S-O(m^2)
const howSum2 = (targeSum, nums, memo = {}) => {
  if (targeSum in memo) return memo[targeSum];
  if (targeSum == 0) return [];
  if (targeSum < 0) return null;
  for (let i = 0; i < nums.length; i++) {
    let result = howSum2(targeSum - nums[i], nums, memo);
    if (result) {
      memo[targeSum] = [...result, nums[i]];
      return memo[targeSum]; // O(m)
    }
  }
  memo[targeSum] = null;
  return null;
};

console.log(howSum2(12, nums));

// if repetition not allowed,

const howSum3 = (targeSum, nums) => {
  if (targeSum == 0) return [];
  if (targeSum < 0) return null;
  for (let i = 0; i < nums.length; i++) {
    let result = howSum3(targeSum - nums[i], [
      ...nums.slice(0, i),
      ...nums.slice(i + 1),
    ]);
    if (result) {
      return [...result, nums[i]];
    }
  }
  return null;
};
// console.log(howSum3(7, nums));
