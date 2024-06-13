// Q- total number of ways to reach the last index

let arr = [2, 3, 1, 0, 4];
// let arr = [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9];
n = arr.length;
const minJumps = (arr, n) => {
  const helper = (idx = 0) => {
    // console.log("idx: ", idx)
    if (idx == n - 1) return 1;
    if (idx >= n) return 0;
    let total = 0;
    for (let i = 1; i <= arr[idx]; i++) {
      total += helper(idx + i);
    }
    return total;
  };
  return helper(0);
};

let res = minJumps(arr, n);
console.log(res);
