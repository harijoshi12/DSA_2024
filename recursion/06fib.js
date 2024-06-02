const sol1 = (n) => {
  if (n == 1 || n == 2) return 1;
  return sol1(n - 2) + sol1(n - 1);
};

console.log(sol1(40));
