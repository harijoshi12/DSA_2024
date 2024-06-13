// Dutch national flag algorithm, T O(n), S-O(1)
// const sort012=(arr, N)=>{
//     //your code here
//     let low = 0, mid = 0, high = N-1
//     while(mid<=high){
//         if(arr[mid]==0){
//             [arr[mid], arr[low]]=[arr[low], arr[mid]]
//             low++
//             mid++
//         }else if(arr[mid]==1){
//             mid++
//         }else if(arr[mid]==2){
//             [arr[mid], arr[high]] = [arr[high], arr[mid]]
//             high--
//         }
//     }
//     return arr
// }

// method 2 - T O(n), S-O(1)
const sort012 = (arr, N) => {
  //your code here
  let c0 = 0,
    c1 = 0,
    c2 = 0;
  for (let num of arr) {
    num == 0 ? c0++ : num == 1 ? c1++ : c2++;
  }
  let idx = 0;
  for (let i = 0; i < c0; i++) {
    arr[idx++] = 0;
  }
  for (let i = 0; i < c1; i++) {
    arr[idx++] = 1;
  }
  for (let i = 0; i < c2; i++) {
    arr[idx++] = 2;
  }
  return arr;
};
