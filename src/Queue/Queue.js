class Queue {
  constructor() {
    this.members = [];
  }
  peek() {
    if (this.members.length > 0) return this.members[0];
  }
  enqueue(item) {
    this.members.push(item);
  }
  dequeue() {
    return this.members.shift();
  }
  any() {
    return this.members.length > 0;
  }
}

module.exports = Queue;
