var isValid = function (s) {
  let stack = [];
  for (let char of s) {
    // console.log("stack = ",stack)
    if (stack[stack.length - 1] == "(" && char == ")") {
      stack.pop();
    } else if (stack[stack.length - 1] == "[" && char == "]") {
      stack.pop();
    } else if (stack[stack.length - 1] == "{" && char == "}") {
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  return !stack.length;
};
