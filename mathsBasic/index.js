// print all digits of a number

//  t-O(logn)

let n = 2436783;
let num = n;
// let count = 0;

// while (num) {
//   let r = num % 10;
//   num = parseInt(num / 10);
//   console.log(r);
//   count++;
// }

// console.log("c = ", n == 0 ? 1 : Math.floor(Math.log10(Math.abs(n))) + 1);
// console.log("count = ", count);

//  is palindrom num
// var isPalindrome = function(x) {
//   let rev = 0
//   let num = x
//   if(x<0) return false
//   while(x){
//       let ld = x%10
//       x=parseInt(x/10)
//       rev = rev*10 +ld
//   }
//   console.log(rev)
//   return num == rev
// };

// armstrong num

const isArmStrong = (num) => {
  let sum = 0;
  let temp = num;
  let len = temp.toString().length;
  while (temp) {
    let ld = temp % 10;
    num = parseInt(temp / 10);
    sum = sum + Math.pow(ld, len);
  }
  console.log("arm = ", sum);
  return sum === num;
};

// print all divisiors

const printDivisor1 = (num) => {
  let i = 1;
  let arr = [];
  while (i <= num / 2) {
    if (num % i == 0) {
      arr.push(i);
    }
    i++;
  }
  arr.push(num);
  console.log(arr);
};
// printDivisor1(21);

const printDivisior2 = (num) => {
  let i = 0;
  let arr = [];
  while (i * i <= num) {
    if (num % i == 0) {
      arr.push(i);
      if (i != num / i) {
        arr.push(num / i);
      }
    }
    i++;
  }
  arr.sort((a, b) => a - b);
  console.log(arr);
};
// printDivisior2(21);

// isPrime
const isPrime1 = (n) => {
  if (n == 1) return false;
  if (n == 2) return true;
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
};
// console.log(isPrime1(5));

const isPrime2 = (n) => {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 == 0 || n % 3 == 0) return false;
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i == 0 || n % (i + 2) == 0) {
      return false;
    }
  }
  return true;
};

console.log(isPrime2(13));

// count all prime numbers
var countPrimes = function (n) {
  let arr = new Array(n);
  arr.fill(1);
  arr[0] = arr[1] = 0;
  for (let i = 2; i < n; i++) {
    if (arr[i] == 1) {
      // for(let j = i;j<=n;j+=i){
      //     if(j!=i){
      //         arr[j] = 0
      //     }
      //     // console.log("j = ",j)
      // }
      // or
      for (let j = i * 2; j < n; j += i) {
        arr[j] = 0;
      }
    }
    // console.log('next')
  }
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] == 1) {
      count++;
    }
  }
  // console.log(arr)
  return count;
};

// find gcd
const findGcd = (n1, n2) => {
  for (let i = Math.min(n1, n2); i > 1; i--) {
    if (n1 % i == 0 && n2 % i == 0) {
      return i;
    }
  }
  return 1;
};
console.log(findGcd(24, 16));
