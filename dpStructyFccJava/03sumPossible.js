// let arr = [5, 7, 4, 9, 11];
let arr = [2, 3, 5];
let target = 5;
// let n = arr.length
// let t = target
// T - O(n^t), S- O(t)

// const sumPossible1 = (arr, target, path = []) => {
//   console.log("target: ", target, ", path: ", path);
//   if (target < 0) return false;
//   if (target == 0) return true;
//   for (let i = 0; i < arr.length; i++) {
//     path.push(arr[i]);
//     if (sumPossible1(arr, target - arr[i], path)) {
//       return true;
//     }
//     path.pop();
//   }
//   return false;
// };

// console.log(sumPossible1(arr, target));

// Print all soluitons

// const sumPossible2 = (arr, target, path = [], curr = []) => {
//   // console.log("target: ", target, ", path: ", path);
//   if (target < 0) {
//     // console.log("\x1b[31mfailed\x1b[0m"); // Red color for failed
//     return;
//   }
//   if (target == 0) {
//     // console.log("\x1b[32msuccess\x1b[0m"); // Green color for success
//     path.push([...curr]);
//     return;
//   }
//   for (let i = 0; i < arr.length; i++) {
//     curr.push(arr[i]);
//     sumPossible2(arr, target - arr[i], path, curr);
//     curr.pop();
//   }
//   return path;
// };

// console.log(sumPossible2(arr, target));

// memoised: T- O(n*a) S-O(a)

// const sumPossible3 = (arr, target, path = [], curr = [], idx = 0) => {
//   console.log("target: ", target, ", path: ", curr);
//   const key = target;
//   if (target < 0) {
//     // console.log("\x1b[31mfailed\x1b[0m"); // Red color for failed
//     return;
//   }
//   if (target == 0) {
//     // console.log("\x1b[32msuccess\x1b[0m"); // Green color for success
//     path.push([...curr]);
//     return;
//   }

//   for (let i = idx; i < arr.length; i++) {
//     curr.push(arr[i]);
//     sumPossible3(arr, target - arr[i], path, curr, idx);
//     curr.pop();
//   }
//   return path;
// };

// console.log(sumPossible3(arr, target));

//
