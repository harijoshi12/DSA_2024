var combinationSum = function (
  candidates,
  target,
  ans = [],
  curr = [],
  start = 0
) {
  if (target == 0) {
    ans.push([...curr]);
    return;
  }
  if (target < 0) {
    return;
  }
  for (let i = start; i < candidates.length; i++) {
    curr.push(candidates[i]);
    combinationSum(candidates, target - candidates[i], ans, curr, i);
    curr.pop();
  }
  return ans;
};
