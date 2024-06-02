// given a sorted array of integers arr and and integer target, find the index of the first and last position of target in arr. If target can't be found in arr, return [-1,-1]

let target = 7;

let arr = [1, 5, 6, 3, 7, 2, 3, 8, 9, 3, 1, 0, 7];

const sol1 = () => {
  let fIdx = 0,
    lIdx = 0,
    isFirst = true;
  for (let i = 0; i < arr.length; i++) {
    if (isFirst && arr[i] == target) {
      fIdx = i;
      isFirst = false;
    }
    if (arr[i] == target) {
      lIdx = i;
    }
  }
  if (isFirst) return [-1, -1];
  return [fIdx, lIdx];
};
// console.log(sol1());
const sol2 = () => {
  let fIdx = -1,
    lIdx = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      fIdx = i;
      break;
    }
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] == target) {
      lIdx = i;
      break;
    }
  }
  return [fIdx, lIdx];
};
// console.log(sol2());

// if arr is sorted
arr.sort();
const sol3 = () => {
  let i = 0,
    isFirst = true,
    fIdx = -1,
    lIdx = -1;
  while (arr[i] <= target) {
    // console.log(arr[i] + ", ");
    if (isFirst && arr[i] == target) {
      fIdx = i;
      isFirst = false;
    }
    if (arr[i] == target) {
      lIdx = i;
    }
    i++;
  }
  return [fIdx, lIdx];
};
// console.log(sol3());

target = 7;
const sol4 = () => {
  console.log(arr);
  const findFIdx = () => {
    let l = 0,
      h = arr.length - 1,
      res = -1;
    while (l <= h) {
      let mid = Math.floor((l + h) / 2);
      if (arr[mid] === target) {
        res = mid;
        h = mid - 1;
      } else if (arr[mid] < target) {
        l = mid + 1;
      } else {
        h = mid - 1;
      }
    }
    return res;
  };
  const findLIdx = () => {
    let l = 0,
      h = arr.length - 1,
      res = -1;
    while (l <= h) {
      let mid = Math.floor((l + h) / 2);
      if (arr[mid] === target) {
        res = mid;
        l = mid + 1;
      } else if (arr[mid] < target) {
        l = mid + 1;
      } else {
        h = mid - 1;
      }
    }
    return res;
  };
  return [findFIdx(), findLIdx()];
};
console.log(sol4());
