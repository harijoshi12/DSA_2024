// Definition: Any combination of elements from a set, regardless of order

let arr = ["a", "b", "c"];

// []
// ['c']
// ['b']
// ['b', 'c']
// ['a']
// ['a', 'c']
// ['a', 'b']
// ['a', 'b', 'c']

const findSubset1 = (arr, idx = 0, ans = [], curr = []) => {
  if (idx == arr.length) {
    ans.push(curr);
    return;
  }
  findSubset1(arr, idx + 1, ans, [...curr, arr[idx]]);
  findSubset1(arr, idx + 1, ans, curr);
  return ans;
};
console.log("sol1: ", findSubset1(arr));

const findSubset2 = (arr, idx = 0, ans = [], curr = []) => {
  // console.log("ans :", ans);
  if (idx == arr.length) {
    ans.push([...curr]);
    return;
  }
  curr.push(arr[idx]);
  findSubset2(arr, idx + 1, ans, curr);
  curr.pop();
  findSubset2(arr, idx + 1, ans, curr);
  return ans;
};
console.log("sol 2 = ", findSubset2(arr));
