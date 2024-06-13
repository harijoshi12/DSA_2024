const nthFibonacci = (n) => {
  //your code here
  const MOD = Math.pow(10, 9) + 7;
  let arr = [1, 1];
  for (let i = 2; i < n; i++) {
    arr.push((arr[i - 1] + arr[i - 2]) % MOD);
  }
  return arr[n - 1];
};

console.log(nthFibonacci(15));
