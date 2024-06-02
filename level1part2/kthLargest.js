// given an array of integers arr and an integer k, find the kth largest element

let arr = [1, 5, 6, 3, 7, 2, 3, 8, 9, 3, 1, 0, 7];

const sol1 = (k) => {
  let set = new Set(arr.sort());
  let narr = [...set];
  if (narr.length < k) return "wrond condition";
  return narr[narr.length - k];
};
console.log(sol1(3));
