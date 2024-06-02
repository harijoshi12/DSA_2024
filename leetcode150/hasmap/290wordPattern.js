var wordPattern = function (pattern, s) {
  let words = s.split(" ");
  if (pattern.length != words.length) return false;
  const ctw = new Map();
  const wtc = new Map();
  for (let i = 0; i < pattern.length; i++) {
    let char = pattern[i];
    let word = words[i];
    // console.log(ctw,wtc)
    if (ctw.has(char) && ctw.get(char) != word) {
      return false;
    }
    if (wtc.has(word) && wtc.get(word) != char) {
      return false;
    }
    ctw.set(char, word);
    wtc.set(word, char);
  }
  return true;
};
// var wordPattern = function(pattern, s) {
//     // let words = s.split(" ")
//     if(pattern.length != words.length) return false
//     const ctw = {}
//     const wtc = {}
//     for(let i = 0;i<pattern.length;i++){
//         let char = pattern[i]
//         let word = words[i]
//         console.log(ctw,wtc)
//         if(ctw[char] && ctw[char]!=word){
//             return false
//         }
//         if(wtc[word] && wtc[word]!=char){
//             return false
//         }
//         ctw[char] = word
//         wtc[word] = char
//     }
//     return true
// };
