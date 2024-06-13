// bruteforce
let arr = [2, 4, 6, 3, 2, 4, 6, 6, 2, 6, 3, 3, 3, 3, 3];
let n = arr.length;

// Boyer-Moore Voting Algorithm, T-O(n), S-(1)
const sol2 = (arr, size) => {
  let candidate = null;
  let count = 0;

  // Candidate selection phase
  for (let num of arr) {
    if (count === 0) {
      candidate = num;
    }
    count += num === candidate ? 1 : -1;
  }

  // Validation phase
  count = 0;
  for (let num of arr) {
    if (num === candidate) {
      count++;
    }
  }

  return count > arr.length / 2 ? candidate : -1;
};
console.log(sol2(arr, n));

// T-O(n), S-O(n)
const sol1 = (a, size) => {
  let freq = {};
  for (let num of a) {
    freq[num] = (freq[num] || 0) + 1;
  }
  let maxFreq = 0;
  let maxEl = a[0];
  for (let num in freq) {
    if (maxFreq < freq[num]) {
      maxFreq = freq[num];
      maxEl = num;
    }
  }
  return maxFreq > size / 2 ? maxEl : -1;
};
// console.log(sol1(arr, n));
