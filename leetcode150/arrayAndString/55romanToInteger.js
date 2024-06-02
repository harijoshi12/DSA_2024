var romanToInt = function (s) {
  let map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let n = s.length;
  let num = map[s[n - 1]];
  for (let i = s.length - 2; i >= 0; i--) {
    let char = s[i];
    if (map[char] >= map[s[i + 1]]) {
      num += map[char];
    } else {
      num -= map[char];
    }
  }
  return num;
};
