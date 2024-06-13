// const fourSum = (arr, n, k) => {
//   // code here
//   let ans = [];
//   arr.sort((a, b) => a - b);
//   let set = new Set();
//   const helper = (idx = 0, sum = 0, curr = []) => {
//     if (idx > n) return;
//     // console.log("idx: ", idx, " sum: ", sum, " curr: ", curr);
//     if (curr.length > 4 || sum > k) return;
//     if (sum == k && curr.length == 4) {
//       console.log("curr: ", curr);
//       let currJson = JSON.stringify(curr);
//       if (!set.has(currJson)) {
//         set.add(currJson);
//         ans.push([...curr]);
//       }
//       return;
//     }
//     helper(idx + 1, sum + arr[idx], [...curr, arr[idx]]);
//     helper(idx + 1, sum, curr);
//   };
//   helper(0, 0, []);
//   // console.log("ans: ", ans)
//   return ans;
// };
// // let arr = [1, 2, 3, 4];
// let arr = [0, 0, 2, 1, 1];
// let n = arr.length;
// let k = 3;
// // console.log(fourSum(arr, n, k));

// const fourSum2 = (arr, n, k) => {
//   // code here
//   let ans = [];
//   arr.sort((a, b) => a - b);
//   let set = new Set();
//   const helper = (idx = 0, sum = 0, curr = []) => {
//     if (idx > n) return;
//     if (curr.length > 4 || sum > k) return;
//     if (sum == k && curr.length == 4) {
//       // console.log("curr: ", curr);
//       ans.push([...curr]);
//       return;
//     }
//     for (let i = idx; i < n; i++) {
//       curr.push(arr[i]);
//       if (i > idx && arr[i] === arr[i - 1]) {
//         console.log("i: ", i, ", idx: ", idx,", arr[i-1]: ", arr[i-1], ", arr[i]: ", arr[i], ", curr: ", curr);
//         continue;
//       }
//       console.log("i: ", i, "idx: ", idx, " sum: ", sum, " curr: ", curr);
//       helper(i + 1, sum + arr[i], curr);
//       curr.pop();
//     }
//   };
//   helper(0, 0, []);
//   // console.log("ans: ", ans)
//   return ans;
// };

// console.log(fourSum2(arr, n, k));

console.log(Number.MAX_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.MIN_VALUE);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.NEGATIVE_INFINITY);
