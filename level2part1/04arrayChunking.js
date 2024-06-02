// given an array and chunk size, divide the array into many subarrry of k length

let arr = [1, 3, 4, 3, 6];
let k = 2;
let ans = [];
const sol1 = () => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      // console.log(i, ", ", j);
      if (j - i == k - 1) {
        console.log(arr.slice(i, j + 1));
        ans.push(arr.slice(i, j + 1));
      }
    }
  }
};
sol1();
console.log(ans);
