// tree.js

class TreeNode {
  constructor(value, target, path) {
    this.value = value;
    this.target = target;
    this.path = path;
    this.children = [];
  }
}

function buildRecursionTree(array, target, path) {
  const node = new TreeNode(array, target, path);

  if (target === 0) {
    node.children.push(new TreeNode("Success", target, path));
    return node;
  }

  if (target < 0) {
    node.children.push(new TreeNode("Fail (target < 0)", target, path));
    return node;
  }

  if (array.length === 0) {
    node.children.push(new TreeNode("Fail (empty array)", target, path));
    return node;
  }

  const [first, ...rest] = array;

  // Include the first element (multiple times allowed)
  node.children.push(
    buildRecursionTree(array, target - first, [...path, first])
  );

  // Exclude the first element
  node.children.push(buildRecursionTree(rest, target, path));

  return node;
}

function renderTree(node, container) {
  const nodeElement = document.createElement("div");
  nodeElement.className = "node";
  nodeElement.textContent = `Array: [${node.value}], Target: ${node.target}, Path: [${node.path}]`;
  container.appendChild(nodeElement);

  node.children.forEach((child) => {
    const childContainer = document.createElement("div");
    childContainer.className = "child-container";
    container.appendChild(childContainer);
    renderTree(child, childContainer);
  });
}

function visualize() {
  const arrayInput = document.getElementById("array-input").value;
  const targetInput = parseInt(
    document.getElementById("target-input").value,
    10
  );
  const array = arrayInput.split(",").map(Number);
  const treeContainer = document.getElementById("tree-container");
  treeContainer.innerHTML = "";

  const treeRoot = buildRecursionTree(array, targetInput, []);
  renderTree(treeRoot, treeContainer);
}
