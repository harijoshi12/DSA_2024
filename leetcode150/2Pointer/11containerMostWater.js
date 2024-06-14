// optimised T-O(n)
var maxArea = function (height) {
  let l = 0,
    r = height.length - 1;
  let maxArea = 0;
  while (l < r) {
    let area = Math.min(height[l], height[r]) * (r - l);
    maxArea = Math.max(maxArea, area);
    if (height[l] > height[r]) {
      r--;
    } else {
      l++;
    }
  }
  return maxArea;
};

// brute force solution, T-O(n^2)
var maxArea = function (height) {
  let n = height.length;
  const currMaxArea = (arr, start) => {
    let maxArea = 0;
    let currH = arr[start];
    for (let i = start + 1; i < n; i++) {
      let area = Math.min(currH, arr[i]) * (i - start);
      maxArea = Math.max(maxArea, area);
    }
    return maxArea;
  };

  const findMaxArea = (idx = 0, arr) => {
    if (idx >= n - 1) return 0;
    let currArea = currMaxArea(arr, idx);
    // console.log("curAr: ", currArea, ", curIdx ", idx);
    return Math.max(currArea, findMaxArea(idx + 1, arr));
  };

  return findMaxArea(0, height);
};
