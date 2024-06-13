// Q- print all possible ways to reach the last index

// let arr = [2, 3, 1, 1, 4];
let arr = [1, 3, 5, 8, 9, 7, 6, 8, 9];
n = arr.length;
const minJumps = (arr, n) => {
  let ans = [];
  const helper = (curr = [], idx = 0) => {
    if (idx == n - 1) {
      ans.push([...curr, idx]);
      return;
    }
    if (idx >= n) return;
    for (let i = 1; i <= arr[idx]; i++) {
      curr.push(idx);
      helper(curr, idx + i);
      curr.pop();
    }
  };
  helper([], 0);
  return ans;
};

let res = minJumps(arr, n);
console.log(res.length, " res: ", res);
