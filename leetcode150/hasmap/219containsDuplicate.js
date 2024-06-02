var containsNearbyDuplicate = function (nums, k) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (num in map && i - map[num] <= k) {
      return true;
    }
    map[num] = i;
  }
  return false;
};
