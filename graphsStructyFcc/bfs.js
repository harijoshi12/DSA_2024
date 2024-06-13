const graph = {
  a: ["c", "b"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

const bfs = (graph, src) => {
  let q = [src];
  while (q.length > 0) {
    let curr = q.shift();
    console.log(curr);
    for (let ngb of graph[curr]) {
      q.push(ngb);
    }
  }
};
bfs(graph, "a");
