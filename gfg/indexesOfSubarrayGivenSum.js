// T-O(n)
const subarraySum = (arr, n, s) => {
  // console.log("arr: ",arr, ", n: ", n, ", s: ",s )
  let left = 0,
    sum = 0;
  for (let right = 0; right < n; right++) {
    sum += arr[right];
    while (sum > s && left < right) {
      sum -= arr[left++];
    }
    if (sum == s) {
      return [left + 1, right + 1];
    }
  }
  return [-1];
};

// O(n^2)
// const subarraySum = (arr, n, s) =>{
//     //your code here
//     // console.log("arr: ",arr, ", n: ", n, ", s: ",s )
//   for(let i = 0;i<n;i++){
//         let sum = 0
//       for(let j = i;j<n; j++){
//           sum+=arr[j]
//           if(sum==s) return [i+1,j+1]
//       }
//   }
//   return [-1]
// }

// O(n^3)
// const subarraySum = (arr, n, s) =>{
//     //your code here
//     // console.log("arr: ",arr, ", n: ", n, ", s: ",s )
//   for(let i = 0;i<n;i++){
//       for(let j = i;j<n; j++){
//           let sum = 0
//           for(let k = i;k<=j;k++){
//               sum+=arr[k]
//           }
//           if(sum==s) return [i+1,j+1]
//       }
//   }
//   return [-1]
// }
//
