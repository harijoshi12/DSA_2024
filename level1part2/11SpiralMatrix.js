let str = "aacccddbbbbbbee";

const sol1 = () => {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    obj[str[i]] = (obj[str[i]] || 0) + 1;
  }
  let max = 0;
  let char = "";
  for (const el of Object.keys(obj)) {
    // max = Math.max(obj[el],max)
    console.log(obj[el]);
    if (obj[el] > max) {
      max = obj[el];
      char = el;
    }
  }
  return [char, max];
};
console.log(sol1());
