let arr = [1, 2, 3, 4, 5];
let d = 2;
const rotateArr = (arr, d, n) => {
  const revArr = (arr, s, e) => {
    while (s < e) {
      [arr[s], arr[e]] = [arr[e], arr[s]];
      s++;
      e--;
    }
  };
  d = d % n;
  revArr(arr, 0, n - 1);
  revArr(arr, 0, n - 1 - d);
  revArr(arr, n - d, n - 1);
  // console.log(arr)
  return arr;
};
console.log(rotateArr(arr, d, arr.length));
