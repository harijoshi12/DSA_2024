let wArr = [1, 3, 4, 5];
let vArr = [1, 4, 5, 7];

let w = 7;

// const maxProfit = (wArr, vArr, w, idx = 0) => {
//   if (w == 0 || idx == wArr.length) return 0;
//   if (wArr[idx] <= w) {
//     return Math.max(
//       maxProfit(wArr, vArr, w - wArr[idx], idx + 1) + vArr[idx],
//       maxProfit(wArr, vArr, w, idx + 1)
//     );
//   } else {
//     return maxProfit(wArr, vArr, w, idx + 1);
//   }
// };

// console.log(maxProfit(wArr, vArr, w));

// memoised (Top-Down Memoization for Knapsack)
const maxProfit = (wArr, vArr, w, idx = 0, memo = {}) => {
  let key = `${w},${idx}`;
  if (w == 0 || idx == wArr.length) return 0;
  if (key in memo) return memo[key];
  if (wArr[idx] <= w) {
    memo[key] = Math.max(
      maxProfit(wArr, vArr, w - wArr[idx], idx + 1, memo) + vArr[idx],
      maxProfit(wArr, vArr, w, idx + 1, memo)
    );
    return memo[key];
  } else {
    memo[key] = maxProfit(wArr, vArr, w, idx + 1, memo);
    return memo[key];
  }
};
console.log(maxProfit(wArr, vArr, w));

// Bottom-Up Tabulation for Knapsack
