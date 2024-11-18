class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (value === current.value) return "Already exists!";
      if (value > current.value) {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      } else {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      }
    }
  }

  find(value) {
    if (!this.root.value) return false;

    let current = this.root;
    let found = false;
    // while (true) {
    //   if (value >= current?.value) {
    //     if (current.right?.value === value) {
    //       return current.right;
    //     }
    //     current = current.right;
    //   } else if (value <= current?.value) {
    //     if (current.left?.value === value) {
    //       return current.left;
    //     }
    //     current = current.left;
    //   } else {
    //     return false;
    //   }
    // }

    while (current && !found) {
      if (value > current.value) {
        current = current.right;
      } else if (value < current.value) {
        current = current.left;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }

  BFS() {
    let node = this.root;
    let queue = [];
    let data = [];

    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      data.push(node.value);
    }

    return data;
  }
}

let tree = new BinarySearchTree();

tree.root = new Node(35);
tree.root.left = new Node(15);
tree.root.left.right = new Node(25);
tree.root.left.left = new Node(10);

tree.root.right = new Node(48);
