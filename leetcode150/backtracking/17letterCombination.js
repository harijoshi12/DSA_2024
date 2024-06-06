let arr = ["", "5", "23", "45", "257"];
const sol1 = (digits) => {
  if (digits.length == 0) return [];
  const phoneMap = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"],
  };
  if (digits.length == 1) {
    return phoneMap[digits[0]];
  }

  let ans = sol1(digits.slice(1));
  let newAns = [];
  for (let letter of phoneMap[digits[0]]) {
    for (let ch of ans) {
      newAns.push(ch + letter);
    }
  }
  // console.log("ans = ", ans);
  return newAns;
};

for (let digits of arr) {
  console.log(`${digits}: `, sol1(digits));
}
