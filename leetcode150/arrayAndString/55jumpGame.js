// intutive o(n)
var canJump = function (nums, jump = 0) {
  let n = nums.length;
  let idx = n - 1;
  for (let i = n - 2; i >= 0; i--) {
    if (i + nums[i] >= idx) {
      idx = i;
    }
  }
  return idx == 0;
};

// using dp
