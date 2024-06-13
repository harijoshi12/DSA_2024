// optimised
var nextPermutation = function (nums) {
  let n = nums.length;
  if (n <= 1) return;
  // find the longest prefix match
  let i = n - 2;
  while (i >= 0 && nums[i + 1] <= nums[i]) {
    i--;
  }
  if (i >= 0) {
    //  find the el just larger then nums[i]
    let j = n - 1;
    while (j >= 0 && nums[i] >= nums[j]) {
      j--;
    }
    // swap the ith and jth el
    [nums[j], nums[i]] = [nums[i], nums[j]];
  }
  // reverse the elements from i+1 to the end of the array
  let l = i + 1;
  let r = n - 1;
  while (l < r) {
    [nums[l], nums[r]] = [nums[r], nums[l]];
    l++;
    r--;
  }
};

// // brute force
// function nextPermutation(nums) {
//   // Generate all permutations
//   let permutations = [];

//   const generatePermutations = (arr, l, r) => {
//       if (l === r) {
//           permutations.push([...arr]);
//       } else {
//           for (let i = l; i <= r; i++) {
//               [arr[l], arr[i]] = [arr[i], arr[l]]; // Swap
//               generatePermutations(arr, l + 1, r);
//               [arr[l], arr[i]] = [arr[i], arr[l]]; // Swap back
//           }
//       }
//   };

//   generatePermutations(nums, 0, nums.length - 1);

//   // Sort permutations lexicographically
//   permutations.sort((a, b) => {
//       for (let i = 0; i < a.length; i++) {
//           if (a[i] !== b[i]) {
//               return a[i] - b[i];
//           }
//       }
//       return 0;
//   });

//   // Find the current permutation and get the next one
//   for (let i = 0; i < permutations.length; i++) {
//       let isSame = true;
//       for (let j = 0; j < nums.length; j++) {
//           if (permutations[i][j] !== nums[j]) {
//               isSame = false;
//               break;
//           }
//       }
//       if (isSame) {
//           let nextIndex = (i + 1) % permutations.length;
//           for (let k = 0; k < nums.length; k++) {
//               nums[k] = permutations[nextIndex][k];
//           }
//           return;
//       }
//   }
// }

// // Test cases
// let nums1 = [1, 2, 3];
// nextPermutation(nums1);
// console.log(nums1); // Output: [1, 3, 2]

// let nums2 = [3, 2, 1];
// nextPermutation(nums2);
// console.log(nums2); // Output: [1, 2, 3]

// let nums3 = [1, 1, 5];
// nextPermutation(nums3);
// console.log(nums3); // Output: [1, 5, 1]
