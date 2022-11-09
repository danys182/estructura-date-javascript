class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    if (this.isEmpty()) {
      console.warn("No hay elementos");
      return null;
    }
    return this.first;
  }

  enqueue(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.length++;
    return this;
  }

  dequeue() {
    if (this.isEmpty()) {
      console.warn("No hay elementos");
      return null;
    }
    const first = this.first;
    this.first = first.next;

    this.length--;
    return first;
  }

  isEmpty() {
    return this.length === 0;
  }
}

const q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
console.log(q.dequeue());
//console.log(q.peek());

console.log(q);
