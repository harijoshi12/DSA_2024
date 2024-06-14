// optimised using binary search
var findMin = function (nums) {
  let l = 0,
    r = nums.length - 1;
  while (l < r) {
    let mid = Math.floor((l + r) / 2);
    if (nums[mid] > nums[r]) {
      // search right part
      l = mid + 1;
    } else {
      // search left part
      r = mid;
    }
  }
  return nums[l];
};

// brute force
var findMin = function (nums) {
  let idx = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      idx = i;
      break;
    }
  }
  return idx == nums.length - 1 ? nums[0] : nums[idx + 1];
};
