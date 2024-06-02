// print natural numbers

const print = (n) => {
  if (n == 0) return;
  console.log(n);
  print(n - 1);
  console.log(n);
};
print(6);

//  pow x^n ex - 4^3

const pow = (x, n) => {
  if (n == 0) return 1;
  return x * pow(x, n - 1);
};
console.log(pow(4, 3));

// a recursion is just a function calling itself with 