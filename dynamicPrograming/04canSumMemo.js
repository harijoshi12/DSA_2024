// write a function 'cansum(target, numbers)' that takes in a targetsun and an array of numbers as arguments.
// the function should return a boolean indicating whether or not it is possible to generate the targetsum using numbers from the array.
// you may use an element of the array as manuy times as needed.
// you may assume that all input numbers are nonnegative

// variation 1 - just return true or false
// T - O(n^m), n = target sum, m = array length, S - O(m)
let arr = [5, 3, 4, 7];
const canSum1 = (target, nums, sum = 0) => {
  // if(target==0) return true
  // if(target<0) return false
  for (let i = 0; i < nums.length; i++) {
    if (target - nums[i] == 0) {
      return true;
    } else if (target - nums[i] < 0) return false;
    let result = canSum1(target - nums[i], nums);
    if (result) return result;
  }
  return false;
};
// console.log(canSum1(70, arr));

// variation 2 - also return the numbers that adds up to the given number
// memoized T - O(n*m), S-O(m), n = target sum, m = array length,
const canSum2 = (target, nums, sumOf = [], memo = {}) => {
  // console.log(" target = ", target);
  if (target in memo) return memo[target];
  if (target == 0) {
    console.log(sumOf);
    return true;
  }
  if (target < 0) return false;

  for (let i = 0; i < nums.length; i++) {
    sumOf.push(nums[i]);
    let result = canSum2(target - nums[i], nums, sumOf);
    if (result) {
      memo[target] = result;
      return result;
    }
    sumOf.pop();
  }
  memo[target] = false;
  return false;
};
console.log(canSum2(3011, arr));

// variation 3- dont repeat the number

const canSum3 = (target, nums, sumOf = [], memo = {}) => {
  if (target in memo) return memo[target];
  if (target == 0) {
    console.log(sumOf);
    return true;
  }
  if (target < 0) return false;
  for (let i = 0; i < nums.length; i++) {
    sumOf.push(nums[i]);
    let result = canSum3(
      target - nums[i],
      [...nums.slice(0, i), ...nums.slice(i + 1)],
      sumOf,
      memo
    );
    if (result) {
      memo[target] = result;
      return result;
    }
    sumOf.pop();
  }
  memo[target] = false;
  return false;
};
let arr1 = [1, 4, 3, 9];
// console.log(canSum3(7, arr1));

// variation 4 - using memo

const canSum4 = (target, nums, memo = {}) => {
  // if(target==0) return true
  // if(target<0) return false
  if (target in memo) return memo[target];
  for (let i = 0; i < nums.length; i++) {
    if (target - nums[i] == 0) {
      return true;
    } else if (target - nums[i] < 0) return false;
    let result = canSum4(target - nums[i], nums, memo);
    if (result) {
      memo[target] = result;
      return result;
    }
  }
  memo[target] = false;
  return false;
};
// console.log("can 4");
// console.log(canSum4(2000, arr));
