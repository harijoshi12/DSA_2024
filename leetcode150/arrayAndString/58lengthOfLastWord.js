var lengthOfLastWord = function (s) {
  let clean = s.trim();
  let len = 0;
  let arr = clean.split(" ");
  return arr[arr.length - 1].length;
};
