const Queue = require("../Queue/Queue");
class Graph {
  constructor(vertCount) {
    this._visited = [];
    this._adj = [];

    for (let i = 0; i < vertCount; ++i) {
      this._adj[i] = [];
      this._visited.push(false);
    }
  }

  addEdge(v1, v2) {
    this._adj[v1].push(v2);
  }

  BFS(s) {
    // here all vertices must have visited === false
    const _queue = new Queue();
    this._visited[s] = true;
    _queue.enqueue(s);

    while (_queue.any()) {
      s = _queue.peek();
      console.log("visiting node: " + s);
      _queue.dequeue();

      var list = this._adj[s];

      for (let val of list) {
        if (!this._visited[val]) {
          this._visited[val] = true;
          _queue.enqueue(val);
        }
      }
    }
    return this._visited;
  }
}
module.exports = Graph;
