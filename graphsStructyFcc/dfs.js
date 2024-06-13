const graph = {
  a: ["c", "b"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

const dfsItr = (graph, src) => {
  let stack = [src];
  while (stack.length > 0) {
    let curr = stack.pop();
    console.log(curr);
    for (const ngb of graph[curr]) {
      stack.push(ngb);
    }
  }
};
console.log("itr: ");
dfsItr(graph, "a");

const dfsRec = (graph, src) => {
  console.log(src);
  for (let ngb of graph[src]) {
    dfsRec(graph, ngb);
  }
};
console.log("rec: ");
dfsRec(graph, "a");
