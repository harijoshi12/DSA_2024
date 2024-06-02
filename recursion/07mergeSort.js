let arr = [5, 8, 1, 100, 4, 201, 2, 0, 30, 20, 14];

const merge = (l, r) => {
  let f = 0,
    s = 0;
  let ans = [];
  while (f < l.length && s < r.length) {
    if (l[f] < r[s]) {
      ans.push(l[f++]);
    } else {
      ans.push(r[s++]);
    }
  }
  while (f < l.length) {
    ans.push(l[f++]);
  }
  while (s < r.length) {
    ans.push(r[s++]);
  }
  return ans;
};

// const mergeSort1 = (arr) => {
//   if (arr.length == 1) return arr;
//   let s = 0,
//     e = arr.length - 1;
//   console.log("s = ", s, ", e = ", e);
//   let m = parseInt((s + e) / 2);
//   // let m = parseInt(arr.length / 2);
//   let l = mergeSort1(arr.slice(0, m + 1));
//   let r = mergeSort1(arr.slice(m + 1));
//   return merge(l, r);
// };

const merge1 = (left, right) => {
  let ans = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      ans.push(left.shift());
    } else {
      ans.push(right.shift());
    }
  }
  while (left.length) {
    ans.push(left.shift());
  }
  while (right.length) {
    ans.push(right.shift());
  }
  return ans;
};
const mergeSort2 = (arr) => {
  if (arr.length <= 1) return arr;
  let m = parseInt(arr.length / 2);
  let l = mergeSort2(arr.slice(0, m));
  let r = mergeSort2(arr.slice(m));
  return merge1(l, r);
};

console.log(mergeSort2(arr));
// console.log(arr.slice(0, 1));

const test = (arr) => {
  let s = 0,
    e = arr.length - 1;
  console.log("s = ", s, ", e = ", e);
  if (arr.length == 0) return;
  let m = parseInt((s + e) / 2);
  test(arr.slice(0, m));
};

// test(arr);
