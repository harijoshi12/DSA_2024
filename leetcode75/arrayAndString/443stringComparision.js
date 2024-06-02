var compress = function (chars) {
  let idx = 0,
    i = 0;
  while (i < chars.length) {
    let count = 1;
    while (i + 1 < chars.length && chars[i] == chars[i + 1]) {
      i++;
      count++;
    }
    chars[idx++] = chars[i];
    if (count > 1) {
      for (let char of count.toString()) {
        chars[idx++] = char;
      }
    }
    i++;
  }
  return idx;
};
