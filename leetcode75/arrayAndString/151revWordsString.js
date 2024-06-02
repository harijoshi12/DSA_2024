var reverseWords = function (s) {
  let words = s.split(" ").filter((word) => word != "");
  return words.reverse().join(" ");
};
