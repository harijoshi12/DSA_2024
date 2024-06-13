let arr = [1, 2, 3, 4];
// let arr = [0, 0, 1, 2];

const subset1 = (arr) => {
  let ans = [];
  let n = arr.length;
  const helper = (idx = 0, curr = []) => {
    if (idx > n) return;
    if (idx === n) {
      ans.push([...curr]);
      return;
    }
    // exclude
    helper(idx + 1, curr);
    // include
    curr.push(arr[idx]);
    helper(idx + 1, curr);
    curr.pop();
  };
  helper(0, []);
  return ans;
};

console.log(subset1(arr));

const subset2 = (arr) => {
  let ans = [];
  let n = arr.length;
  let set = new Set();
  const helper = (idx = 0, curr = []) => {
    if (idx > n) return;
    if (idx === n) {
      let currStr = JSON.stringify(curr);
      if (!set.has(currStr)) {
        set.add(currStr);
        ans.push([...curr]);
      }
      return;
    }
    // exclude
    helper(idx + 1, curr);
    // include
    curr.push(arr[idx]);
    helper(idx + 1, curr);
    curr.pop();
  };
  console.log("set : ", set);
  helper(0, []);
  return ans;
};
// console.log(subset2(arr));
