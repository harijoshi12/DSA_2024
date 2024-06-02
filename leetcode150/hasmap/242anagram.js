var isAnagram = function (s, t) {
  let map = {};
  if (s.length != t.length) return false;
  for (let i = 0; i < s.length; i++) {
    map[s[i]] = (map[s[i]] || 0) + 1;
  }
  // console.log("before",map)
  for (let i = 0; i < t.length; i++) {
    if (t[i] in map) {
      map[t[i]]--;
    }
  }
  // console.log("after",map)
  return !Object.values(map).some((val) => val != 0);
};
