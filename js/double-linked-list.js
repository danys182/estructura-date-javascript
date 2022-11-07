class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoubleLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    newNode.prev = null;
    this.head = newNode;

    this.length++;
  }

  insert(index, value) {
    this.checkIndex(index);

    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = new Node(value);

    const pointerIndex = this.getIndex(index);
    const pointerPrev = pointerIndex.prev;

    pointerPrev.next = newNode;
    pointerIndex.prev = newNode;

    newNode.next = pointerIndex;
    newNode.prev = pointerPrev;

    this.length++;
    return this;
  }

  getIndex(index) {
    let counter = 1;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }
  checkIndex(index) {
    if (index > this.length) {
      console.error(`Indice ${inidice} en lista con ${this.length} elementos`);
    }
  }

  remove(index) {
    const pointerIndex = this.getIndex(index);
    const prev = pointerIndex.prev;
    const next = pointerIndex.next;

    prev.next = next;
    next.prev = prev;

    this.length--;
    return this;
  }
}

let list = new DoubleLinkedList(1);
list.append(2);
list.append(4);
list.append(5);
list.append(6);
list.insert(3, 3);
list.remove(2);

console.log(list);
