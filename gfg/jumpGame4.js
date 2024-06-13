// Q- find the minimum number of jumps to reach the last index
// let arr = [2, 3, 1, 1, 4];
let arr = [1, 3, 5, 8, 9, 7, 6, 8, 9];
n = arr.length;
const minJump = (arr, n) => {
  const helper = (idx = 0) => {
    if (idx == n - 1) return 0;
    for (let i = 1; i < arr[idx]; i++) {
      helper(idx + i);
    }
  };
  return helper(0);
};
console.log(minJump());
