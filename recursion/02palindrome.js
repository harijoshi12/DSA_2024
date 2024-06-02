let str = "harirah";

const isPalin = (str) => {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  if ((str.length = 0 || str.length == 1)) return true;
  if (str[0] != str[str.length - 1]) return false;
  return isPalin(str.slice(1, -1));
};
console.log(isPalin(str));
