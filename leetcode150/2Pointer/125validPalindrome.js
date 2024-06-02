var isPalindrome = function (s) {
  let clean = s.toLowerCase().replaceAll(/[^a-z0-9]+/g, "");
  // console.log(clean)
  let l = 0,
    r = clean.length - 1;
  while (l < r) {
    // console.log('l:',clean[l],', r:',clean[r])
    if (clean[l] != clean[r]) {
      return false;
    }
    l++;
    r--;
  }
  return true;
};
