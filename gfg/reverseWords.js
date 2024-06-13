const reverseWords = (s) => {
  // code here
  let words = s.split(".");
  return words.reverse().join(".").toString();
};
console.log(reverseWords("hari.is.a.good.boy"));
