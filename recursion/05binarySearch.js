let arr = [2, 5, 9, 10, 29, 48, 156, 204];

const sol1 = (arr, t) => {
  let s = 0,
    e = arr.length - 1;
  while (s <= e) {
    let m = parseInt((s + e) / 2);
    if (arr[m] == t) {
      return m;
    } else if (t < arr[m]) {
      e = m - 1;
    } else {
      s = m + 1;
    }
  }
  return "not found";
};
console.log(sol1(arr, 48));

const sol2 = (arr, t) => {
  const search = (s, e) => {
    let m = parseInt((s + e) / 2);
    if (arr[m] == t) {
      return m;
    } else if (t < arr[m]) {
      return search(s, m - 1);
    } else {
      return search(m + 1, e);
    }
  };
  return search(0, arr.length - 1);
};

console.log(sol2(arr, 204));
