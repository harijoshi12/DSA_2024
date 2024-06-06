let arr = [
  [5, 3],
  [6, 2],
  [4, 3],
];

var combine = function (n, k, idx = 1, curr = [], ans = []) {
  if (idx > n) {
    if (curr.length == k) {
      ans.push([...curr]);
    }
    return;
  }
  combine(n, k, idx + 1, [...curr, idx], ans);
  combine(n, k, idx + 1, curr, ans);
  return ans;
};

for (let [n, k] of arr) {
  console.log(`for n:${n}, k:${k}: `, combine(n, k));
}
