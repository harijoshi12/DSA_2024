// Bitwise Operators in js

// 1- AND (&)
let a1 = 5; // 0101 in binary
let b1 = 3; // 0011 in binary
let result1 = a1 & b1; // 0001 in binary, which is 1
console.log("and: ", result1);

// 2- OR(|)
let a2 = 5; // 0101 in binary
let b2 = 3; // 0011 in binary
let result2 = a2 | b2; // 0111 in binary, which is 7

// 3-XOR(^)
let a3 = 5; // 0101 in binary
let b3 = 3; // 0011 in binary
let result3 = a3 ^ b3; // 0110 in binary, which is 6
console.log("xor: ", result3);

// 4-NOT(~)
let a4 = 5; // 0101 in binary
let result4 = ~a4; // 1010 in binary (two's complement), which is -6
console.log("not: ", result4);

// 5-Left Shit(<<)
let a5 = 5; // 0101 in binary
let result5 = a5 << 1; // 1010 in binary, which is 10
console.log("left shift: ", result5);

// 6-Right Shift(>>)
let a6 = 5; // 0101 in binary
let result6 = a6 >> 1; // 0010 in binary, which is 2
console.log("right shift: ", result6);

// 7=Unsigned Right Shift(>>>)
let a7 = -5; // in binary (two's complement)
let result7 = a7 >>> 1; // shifts in zero from the left
console.log("unsigned right shift: ", result7);
