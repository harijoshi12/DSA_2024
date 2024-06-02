// optimised

var longestConsecutive = function (nums) {
  if (nums.length == 0) return 0;

  const numSet = new Set(nums);
  let longestStreak = 0;

  for (const num of numSet) {
    if (!numSet.has(num - 1)) {
      let currNum = num;
      let currStreak = 1;

      while (numSet.has(currNum + 1)) {
        currNum += 1;
        currStreak += 1;
      }
      longestStreak = Math.max(longestStreak, currStreak);
    }
  }
  return longestStreak;
};

// not optimised
var longestConsecutive = function (nums) {
  if (nums.length == 0) return 0;

  let longestStreak = 0;

  for (const num of nums) {
    if (!nums.includes(num - 1)) {
      let currNum = num;
      let currStreak = 1;

      while (nums.includes(currNum + 1)) {
        currNum += 1;
        currStreak += 1;
      }
      longestStreak = Math.max(longestStreak, currStreak);
    }
  }
  return longestStreak;
};
