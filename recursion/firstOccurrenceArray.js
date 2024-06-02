let arr = [2, 4, 6, 7, 3, 20, 4, 7, 8, 2, 4];
const foa = (arr, idx = 0, target) => {
  if (arr.length == idx) return "not found";
  if (arr[idx] == target) return idx;
  return foa(arr, idx + 1, target);
};
console.log(foa(arr, 0, 4));
