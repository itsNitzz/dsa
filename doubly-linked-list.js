class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.length) return undefined;

    const removeTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removeTail.prev;
      this.tail.next = null;
      removeTail.prev = null;
    }
    this.length--;
    return removeTail;
  }

  shift() {
    if (!this.length) return undefined;

    const removeHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removeHead.next;
      this.head.prev = null;
      removeHead.next = null;
    }
    this.length--;
    return removeHead;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let getNode = this.head;
    let count = 0;
    if (index > this.length / 2) {
      count = this.length - 1;
      getNode = this.tail;
    }

    if (index > this.length / 2) {
      while (count > index) {
        getNode = getNode.prev;
        count--;
      }
    } else {
      while (count < index) {
        getNode = getNode.next;
        count++;
      }
    }

    return getNode;
  }

  set(index, value) {
    let getNode = this.get(index);
    if (!getNode) return getNode;
    getNode.val = value;
    return this;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;

    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);

    let getNode = this.get(index);
    let newNode = new Node(value);
    let temp = getNode.prev;

    newNode.next = getNode;
    getNode.prev = newNode;
    temp.next = newNode;
    newNode.prev = temp;
    this.length++;
    return this;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let getNode = this.get(index);
    let beforeNode = getNode.prev;
    let afterNode = getNode.next;

    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    getNode.next = null;
    getNode.prev = null;
    this.length--;

    return getNode;
  }

  reverse() {
    if (!this.length) return undefined;
    let count = 0;
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    while (count < this.length) {
      let current = temp.next;
      temp.next = temp.prev;
      temp.prev = current;
      temp = temp.prev;
      count++;
    }

    return this;
  }
}

const list = new DoublyLinkedList();
