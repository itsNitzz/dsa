class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let currentPosition = this.head;
    let newTail = currentPosition;
    while (currentPosition.next) {
      newTail = currentPosition;
      currentPosition = currentPosition.next;
    }
    this.length--;
    newTail.next = null;
    this.tail = newTail;
    if (this.length === 0) {
      this.tail = null;
      this.head = null;
    }
    return currentPosition;
  }

  shift() {
    if (!this.head) return undefined;
    let getIfirstItem = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return getIfirstItem;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(position) {
    if (this.length > 0 && position < 0) {
      position = this.length + position;
    }

    if (this.length < 0 || position > this.length - 1 || position < 0) {
      return undefined;
    }
    let counter = 0;
    let getNode = this.head;

    while (counter !== position) {
      getNode = getNode.next;
      counter++;
    }
    return getNode;
  }

  set(value, index) {
    const getNode = this.get(index);
    if (!getNode) return getNode;
    getNode.val = value;
    return this;
  }

  insert(value, index) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(value);
    if (index === 0) return !!this.unshift(value);

    const newNode = new Node(value);
    const getPrevNode = this.get(index - 1);
    const nextNode = getPrevNode.next;
    getPrevNode.next = newNode;
    newNode.next = nextNode;
    this.length++;

    return true;
  }

  remove(index) {
    if (index > this.length - 1 || index < 0) return undefined;

    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const getPrevNode = this.get(index - 1);
    const removeNode = getPrevNode.next;
    getPrevNode.next = removeNode.next;
    this.length--;
    return removeNode;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    let next;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }
}

let customList = new SinglyLinkedList();

customList.push("hiii");
customList.push("hello");
customList.push("kem chho");
