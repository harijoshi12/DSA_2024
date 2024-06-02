let arr = ["a", "b", "c"];

// T- O(n!), S-O(n)
const sol1 = (arr, ans = []) => {
  if (arr.length == 0) {
    console.log(ans);
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    ans.push(arr[i]);
    sol1([...arr.slice(0, i), ...arr.slice(i + 1)], ans);
    ans.pop();
  }
};
sol1(arr);

const sol2 = ()=>{
  
}
sol2(arr)
