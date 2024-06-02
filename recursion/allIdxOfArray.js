let arr = [2, 4, 6, 7, 3, 20, 4, 7, 8, 2, 7, 4];

// const findAll = (arr, target, idx = 0) => {
//   if (idx == arr.length) return [];
//   if (arr[idx] == target) {
//     return [idx, ...findAll(arr, target, idx + 1)];
//   } else {
//     return findAll(arr, target, idx + 1);
//   }
// };

const findAll = (arr, target, idx = 0, ans = []) => {
  if (idx == arr.length) return ans;
  if (arr[idx] == target) {
    ans.push(idx);
  }
  return findAll(arr, target, idx + 1, ans);
};
console.log(findAll(arr, 7));
