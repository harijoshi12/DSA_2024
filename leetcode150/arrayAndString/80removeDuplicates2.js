// intutive

// optimised
var removeDuplicates = function (nums) {
  let n = nums.length;
  if (n <= 2) return n;
  let idx = 2;
  for (let i = 2; i < n; i++) {
    if (nums[i] != nums[idx - 2]) {
      nums[idx++] = nums[i];
    }
  }
  return idx;
};
