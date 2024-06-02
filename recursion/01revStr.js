// string reverse

// with minor err - str is global scoped
let str = "hari is a good boy";
const rev1 = () => {
  if (str.length == 0) return "";
  return str[0] + rev1(str.slice(1));
};
// console.log(rev1());

// with error - str[o] is prefixed
const rev2 = (str) => {
  if (str.length == 0) return "";
  return str[0] + rev2(str.slice(1));
};
console.log(rev2(str));

// final solution
const rev3 = (str) => {
  if (str.length == 1) return str[0];
  // if (str.length == 0) return "";
  return rev3(str.slice(1)) + str[0];
};
console.log(rev3(str));
