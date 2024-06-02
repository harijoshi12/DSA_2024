// A substring is a contiguous portion of a string.

let str = "abc";

// 'a'
// 'ab'
// 'abc'
// 'b'
// 'bc'
// 'c'

// total - n(n+1)/2

const printSubStr = (str) => {
  let substr = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      substr.push(str.slice(i, j + 1));
    }
  }
  return substr;
};
console.log(printSubStr(str));
