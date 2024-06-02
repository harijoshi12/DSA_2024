//  Say that you are a traveler on a 2D grid. You begin in the top0left corder and your goal is to travel to the bottom-right cornre. YOu may only move down or right.

// In how many ways can You travel to the goal on a grid with dimensions m*n

//  T- O(2^(m+n)), S-O(m+n)
const gridTraveler1 = (m, n) => {
  if (n == 1 && m == 1) return 1;
  if (n == 0 || m == 0) return 0;
  return gridTraveler1(m - 1, n) + gridTraveler1(m, n - 1);
};

// console.log(gridTraveler1(15, 15));

//  T- O(m*n) S-O(m*n)
let obj = {};
const gridTraveler2 = (m, n, memo = {}) => {
  const key1 = `${m},${n}`;
  const key2 = `${n},${m}`;
  //  check memoization
  if (key1 in memo) return memo[key1];
  if (key2 in memo) return memo[key2];

  // base case
  if (n == 1 && m == 1) return 1;
  if (n == 0 || m == 0) return 0;
  // obj = memo;
  // console.log(memo);
  memo[key1] = gridTraveler2(m - 1, n, memo) + gridTraveler2(m, n - 1, memo);
  return memo[key1];
};
console.log("for 2");
console.log(gridTraveler2(500, 500));
// console.log(obj);
