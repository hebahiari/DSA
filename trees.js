class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  insert(key, value) {
    if (this.key === null) {
      this.key = key;
      this.value = value;
    } else if (key < this.key) {
      if (this.left === null) {
        this.left = new BinarySearchTree(key, value, this);
      } else {
        this.left.insert(key, value);
      }
    } else {
      if (this.right === null) {
        this.right = new BinarySearchTree(key, value, this);
      } else {
        this.right.insert(key, value);
      }
    }
  }

  find(key) {
    if (this.key == key) {
      return this.value;
    }
    if (this.key > key) this.left.find(key);
    if (this.key < key) this.right.find(key);
    return null;
  }

  remove(key) {
    if (this.key == key) {
      // found node with two children
      if (this.left && this.right) {
        const successor = this.right._findMin();
        this.key = successor.key;
        this.value = successor.value;
        successor.remove(successor.key);
        // node with only right child
      } else if (this.right) {
        this._replaceWith(this.right);
        // node with only left child
      } else if (this.left) {
        this._replaceWith(this.left);
        // node with no children
      } else {
        this._replaceWith(null);
      }
    } else if (this.key > key) {
      this.left.remove(key);
    } else if (this.key < key) {
      this.right.remove(key);
    } else {
      throw new Error("Key Not Found");
    }
  }

  dfsInOrder(values = []) {
    if (this.left) {
      values = this.left.dfsInOrder(values);
    }
    values.push(this.value);
    if (this.right) {
      values = this.right.dfsInOrder(values);
    }
    return values;
  }

  dfsPreOrder(values = []) {
    values.push(this.value);
    if (this.left) {
      values = this.left.dfsPreOrder(values);
    }
    if (this.right) {
      values = this.right.dfsPreOrder(values);
    }
    return values;
  }

  dfsPostOrder(values = []) {
    if (this.left) {
      values = this.left.dfsPostOrder(values);
    }
    if (this.right) {
      values = this.right.dfsPostOrder(values);
    }
    values.push(this.value);
    return values;
  }

  bfs(tree, values = []) {
    const queue = new Queue();
    queue.enqueue(tree);
    let node = queue.dequeue();
    while (node) {
      values.push(node.value);

      if (node.left) {
        queue.enqueue(node.left);
      }

      if (node.right) {
        queue.enqueue(node.right);
      }
      node = queue.dequeue();
    }

    return values;
  }

  getHeight(currentHeight = 0) {
    if (!this.left && !this.right) return currentHeight;

    const newHeight = currentHeight + 1;

    if (!this.left) return this.right.getHeight(newHeight);

    if (!this.right) return this.left.getHeight(newHeight);

    const leftHeight = this.left.getHeight(newHeight);
    const rightHeight = this.right.getHeight(newHeight);

    return Math.max(leftHeight, rightHeight);
  }

  isBST() {
    const values = this.dfsInOrder();
    for (let i = 1; i < values.length; i++) {
      if (values[i] < values[i - 1]) {
        return false;
      }
    }
    return true;
  }

  findKthLargestValue(k) {
    const values = this.dfsInOrder();
    return values[values.length - k];
  }

  // this : the item I want to remove
  // node : the replacement I want to use
  _replaceWith(node) {
    // if not root node
    if (this.parent) {
      // give the parent the new left or right
      if (this.parent.left == this) {
        this.parent.left = node;
      } else if (this.parent.right == this) {
        this.parent.right = node;
      }
      // give the new node the correct parent
      if (node) {
        node.parent = this.parent;
      }
    } else {
      // if root node:
      // if we have replacement
      if (node) {
        this.value = node.value;
        this.key = node.key;
        this.right = node.right;
        this.left = node.left;
        // if we dont have replacement
      } else {
        this.value = null;
        this.key = null;
        this.right = null;
        this.left = null;
      }
    }
  }

  _findMin() {
    if (!this.left) {
      return this;
    }

    return this.left._findMin();
  }

  countLeaves(count = 0) {
    if (this.key) {
      if (!this.left && !this.right) {
        return 1;
      }

      if (this.left) {
        count += this.left.countLeaves();
      }

      if (this.right) {
        count += this.right.countLeaves();
      }
    }

    return count;
  }

  isBalancedBST() {
    let leftH = 0;
    let rightH = 0;

    if (this.left) {
      leftH = 1 + this.left.getHeight();
    }

    if (this.right) {
      rightH = 1 + this.right.getHeight();
    }

    if (Math.abs(leftH - rightH) > 1) {
      return -1;
    } else {
      return Math.max(leftH, rightH);
    }
  }
}

module.exports = BinarySearchTree;
