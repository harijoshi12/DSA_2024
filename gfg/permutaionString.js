const find_permutation = (S) => {
  //code here
  let ans = new Set();
  let str = S.split("").sort().join("");
  const helper = (str, curr = "") => {
    if (str.length == 0) {
      ans.add(curr);
      return;
    }
    for (let i = 0; i < str.length; i++) {
      helper([...str.slice(0, i), ...str.slice(i + 1)], curr + str[i]);
    }
  };
  helper(str, "");
  return Array.from(ans);
};
console.log(find_permutation("ABSGB"));
