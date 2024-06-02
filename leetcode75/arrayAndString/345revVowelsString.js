var reverseVowels = function (s) {
  let f = 0,
    l = s.length - 1;
  // let arr = ['a','A','e','E','i','I','o',"O",'u',"U"]
  // const isVowel = (char)=>{
  //     for(ch of arr){
  //         if(char == ch){
  //             return true
  //         }
  //     }
  //     return false
  // }
  // or
  let vowels = new Set(["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]);
  const isVowel = (char) => vowels.has(char);

  let strArr = s.split("");
  while (f < l) {
    console.log(f, l);
    if (!isVowel(strArr[f])) {
      f++;
    }
    if (!isVowel(strArr[l])) {
      l--;
    }
    if (isVowel(strArr[f]) && isVowel(strArr[l])) {
      [strArr[f], strArr[l]] = [strArr[l], strArr[f]];
      f++;
      l--;
    }
  }
  return strArr.join("");
};
