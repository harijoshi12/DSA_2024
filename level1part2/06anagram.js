let s1 = "hari",
  s2 = "irha";

// time- O(nlog(n)) space- O(n)
const isAnagram1 = () => {
  if (s1.length != s2.length) {
    return false;
  }
  return s1.split("").sort().join("") == s2.split("").sort().join("");
};
// console.log(isAnagram1());

//  O(n) time complexity
const isAnagram2 = () => {
  if (s1.length != s2.length) return false;
  let charCount = {};
  for (const char of s1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  for (const char of s2) {
    if (!charCount[char]) {
      return false;
    } else {
      charCount[char]--;
    }
  }
  for (const count of Object.values(charCount)) {
    if (count != 0) return false;
  }
  return true;
};
console.log(isAnagram2());
