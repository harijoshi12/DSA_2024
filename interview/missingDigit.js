let tc = ["4-2=x", "3x+12=46", "4*x=40", "3*7=x"]; // ans 2, 4, 6, 21

const findDigit = (str) => {
  let x = 0;
  let temp = str.replace("x", x);
  let [lhs, rhs] = temp.split("=");
  let op = lhs.match(/[\+\-\*/]/)[0];

  while (eval(lhs) !== eval(rhs)) {
    // console.log("x: ", x, ", lhs:", lhs, ", rhs:", rhs);
    x++;
    temp = str.replace("x", x);
    [lhs, rhs] = temp.split("=");
  }
  return x;
};

// const findDigit = (str) => {
//   let [lhs, rhs] = str.split("=");
//   let op = lhs.match(/[\+\-\*/]/)[0];
//   let [A, B] = lhs.split(op);

//   // Helper function to evaluate the expression
//   const evaluate = (A, B, op, x) => {
//     let a = parseInt(A.replace("x", x));
//     let b = parseInt(B.replace("x", x));
//     let c = parseInt(rhs.replace("x", x));

//     switch (op) {
//       case "+":
//         return a + b === c;
//       case "-":
//         return a - b === c;
//       case "*":
//         return a * b === c;
//       case "/":
//         return a / b === c;
//       default:
//         return false;
//     }
//   };

//   for (let x = 0; x <= 9; x++) {
//     if (A.includes("x") && evaluate(A, B, op, x)) {
//       return x;
//     }
//     if (B.includes("x") && evaluate(A, B, op, x)) {
//       return x;
//     }
//     if (rhs.includes("x") && evaluate(A, B, op, x)) {
//       return x;
//     }
//   }

//   return -1; // If no digit found, which should not happen in this context
// };

// const findDigit = (str) => {
//   let ops = ["+", "-", "*"];
//   let [lhs, rhs] = str.split("=");
//   rhs = rhs.trim();
//   lhs = lhs.trim();
//   let op = lhs.match(/[\+\-\*/]/)[0];
//   let [A, B] = lhs.split(op);
//   A = A.trim();
//   B = B.trim();

//   const solveForX = (lhs, rhs) => {
//     if (A.includes("x")) {
//       A = A.length == 1 ? 1 : A.replace("x", "");
//       return eval(
//         `(${rhs} ${
//           op === "+" ? "-" : op === "-" ? "+" : op === "*" ? "/" : "*"
//         } ${B}) / ${A}`
//       );
//     } else {
//       B = B.length == 1 ? 1 : B.replace("x", "");
//       return eval(
//         `(${rhs} ${
//           op === "+" ? "-" : op === "-" ? "+" : op === "*" ? "/" : "*"
//         } ${A}) / ${B}`
//       );
//     }
//   };

//   if (lhs.includes("x")) {
//     return solveForX(lhs, rhs);
//   } else {
//     rhs = rhs.replace("x", "");
//     rhs = rhs === "" ? "1" : rhs;
//     return eval(`(${A}${op}${B})/${rhs}`);
//   }
// };

for (el of tc) {
  console.log(findDigit(el));
}
