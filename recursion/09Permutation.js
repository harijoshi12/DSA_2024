let str = "abc";
let arr = ["d", "e", "f"];

let ans = [];
const printPermute1 = (str, curr = "") => {
  if (str.length == 0) {
    console.log(curr);
    ans.push(curr);
    return;
  }
  for (let i = 0; i < str.length; i++) {
    printPermute1(str.substring(0, i) + str.substring(i + 1), curr + str[i]);
  }
  return ans;
};
console.log(printPermute1(str));
