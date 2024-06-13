const isPalindrome = (str) => {
  //code here
  let left = 0,
    right = S.length - 1;
  while (left < right) {
    if (str[left] != str[right]) return 0;
    left++;
    right--;
  }
  return 1;
};
console.log(isPalindrome("hari"));
