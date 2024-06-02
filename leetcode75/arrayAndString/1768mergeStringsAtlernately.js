var mergeAlternately = function (word1, word2) {
  let str = "";
  let i = 0,
    j = 0;
  while (i < word1.length && j < word2.length) {
    str += word1[i++];
    str += word2[j++];
  }
  if (i < word1.length) {
    str = str + word1.slice(i);
  }
  if (j < word2.length) {
    str = str + word2.slice(j);
  }
  return str;
};
