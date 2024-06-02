// iterative

var myPow = function (x, n) {
  let num = x;
  if (x == 1) return 1;
  if (n > 0) {
    for (let i = 1; i < n; i++) {
      // console.log("x",x)
      x *= num;
    }
  } else {
    for (let i = n; i <= 0; i++) {
      // console.log("x",x)
      x /= num;
    }
  }
  return x;
};

// binary

var myPow = function (x, n) {
  if (n == 1) return x;
  if (n == 0) return 1;
  if (x == 1) return x;
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  const half = myPow(x, Math.floor(n / 2));
  if (n % 2 == 0) {
    return half * half;
  } else {
    return half * half * x;
  }
};
