const arr = [1, 2, 3];
// const arr = [0, 0, 2, 1, 1];
const subset1 = (arr) => {
  let ans = [];
  let n = arr.length;
  console.log(`helper(${0},[${0}])`);
  const helper = (idx = 0, curr = []) => {
    if (idx > n) return;
    ans.push([...curr]);
    for (let i = idx; i < n; i++) {
      curr.push(arr[i]);
      console.log(`helper(${i + 1},[${curr}])`);
      helper(i + 1, curr);
      curr.pop();
    }
  };
  helper(0, []);
  return ans;
};
console.log(subset1(arr));

const subset2 = (arr) => {
  let ans = [];
  let n = arr.length;
  const helper = (idx = 0, curr = []) => {
    if (idx > n) return;
    ans.push([...curr]);

    for (let i = idx; i < n; i++) {
      curr.push(arr[i]);
      helper(i + 1, curr);
      curr.pop();
    }
  };
  helper(0, []);
  return ans;
};
// console.log(subset2(arr));
