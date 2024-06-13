// return the min number of coins whoes sum is given amount

let coins = [1, 2, 3];
let amount = 5;

const printAllPaths = (coins, amount) => {
  let ans = [];
  const sol = (target, curr = []) => {
    if (target < 0) return;
    if (target == 0) {
      ans.push([...curr]);
      return;
    }
    for (let i = 0; i < coins.length; i++) {
      curr.push(coins[i]);
      sol(target - coins[i], curr);
      curr.pop();
    }
  };
  sol(amount, []);
  return ans;
};
// console.log("print all paths: ", printAllPaths(coins, amount));

// const printUniquePaths = (coins, amount) => {
//   let ans = [];
//   const sol = (i = 0, target, curr = []) => {
//     if (target < 0) return;
//     if (target == 0) {
//       ans.push([...curr]);
//       return;
//     }
//     if (i >= coins.length) return;

//     curr.push(coins[i]);
//     sol(i, target - coins[i], curr);
//     curr.pop();
//     sol(i + 1, target, curr);
//   };
//   sol(0, amount, []);
//   return ans;
// };
const printUniquePaths1 = (coins, amount) => {
  coins.sort((a, b) => a - b); // Sorting ensures we avoid duplicates
  let ans = [];
  const sol = (target, curr = [], start = 0) => {
    if (target < 0) return;
    if (target == 0) {
      ans.push([...curr]);
      return;
    }
    for (let i = start; i < coins.length; i++) {
      curr.push(coins[i]);
      sol(target - coins[i], curr, i); // Allow the same coin to be used
      curr.pop();
    }
  };
  sol(amount, []);
  return ans;
};
console.log("print unique paths: ", printUniquePaths1(coins, amount));

const countUniquePaths = (coins, amount) => {
  const sol = (sum, i = 0, memo = {}) => {
    let key = `${sum}-${i}`;
    if (i >= coins.length) return 0;
    if (sum < 0) return 0;
    if (sum == 0) {
      return 1;
    }
    if (key in memo) return memo[key];
    let include = sol(sum - coins[i], i, memo);
    let exclude = sol(sum, i + 1, memo);
    memo[key] = include + exclude;
    return memo[key];
  };
  return sol(amount, 0);
};

console.log("count unique: ", countUniquePaths(coins, amount));

const minCoins = (coins, amount, i = 0) => {
  if (i >= coins.length) return Infinity;
  if (amount < 0) return Infinity;
  if (amount == 0) {
    return 0;
  }
  let include = minCoins(coins, amount - coins[i], i);
  let exclude = minCoins(coins, amount, i + 1);
  let res = Math.min(include, exclude) + 1;
  return res == Infinity ? -1 : res;
};
// console.log("min coins: ", minCoins(coins, amount));
