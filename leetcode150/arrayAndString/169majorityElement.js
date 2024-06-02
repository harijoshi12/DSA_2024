var majorityElement = function (nums) {
  let map = {};
  for (num of nums) {
    map[num] = (map[num] || 0) + 1;
  }
  let maxel = nums[0];
  let maxf = 0;
  for (el in map) {
    if (maxf < map[el]) {
      maxf = map[el];
      maxel = el;
    }
  }
  return maxel;
};
