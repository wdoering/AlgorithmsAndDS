const Graph = require("./Graph Theory/BFSSearchForGraphs");

const g = new Graph(8);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 2);
g.addEdge(2, 0);
g.addEdge(2, 3);
g.addEdge(3, 3);
g.addEdge(3, 4);
g.addEdge(4, 5);
g.addEdge(5, 6);
g.addEdge(6, 7);
g.addEdge(7, 1);

const result = g.BFS(2);
console.log(result);
