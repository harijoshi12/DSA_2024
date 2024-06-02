var kidsWithCandies = function (candies, extraCandies) {
  let max = 0;
  for (el of candies) {
    max = Math.max(max, el);
  }
  let ans = [];
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= max) {
      ans.push(true);
    } else {
      ans.push(false);
    }
  }
  return ans;
};
