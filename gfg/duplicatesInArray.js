const duplicates = (a, n) => {
  let map = {};
  for (let i = 0; i < n; i++) {
    map[a[i]] = (map[a[i]] || 0) + 1;
  }
  let ans = Object.keys(map).filter((el) => map[el] > 1);
  // console.log("ans: ", ans,", len : ", ans.length)
  return ans.length >= 1 ? ans : [-1];
};
