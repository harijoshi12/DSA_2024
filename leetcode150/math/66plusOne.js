var plusOne = function (digits) {
  let n = digits.length - 1;
  if (digits[n] < 9) {
    digits[n]++;
  } else {
    let i = n;
    while (i >= 0 && digits[i] == 9) {
      digits[i--] = 0;
    }
    // console.log("i",i)
    if (i == -1) {
      digits.unshift(1);
    } else {
      digits[i]++;
    }
  }
  return digits;
};
