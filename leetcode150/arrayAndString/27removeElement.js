var removeElement = function (nums, val) {
  let idx = 0,
    n = nums.length;
  for (let i = 0; i < n; i++) {
    if (nums[i] != val) {
      nums[idx++] = nums[i];
    }
  }
  console.log("idx :", idx);
  return idx;
};
