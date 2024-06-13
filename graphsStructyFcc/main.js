class Graph {
  constructor() {
    this.adjacenyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacenyList[vertex]) {
      this.adjacenyList[vertex] = [];
    }
  }

  addEdge(v1, v2) {}
}
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addEdge("A", "B");
console.log(graph.adjacencyList);

// 1. Depth-First Search (DFS)
// DFS is a traversal algorithm that starts at a given node and explores as far as possible along each branch before backtracking.

// 2. Breadth-First Search (BFS)
// BFS is a traversal algorithm that starts at a given node and explores all of the neighbor nodes at the present depth prior to moving on to nodes at the next depth level.

// Dijkstra's Algorithm
// Dijkstra's Algorithm finds the shortest path between two nodes in a graph.

// Bellman-Ford Algorithm
// The Bellman-Ford algorithm finds the shortest path from a single source vertex to all other vertices in a weighted graph. It can handle negative weights.

// Important Questions
// 1. Detect a cycle in a directed graph
// 2. Detect a cycle in an undirected graph
// 3. Find the shortest path in an unweighted graph
// 4. Topological Sorting of a graph
// 5. Check if a graph is bipartite
// 6. Find the strongly connected components in a graph
// 7. Find all bridges in a graph
// 8. Find all articulation points in a graph
// 9. Prim's and Kruskal's algorithms for Minimum Spanning Tree (MST)
