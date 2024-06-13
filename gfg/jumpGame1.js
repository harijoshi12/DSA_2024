// Q- find if is is possible to reach the last index or not

const arr = [1, 3, 0, 2, 0, 1];
n = arr.length;
// brute force
const canReach = (arr, n) => {
  const helper = (idx = 0) => {
    // console.log("idx: ", idx)
    if (idx == n - 1) return true;
    if (idx > n) return false;
    for (let i = 1; i <= arr[idx]; i++) {
      if (helper(idx + i)) return true;
    }
    return false;
  };
  return helper(0) ? 1 : 0;
};

// optimiesd gredy approach T- O(n)
const canReach1 = (arr, n) => {
  //your code here
  let finalIdx = n - 1;
  for (let i = n - 2; i >= 0; i--) {
    if (finalIdx <= i + arr[i]) {
      finalIdx = i;
    }
  }
  return finalIdx == 0 ? 1 : 0;
};

console.log(canReach());
