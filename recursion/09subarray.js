// A subarray is a contiguous portion of an array

let arr = ["a", "b", "c"];

// ['a']
// ['a', 'b']
// ['a', 'b', 'c']
// ['b']
// ['b', 'c']
// ['c']

// toal = n(n+1)/2

const printSubarr = (arr) => {
  let subArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      subArr.push(arr.slice(i, j + 1));
    }
  }
  return subArr;
};
console.log(printSubarr(arr));
