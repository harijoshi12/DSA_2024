let arr = [
  [1, 0, 1, 1],
  [1, 1, 0, 1],
  [0, 1, 0, 0],
  [1, 1, 1, 1],
];
let n = arr.length;
let pathArr = new Array(n).fill().map(() => Array(arr[0].length).fill(0));

// rat maze -move T,R,D,L
const findPath = (arr, pathArr, x = 0, y = 0) => {
  if (
    x < 0 ||
    y < 0 ||
    x >= n ||
    y >= n ||
    arr[x][y] == 0 ||
    pathArr[x][y] == 1
  )
    return false;
  if (x == n - 1 && y == arr[0].length - 1) return true;
  pathArr[x][y] = 1;
  // Move Top
  if (findPath(arr, pathArr, x - 1, y)) return true;
  // Move Right
  if (findPath(arr, pathArr, x, y + 1)) return true;
  // Move Down
  if (findPath(arr, pathArr, x + 1, y)) return true;
  // Move Left
  if (findPath(arr, pathArr, x, y - 1)) return true;
  pathArr[x][y] = 0;
  return false;
};

if (findPath(arr, pathArr)) {
  console.log("Path found:");
  console.log(pathArr);
} else {
  console.log("No path found");
}
