// four way swap
var rotate = function (matrix) {
  let n = matrix.length;
  for (let layer = 0; layer < Math.floor(n / 2); layer++) {
    let first = layer;
    let last = n - 1 - layer;
    for (let i = first; i < last; i++) {
      let offset = i - first;

      // Save the top element
      let top = matrix[first][i];

      // Move left element to top
      matrix[first][i] = matrix[last - offset][first];

      // Move bottom element to left
      matrix[last - offset][first] = matrix[last][last - offset];

      // Move right element to bottom
      matrix[last][last - offset] = matrix[i][last];

      // Move top element to right
      matrix[i][last] = top;
    }
  }
};

// without using extra arrray
var rotate = function (matrix) {
  let n = matrix.length;
  // transpose of matrix
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  // reverse each row
  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }
};

// using extra array
var rotate = function (matrix) {
  let n = matrix.length;
  let arr = Array.from({ length: n }, () => Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    let lIdx = n - 1 - i;
    for (let j = 0; j < n; j++) {
      arr[j][lIdx] = matrix[i][j];
    }
  }
  // console.log(arr)
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      matrix[i][j] = arr[i][j];
    }
  }
};
