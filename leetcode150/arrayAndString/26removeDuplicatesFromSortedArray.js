var removeDuplicates = function (nums) {
  let idx = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] != nums[i + 1]) {
      nums[idx++] = nums[i + 1];
    }
  }
  return idx;
};
