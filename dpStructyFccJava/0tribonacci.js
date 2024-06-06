const tribonacci1 = (n) => {
  if (n <= 0) return 0;
  if (n == 1) return 0;
  if (n == 2) return 1;
  return tribonacci1(n - 1) + tribonacci1(n - 2) + tribonacci1(n - 3);
};

// for (let i = 0; i <= 50; i++) {
//   console.log(tribonacci1(i));
// }

const tribonacci2 = (n, memo = {}) => {
  if (n <= 0) return 0;
  if (n == 1) return 0;
  if (n == 2) return 1;
  if (n in memo) return memo[n];
  memo[n] =
    tribonacci2(n - 1, memo) +
    tribonacci2(n - 2, memo) +
    tribonacci2(n - 3, memo);
  return memo[n];
};

for (let i = 0; i <= 50; i++) {
  console.log(tribonacci2(i));
}
