var reverseBits = function (n) {
  let str = "";
  let num = n;
  while (num) {
    str += num % 2;
    num = parseInt(num / 2);
  }
  let len = 32 - str.length;
  while (str.length < 32) {
    str += "0";
  }
  console.log("n:", n, ", b:", str);
  // let revNum = parseInt(str,2)
  let revNum = 0;
  for (let i = 0; i < str.length; i++) {
    revNum += parseInt(str[i]) * Math.pow(2, 31 - i);
  }
  console.log("rev:", revNum);
  return revNum;
  // return `${revNum} ${str} print`
};
