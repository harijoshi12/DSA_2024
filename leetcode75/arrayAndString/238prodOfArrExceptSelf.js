// brute force 1
// mistake modifing the original array, there the next prod will calculate on the basis of the modified array

var productExceptSelf = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let prod = 1;
    for (let j = 0; j < nums.length; j++) {
      if (i != j) {
        prod *= nums[j];
      }
    }
    nums[i] = prod;
  }
  console.log(nums);
  return nums;
};

// correct brute force
var productExceptSelf = function (nums) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let prod = 1;
    for (let j = 0; j < nums.length; j++) {
      if (i != j) {
        prod *= nums[j];
      }
    }
    result[i] = prod;
  }
  console.log(result);
  return result;
};

// optimized 1

var productExceptSelf = function (nums) {
  let prod = 1;
  for (let i = 0; i < nums.length; i++) {
    prod *= nums[i];
  }
  for (let i = 0; i < nums.length; i++) {
    nums[i] = prod / nums[i];
  }
  return nums;
};

// optimized 2
var productExceptSelf = function (nums) {
  let prod = 1;
  zeroArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      prod *= nums[i];
    } else {
      zeroArr.push(i);
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (zeroArr.length == 0) {
      nums[i] = prod / nums[i];
    } else {
      if (zeroArr.some((el) => el == i)) {
        if (zeroArr.length > 1) {
          nums[i] = 0;
        } else {
          nums[i] = prod;
        }
      } else {
        nums[i] = 0;
      }
    }
  }
  return nums;
};

// optimise 3
var productExceptSelf = function (nums) {
  let prod = 1,
    zeroCount = 0,
    zeroIdx = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      prod *= nums[i];
    } else {
      zeroCount++;
      zeroIdx = i;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (zeroCount == 0) {
      nums[i] = prod / nums[i];
    } else if (zeroCount == 1) {
      // if(nums[i]!=0){
      //     nums[i] = 0
      // }else{
      //     nums[i] = prod
      // }
      nums[i] = nums[i] != 0 ? 0 : prod;
    } else {
      nums[i] = 0;
    }
  }
  return nums;
};

// first optimization: without division
var productExceptSelf = function (nums) {
  let left = [];
  let right = [];
  left[0] = 1;
  right[nums.length - 1] = 1;
  for (let i = 1; i < nums.length; i++) {
    left[i] = left[i - 1] * nums[i - 1];
  }
  for (let i = nums.length - 2; i >= 0; i--) {
    right[i] = right[i + 1] * nums[i + 1];
  }
  for (let i = 0; i < nums.length; i++) {
    nums[i] = left[i] * right[i];
  }
  //    console.log(nums)
  return nums;
};

// second optimization: without division
var productExceptSelf = function (nums) {
  let left = [];
  left[0] = 1;
  for (let i = 1; i < nums.length; i++) {
    left[i] = left[i - 1] * nums[i - 1];
  }
  let right = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    left[i] = left[i] * right;
    right *= nums[i];
  }
  //    console.log(nums)
  return left;
};
