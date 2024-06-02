var addBinary = function (a, b) {
  let ans = "";
  let carry = 0;
  let i = a.length - 1;
  let j = b.length - 1;
  while (i >= 0 || j >= 0) {
    let sum = carry;
    if (i >= 0) sum += a[i--] - "0";
    if (j >= 0) sum += b[j--] - "0";
    ans = (sum % 2) + ans;
    carry = Math.floor(sum / 2);
  }
  if (carry > 0) {
    ans = carry + ans;
  }
  return ans;
};
