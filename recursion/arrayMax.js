let arr = [5, 3, 6, 2, 7, 4, 10, 0];
const findMax = (arr, idx = 0, max = arr[0]) => {
  if (idx == arr.length) return max;
  max = Math.max(max, arr[idx]);
  return findMax(arr, idx + 1, max);
};
console.log(findMax(arr));
