var canCompleteCircuit = function (gas, cost) {
  let totalGas = 0;
  let startIdx = 0;
  for (let i = 0; i < gas.length; i++) {
    totalGas = totalGas + gas[i] - cost[i];
    // console.log("i = ",i,", tg = ",totalGas,", stIdx = ", startIdx)
    if (totalGas < 0) {
      startIdx = i + 1;
      totalGas = 0;
    }
  }
  gas = [...gas.slice(startIdx), ...gas.slice(0, startIdx)];
  cost = [...cost.slice(startIdx), ...cost.slice(0, startIdx)];
  // console.log("new gas = ",gas)
  // console.log("new cost = ",cost)
  let ans = startIdx;
  startIdx = 0;
  totalGas = 0;
  for (let i = 0; i < gas.length; i++) {
    totalGas = totalGas + gas[i] - cost[i];
    // console.log("i = ",i,", tg = ",totalGas,", stIdx = ", startIdx)
    if (totalGas < 0) {
      startIdx = i + 1;
      totalGas = 0;
    }
  }
  if (startIdx != 0) {
    return -1;
  }
  return ans;
};
