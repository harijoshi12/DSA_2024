var isIsomorphic = function (s, t) {
  if (s.length != t.length) return false;
  const mapST = {};
  const mapTS = {};
  for (let i = 0; i < s.length; i++) {
    let charS = s[i];
    let charT = t[i];
    if (mapST[charS] !== undefined && mapST[charS] !== charT) {
      return false;
    }
    if (mapTS[charT] !== undefined && mapTS[charT] !== charS) {
      return false;
    }
    mapST[charS] = charT;
    mapTS[charT] = charS;
  }
  return true;
};
