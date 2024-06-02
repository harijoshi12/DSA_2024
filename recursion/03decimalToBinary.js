let n1 = 65, // 0b1000001
  n2 = 100, // 0b1100100
  n3 = 30, // 0b11110
  n4 = 500, // 0b111110100
  n5 = 20045, // 0b100111001001101
  n6 = 299863; // 0b1001001001101010111

// const conv = (num) => {
//   let rem = "";
//   while (num) {
//     rem = (num % 2).toString() + rem;
//     num = Math.floor(num / 2);
//   }
//   return rem;
// };

const conv = (num) => {
  if (num == 0) return "";
  return conv(Math.floor(num / 2)) + (num % 2).toString();
};

console.log(conv(n1));
console.log(conv(n2));
console.log(conv(n3));
console.log(conv(n4));
console.log(conv(n5));
console.log(conv(n6));
