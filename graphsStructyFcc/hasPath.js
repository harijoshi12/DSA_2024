const graph = {
  a: ["c", "b"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

// n- nodes
// e- edges, worst case n*(n-1)/2 === n^2
// T- O(e) = O(n^2)
// S- O(n)

// using bfs
const sol1 = (graph, src, dst) => {
  let q = [src];
  while (q.length > 0) {
    const curr = q.shift();
    if (curr == dst) return true;
    for (let ngb of graph[curr]) {
      q.push(ngb);
    }
  }
  return false;
};

let res = sol1(graph, "a", "e");
console.log("bfs: ", res);

// using dfs
const sol2 = (graph, src, dst) => {
  if (src == dst) return true;
  for (let ngb of graph[src]) {
    let res = sol2(graph, ngb, dst);
    if (res) {
      return true;
    }
  }
  return false;
};
console.log(sol2(graph, "a", "e"));
