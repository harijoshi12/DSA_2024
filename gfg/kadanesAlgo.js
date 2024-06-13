// Optimised
const maxSubarraySum = (arr, n) => {
  let maxSum = arr[0],
    sum = arr[0];
  for (let i = 1; i < n; i++) {
    // if(sum + arr[i]<arr[i]){
    //     sum = arr[i]
    // }else{
    //     sum +=arr[i]
    // }
    sum = Math.max(arr[i], sum + arr[i]);
    maxSum = Math.max(maxSum, sum);
  }
  return maxSum;
};

// brute force
const maxSubarraySum1 = (arr, n) => {
  let maxSum = -Infinity;
  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      sum += arr[j];
      maxSum = Math.max(maxSum, sum);
    }
  }
  return maxSum;
};
