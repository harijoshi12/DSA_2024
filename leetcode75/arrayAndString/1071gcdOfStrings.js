var gcdOfStrings = function (str1, str2) {
  let gcd = "";
  const canForm = (gcd, str) => {
    let temp = gcd;
    let repeatTimes = str.length / gcd.length;
    // console.log("before rT  = ", repeatTimes)
    // console.log("before str  = ", str)
    // console.log("before  = ", temp)
    for (let i = 0; i < repeatTimes - 1; i++) {
      gcd += temp;
    }
    // console.log("after  = ", gcd)
    return gcd == str;
  };
  let currGcd = "";
  for (let i = 0; i < Math.min(str1.length, str2.length); i++) {
    if (str1[i] == str2[i]) {
      gcd += str1[i];
      if (
        str1.length % gcd.length == 0 &&
        str2.length % gcd.length == 0 &&
        canForm(gcd, str1) &&
        canForm(gcd, str2)
      ) {
        currGcd = gcd;
      }
    } else {
      break;
    }
  }
  return currGcd || "";
};
