var longestCommonPrefix = function (strs) {
  let lcp = strs[0];
  for (word of strs) {
    let temp = "";
    // console.log("lcp = ",lcp)
    for (let j = 0; j < word.length; j++) {
      let char = word[j];
      if (char != lcp[j]) {
        break;
      } else {
        temp = temp + char;
      }
    }
    lcp = temp;
  }
  return lcp;
};
