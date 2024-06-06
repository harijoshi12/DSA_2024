let arr = [10, 20, 30, 40, 50, 60];
let k = 70;

const targetSumSubset = (arr, k, idx = 0, sol = [], sum = 0) => {
  if (idx == arr.length) {
    if (sum == k) {
      console.log(sol);
    }
    return;
  }
  if (sum == k) {
    console.log(sol);
    return;
  }
  targetSumSubset(arr, k, idx + 1, [...sol, arr[idx]], sum + arr[idx]);
  targetSumSubset(arr, k, idx + 1, [...sol], sum);
};

targetSumSubset(arr, k);
