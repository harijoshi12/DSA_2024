// edge list
let edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];

// adjacency list
// const graph = {
//   i: ["j", "k"],
//   j: ["i"],
//   k: ["i", "m", "l"],
//   l: ["k"],
//   o: ["n"],
//   n: ["o"],
// };
const buildGraph = (edges) => {
  let graph = {};
  for (let [v1, v2] of edges) {
    if (!(v1 in graph)) graph[v1] = [];
    if (!(v2 in graph)) graph[v2] = [];
    graph[v1].push(v2);
    graph[v2].push(v1);
  }
  return graph;
};
let graph = buildGraph(edges);

// console.log(graph);

const hasPath = (graph, v1, v2) => {
  const helper = (v1, visited) => {
    if (v1 == v2) return true;
    if (visited.has(v1)) return false;
    visited.add(v1);
    for (let ngb of graph[v1]) {
      if (helper(ngb, visited)) return true;
    }
    return false;
  };
  return helper(v1, new Set());
};
console.log(hasPath(graph, "i", "l"));
