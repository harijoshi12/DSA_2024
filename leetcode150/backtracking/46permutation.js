var permute = function (nums) {
  let ans = [];
  var helper = function (nums, arr = []) {
    if (nums.length == 0) {
      console.log(arr);
      ans.push([...arr]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      arr.push(nums[i]);
      // console.log([...nums.slice(0,i),...nums.slice(i+1)])
      helper([...nums.slice(0, i), ...nums.slice(i + 1)], arr);
      arr.pop();
    }
  };
  helper(nums);
  return ans;
};
