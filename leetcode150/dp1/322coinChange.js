// 322. Coin Change
let coins = [1, 2, 5];
let amount = 11;

// sol 1 tabulation

// sol 2 memoisation

// var coinChange = function (coins, amount) {
//   const memo = {};
//   const helper = (amount, i = 0) => {
//     let key = `${amount}-${i}`;
//     if (amount < 0 || i >= coins.length) return Infinity;
//     if (amount == 0) return 0;
//     if (key in memo) return memo[key];

//     let include = helper(amount - coins[i], i, memo);
//     if (include != Infinity) include += 1;
//     let exclude = helper(amount, i + 1, memo);

//     let res = Math.min(include, exclude);
//     memo[key] = res;
//     return res;
//   };
//   let res = helper(amount, 0);
//   return res == Infinity ? -1 : res;
// };
// let res = coinChange(coins, amount);

// Medium
// Topics
// Companies
// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

// Example 1:

// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1
// Example 2:

// Input: coins = [2], amount = 3
// Output: -1
// Example 3:

// Input: coins = [1], amount = 0
// Output: 0

// Constraints:

// 1 <= coins.length <= 12
// 1 <= coins[i] <= 231 - 1
// 0 <= amount <= 104
