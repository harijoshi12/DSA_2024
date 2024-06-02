let str = "aaccccccccccccddbbbbbbee";

const sol1 = () => {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    // obj[str[i]] = (obj[str[i]] || 0) + 1;
    if (obj.hasOwnProperty(str[i])) {
      obj[str[i]]++;
    } else {
      obj[str[i]] = 1;
    }
  }
  let max = 0;
  let char = "";
  // for (const el of Object.keys(obj)) {
  //   // max = Math.max(obj[el],max)
  //   if (obj[el] > max) {
  //     max = obj[el];
  //     char = el;
  //   }
  // }
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      if (obj[key] > max) {
        max = obj[key];
        char = key;
      }
    }
  }
  return [obj, char, max];
};
console.log(sol1());
// let obj = { name: "hari" };
// console.log(obj.name);
