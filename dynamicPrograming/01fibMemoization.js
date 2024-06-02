// O(n) time complexity
const fib1 = (n) => {
  let ans = [1, 1];
  for (let i = 2; i < n; i++) {
    ans.push(ans[i - 2] + ans[i - 1]);
  }
  return ans[n - 1];
};
// console.log(fib1(100));

// T -o(2^n) exponential time complexity, Space- O(n)
const fib2 = (n) => {
  if (n <= 2) return 1;
  return fib1(n - 2) + fib1(n - 1);
};
// console.log(fib(60));

// with memoization, T- O(2n)- O(n), S-O(2n)-O(n)
const fib3 = (n, memo = {}) => {
  if (n <= 2) return 1;
  if (n in memo) return memo[n];
  memo[n] = fib3(n - 2, memo) + fib3(n - 1, memo);
  return memo[n];
};

console.log(fib3(200));
