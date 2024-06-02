var isHappy = function (n) {
  let seen = new Set();
  let num = n;
  while (num != 1 && !seen.has(num)) {
    seen.add(num);
    let temp = num;
    let sum = 0;
    while (temp) {
      sum += Math.pow(temp % 10, 2);
      temp = Math.floor(temp / 10);
    }
    num = sum;
  }
  return num === 1;
};
