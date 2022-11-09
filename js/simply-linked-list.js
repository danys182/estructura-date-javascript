class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MySinglyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;

    this.length++;
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = new Node(value);
    const firstPointer = this.getIndex(index - 1);
    const holdingPointer = firstPointer.next;
    firstPointer.next = newNode;
    newNode.next = holdingPointer;

    this.length++;
    return this;
  }

  remove(index) {
    if (!this.checkIndex(index)) {
      return null;
    }

    const firstPointer = this.getIndex(index - 1);
    const secondPointer = this.getIndex(index + 1);
    firstPointer.next = secondPointer;
    this.length--;
    return this;
  }

  checkIndex(index) {
    if (index > this.length) {
      console.error(`Indice ${index} en lista con ${this.length} elementos`);
      return false;
    }
    return true;
  }

  search(value) {
    let currentNode = this.head;
    while (currentNode.next !== null) {
      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
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
}

let list = new MySinglyLinkedList(1);
list.append(2);
list.append(3);
list.append(5);
list.append(6);
list.insert(4, 4);
list.prepend(7);
list.remove(5);

console.log(list);

console.log("Nodo con valor 4 ", list.search(4));
