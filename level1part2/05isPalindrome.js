const str = "hari is a si irah";

// using inbuilt methods
const sol1 = () => {
  return str.split("").reverse().join("") === str;
};

// using 2 pointer
const sol2 = () => {
  let l = 0,
    r = str.length - 1;
  while (l < r) {
    if (str[l] != str[r]) {
      return false;
    } else {
      l++;
      r--;
    }
  }
  return true;
};

// first cleanig nonalphanumeric
const sol3 = () => {
  let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleanStr === cleanStr.split("").reverse().join("");
};

// useing every
const sol4 = () => {
  let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleanStr
    .split("")
    .every((char, idx) => char === cleanStr[cleanStr.length - 1 - idx]);
};

console.log(sol4());
