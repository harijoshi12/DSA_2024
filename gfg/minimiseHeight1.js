let arr = [1, 5, 8, 10];
let k = 3;
let n = 4;
// let arr = [2, 6, 3, 4, 7, 2, 10, 3, 2, 1];
// let k = 5;
// let n = 10;
const getMinDiff = (arr, n, k) => {
  //code here
  arr.sort((a, b) => a - b);
  let minDiff = arr[n - 1] - arr[0];
  let minArr = [];
  const bruteForce = (arr, i = 0) => {
    if (i == n) {
      // arr.sort((a, b) => a - b);
      console.log(arr);
      let minHeight = Math.min(...arr);
      let maxHeight = Math.max(...arr);
      let diff = maxHeight - minHeight;
      // console.log("diff: ", diff);
      // minDiff = Math.min(minDiff, diff);
      if (minDiff > diff) {
        minDiff = diff;
        minArr = [...arr];
      }
      return;
    }
    let original = arr[i];
    arr[i] = original + k;
    bruteForce(arr, i + 1);
    arr[i] = original - k;
    bruteForce(arr, i + 1);

    arr[i] = original;
  };
  bruteForce(arr, 0);
  return { minArr, minDiff };
};
// let ans = getMinDiff(arr, n, k);

// console.log("ans: ", ans);

// ******************************************** //
// optimised
// ******************************************** //

const getMinDiff1 = (arr, n, k) => {
  // Sort the array
  arr.sort((a, b) => a - b);

  // Initialize the difference between the maximum and minimum elements
  let minDiff = arr[n - 1] - arr[0];

  // Calculate the potential new minimum and maximum
  let smallest = arr[0] + k;
  let largest = arr[n - 1] - k;

  // Iterate through the sorted array and compute the new min and max heights
  for (let i = 0; i < n - 1; i++) {
    let minHeight = Math.min(smallest, arr[i + 1] - k);
    let maxHeight = Math.max(largest, arr[i] + k);
    console.log("minh: ", minHeight, "maxh: ", maxHeight);
    minDiff = Math.min(minDiff, maxHeight - minHeight);
  }

  return minDiff;
};
console.log(getMinDiff1(arr, n, k));
