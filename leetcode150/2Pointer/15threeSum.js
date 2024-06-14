// if only the triplets needs to be returned and not the index
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let ans = [];
  let n = nums.length;
  for (let i = 0; i < n - 2; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) continue;
    let target = -nums[i];
    let l = i + 1,
      r = n - 1;
    while (l < r) {
      let sum = nums[l] + nums[r];
      if (sum == target) {
        ans.push([nums[i], nums[l], nums[r]]);
        l++;
        r--;
        // Skip duplicates for the second element
        while (l < r && nums[l] == nums[l - 1]) l++;
        // Skip duplicates for the third element
        while (l < r && nums[r] == nums[r + 1]) r--;
      } else if (sum < target) {
        l++;
      } else {
        r--;
      }
    }
  }
  return ans;
};

// if we have to return the indexes
var threeSum = function (nums) {
  let ans = new Set();
  // let ans = []
  for (let i = 0; i < nums.length; i++) {
    let target = -nums[i];
    let map = {};
    for (let j = i + 1; j < nums.length; j++) {
      let temp = target - nums[j];
      if (temp in map) {
        let triplet = [nums[i], nums[j], temp].sort((a, b) => a - b);
        // let triplet = [i, j, map[temp]].sort((a, b) => a - b);
        // ans.push(triplet)
        ans.add(JSON.stringify(triplet));
      } else {
        map[nums[j]] = j;
      }
    }
  }
  // return ans
  return Array.from(ans).map(JSON.parse);
};
