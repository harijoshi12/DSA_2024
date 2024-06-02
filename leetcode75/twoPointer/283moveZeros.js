var moveZeroes = function (nums) {
  let idx = 0,
    i = 0;
  while (i < nums.length) {
    if (nums[i] != 0) {
      nums[idx++] = nums[i];
    }
    i++;
  }
  for (let i = idx; i < nums.length; i++) {
    nums[i] = 0;
  }
};
