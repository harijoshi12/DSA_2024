let arr = [2, 4, 6, 7, 3, 20, 4, 7, 8, 2, 4];
const loa = (arr, idx, target) => {
  if (idx == 0) return "not found";
  if (arr[idx] == target) return idx;
  return loa(arr, idx - 1, target);
};
console.log(loa(arr, arr.length - 1, 7));
