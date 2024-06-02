let str = "harid";
let num = -12345;
const sol1 = () => {
  return str.split("").reverse().join("");
};
const sol2 = () => {
  let rev = "";
  for (const char of str) {
    rev = char + rev;
  }
  return rev;
};

// for numbers without converting to string
const sol3 = () => {
  let rev = 0;
  while (num) {
    let ld = num % 10;
    rev = rev * 10 + ld;
    num = parseInt(num / 10);
  }
  return rev;
};

//  converting num to string
const sol4 = () => {
  let revNum = num.toString().split("").reverse().join("");
  // console.log(revNum);
  return parseInt(revNum) * Math.sign(num);
};
console.log(sol4());
