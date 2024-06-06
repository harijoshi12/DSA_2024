// script.js

function visualize() {
  const arrayInput = document.getElementById("array-input").value;
  const targetInput = parseInt(
    document.getElementById("target-input").value,
    10
  );
  const array = arrayInput.split(",").map(Number);
  const treeContainer = document.getElementById("tree-container");
  treeContainer.innerHTML = "";

  // Start the recursion and visualization
  visualizeRecursionTree(array, targetInput, [], treeContainer, "");
}

function visualizeRecursionTree(array, target, path, container, indent) {
  const node = document.createElement("div");
  node.className = "node";
  node.textContent = `Array: [${array}], Target: ${target}, Path: [${path}]`;
  container.appendChild(node);

  if (target === 0) {
    const successNode = document.createElement("div");
    successNode.className = "node";
    successNode.style.backgroundColor = "#d4edda";
    successNode.textContent = "Success!";
    node.appendChild(successNode);
    return true;
  }

  if (target < 0) {
    const failNode = document.createElement("div");
    failNode.className = "node";
    failNode.style.backgroundColor = "#f8d7da";
    failNode.textContent = "Fail (target < 0)";
    node.appendChild(failNode);
    return false;
  }

  if (array.length === 0) {
    const failNode = document.createElement("div");
    failNode.className = "node";
    failNode.style.backgroundColor = "#f8d7da";
    failNode.textContent = "Fail (empty array)";
    node.appendChild(failNode);
    return false;
  }

  const [first, ...rest] = array;

  // Visualize including the first element (multiple times allowed)
  const includeBranch = document.createElement("div");
  includeBranch.className = "line";
  node.appendChild(includeBranch);
  const includeResult = visualizeRecursionTree(
    array,
    target - first,
    [...path, first],
    node,
    indent + "  "
  );

  // Visualize excluding the first element
  const excludeBranch = document.createElement("div");
  excludeBranch.className = "line";
  node.appendChild(excludeBranch);
  const excludeResult = visualizeRecursionTree(
    rest,
    target,
    path,
    node,
    indent + "  "
  );

  return includeResult || excludeResult;
}
