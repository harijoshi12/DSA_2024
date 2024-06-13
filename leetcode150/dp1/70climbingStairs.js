var climbStairs = function (n, memo = {}) {
  // if(n==0) return 1
  // if(n<0) return 0
  // if(n in memo) return memo[n]
  // memo[n] = climbStairs(n-1,memo)+climbStairs(n-2,memo)
  // return memo[n]
  step = 0;
  const helper = (step) => {
    if (step == n) return 1;
    if (step > n) return 0;
    return helper(step + 1) + helper(step + 2);
  };
  return helper(0);
};
