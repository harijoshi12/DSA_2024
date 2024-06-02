var trailingZeroes = function (n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    let num = i;
    while (num % 5 == 0) {
      num = num / 5;
      count++;
    }
  }
  return count;
};
