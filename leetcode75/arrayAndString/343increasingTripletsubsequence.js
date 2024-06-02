// brute force
var increasingTriplet = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] < nums[j] && nums[j] < nums[k]) {
          return true;
        }
      }
    }
  }
  return false;
};

// optimised 1 T-O(n), S-O(n)
var increasingTriplet = function (nums) {
  let n = nums.length;
  let left = [];
  left[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    left[i] = Math.min(nums[i], left[i - 1]);
  }
  let right = [];
  right[n - 1] = nums[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    right[i] = Math.max(nums[i], right[i + 1]);
  }
  // console.log("l = ",left)
  // console.log("nums = ",nums)
  // console.log("r = ",right)
  for (let i = 0; i < n; i++) {
    if (left[i] < nums[i] && nums[i] < right[i]) {
      return true;
    }
  }
  return false;
};

// optimised 2, T-O(n) S-O(1)
var increasingTriplet = function (nums) {
  let f = Infinity,
    s = Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= f) {
      f = nums[i];
    } else if (nums[i] <= s) {
      s = nums[i];
    } else {
      return true;
    }
  }
  return false;
};
