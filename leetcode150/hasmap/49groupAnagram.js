var groupAnagrams = function (strs) {
  let ans = [];
  let map = {};
  for (let str of strs) {
    let sorted = str.split("").sort().join("");
    if (!map[sorted]) {
      map[sorted] = [];
    }
    map[sorted].push(str);
  }
  // console.log(map)
  for (word in map) {
    // console.log("word arr = ",map[word])
    ans.push(map[word]);
  }
  // return ans;
  //  or
  console.log("obj map = ", Object.values(map));
  return Object.values(map);
};
