var canPlaceFlowers = function (flowerbed, n) {
  // let count =0
  // if(flowerbed.length==1 && flowerbed[0]==0){
  //     count++
  //     return count >= n
  // }
  // if(flowerbed[1]==0 && flowerbed[0]==0){
  //     flowerbed[0]=1
  //     count++
  // }
  // let prev = 0, curr = 1, next = 2
  // for(let i = curr; curr<flowerbed.length-1; curr++){
  //     if(flowerbed[prev]==0 && flowerbed[next]==0&& flowerbed[curr]==0){
  //         flowerbed[curr] = 1
  //         count++
  //     }
  //     prev++
  //     next++
  // }
  // if(flowerbed[flowerbed.length-2]==0 && flowerbed[flowerbed.length-1]==0){
  //     flowerbed[flowerbed.length-1]=1
  //     count++
  // }

  let count = 0;
  for (let i = 0; i < flowerbed.length && count <= n; i++) {
    let curr = flowerbed[i];
    let prevEmpty = i == 0 || flowerbed[i - 1] == 0;
    let nextEmpty = i == flowerbed.length - 1 || flowerbed[i + 1] == 0;
    if (curr == 0 && prevEmpty && nextEmpty) {
      flowerbed[i] = 1;
      count++;
    }
  }
  console.log(flowerbed);

  return count >= n;
};
