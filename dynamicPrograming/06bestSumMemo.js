// Best sum

// write a function 'bestSum(targetSum, numbers)' that takes in a targetSum  and an array of numbers as arguments.

// the funtion should return an array containing the 'shortest' combination of numbers that add up to exactly the targetSum.

// If there is a tie for the shorterst combination, you may return any of the shortest.

// let nums = [5, 3, 4, 7];
let nums = [2, 3, 5];

const bestSum1 = (targetSum, nums) => {
  console.log("target = ", targetSum);
  let ans = [];
  if (targetSum < 0) return null;
  if (targetSum == 0) return [];
  for (let i = 0; i < nums.length; i++) {
    let res = bestSum1(targetSum - nums[i], nums);
    if (res) {
      res = [...res, nums[i]];
      if (res.length < ans.length) {
        ans = res;
      }
      console.log("res =", res);
      // return res;
    }
  }
  return ans;
};

console.log(bestSum1(5, nums));
