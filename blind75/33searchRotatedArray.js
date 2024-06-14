var search = function (nums, target) {
  let l = 0,
    r = nums.length - 1;
  while (l <= r) {
    let m = Math.floor((l + r) / 2);
    if (nums[m] == target) {
      return m;
    }
    if (nums[m] >= nums[l]) {
      // this is the left sorted part
      if (target >= nums[l] && target < nums[m]) {
        r = m - 1;
      } else {
        l = m + 1;
      }
    } else {
      // this is the right sorted part
      if (target <= nums[r] && target > nums[m]) {
        l = m + 1;
      } else {
        r = m - 1;
      }
    }
  }
  return -1;
};
