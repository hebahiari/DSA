/**
 * Node is used to store values in a LinkedList
 */
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

/**
 * LinkedList class holds a reference to the `head` node and has functions that update the list.
 */

class LinkedList {
  constructor() {
    this.head = null;
  }

  /**
   * The number of nodes in the linked list.
   *
   * @returns {number}
   *   the number of nodes in the linked list.
   */

  get length() {
    let result = 0;
    let node = this.head;

    while (node) {
      result++;
      node = node.next;
    }
    return result;
  }

  /**
   * Find a node in the linked list.
   *
   * @param isMatch
   *  function that returns true if the current node matches the search criteria.
   *
   * @returns {*|null}
   *  the first node where `isMatch(node, index) === true` or null if no match is found.
   */
  find(isMatch) {
    return this.findWithPrevious(isMatch)[0];
  }

  /**
   * Insert the value after a matched node in the list.
   * By default, the value is inserted at the end of the list.
   *
   * @param value
   *  the value to add.
   *
   * @param isMatch
   *  Optional function that returns true if the current node matches the search criteria.
   *
   * @returns {LinkedList}
   *  this linked list so methods can be chained.
   *
   * @throws 'No match found.'
   *  if list is not empty and no matching element is found.
   */
  insert(value, isMatch = (node, index) => index === this.length - 1) {
    if (this.head) {
      const previousNode = this.find(isMatch);

      if (!previousNode) {
        throw new Error("No match found.");
      }

      previousNode.next = new Node(value, previousNode.next);
    } else {
      this.insertAtHead(value);
    }
    return this;
  }

  /**
   * Insert a new value at the head of the list.
   * @param value
   *  the new value to insert
   *
   * @returns {LinkedList}
   *  this linked list so methods can be chained.
   */
  insertAtHead(value) {
    this.head = new Node(value, this.head);
    return this;
  }

  /**
   * Find a node, and it's previous node, in the linked list.
   * @param isMatch
   *  function that returns true if the current node matches the search criteria.
   *
   * @returns {[Node|null, Node|null]}
   *  the first element is the node where `isMatch(node, index) === true` or null if no match is found.
   *  the second element is the previous Node, or null if no match is found.
   *  This second element is also null if this.head is the matched node.
   */
  findWithPrevious(isMatch) {
    let index = 0;
    let previous = null;
    let node = this.head;
    while (node) {
      if (isMatch(node, index, this)) {
        return [node, previous];
      }
      index++;
      previous = node;
      node = node.next;
    }
    return [null, null];
  }

  /**
   * Remove the first node where `isMatch(node, index, this) === true`.
   *
   * @param isMatch
   *  function that returns true if the current node matches the node to be removed.
   *
   * @returns {*}
   *  the value of the removed node, where `isMatch(node, index) === true` or null if no match is found.
   */

  remove(isMatch) {
    const [matchedNode, previousNode] = this.findWithPrevious(isMatch);

    if (!matchedNode) {
      return null;
    }

    if (this.head === matchedNode) {
      this.head = this.head.next;
    } else {
      previousNode.next = matchedNode.next;
    }
    return matchedNode.value;
  }

  /**
   * Return the values of the linked list as an array
   *
   * @returns {Array}
   * the values in this linked list in an array
   */
  asArray() {
    const values = [];
    let node = this.head;
    while (node) {
      values.push(node.value);
      node = node.next;
    }
    return values;
  }

  /**
   * Create a string representation of this linked list
   *
   * @returns {String}
   * A String representation of this linked list
   */
  toString() {
    return `|${this.asArray().join("->")}|`;
  }
}

// Reverse a list

// Write an algorithm to reverse a linked list.

function reverseIterative(list) {
  const reversedList = new LinkedList();
  let node = list.head;
  while (node) {
    reversedList.insertAtHead(node.value);
    node = node.next;
  }
  return reversedList;
}

// Third from the end

// Write an algorithm to find the third element from the end of a linked list, without using the length property.

function thirdFromEnd(list) {
  if (!list.head) {
    return null;
  }

  let pointer1 = list.head;
  let i = 0;
  while (i < 2 && pointer1.next) {
    pointer1 = pointer1.next;
    i++;
  }
  if (i < 2) {
    return null;
  }

  let pointer2 = list.head;
  while (pointer1.next) {
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;
  }

  return pointer2;
}

// Swap nodes

// Write an algorithm to swap two nodes x and y (and not just their contents) in a singly linked list L, given references to only x and y.

function swap(list, x, y) {
  if (!list.head) {
    return list;
  }

  const x_next = x.next;
  const x_prev = list.findWithPrevious((node) => node === x)[1];
  const y_prev = list.findWithPrevious((node) => node === y)[1];

  x.next = y.next;
  y.next = x_next;
  if (x_prev) {
    x_prev.next = y;
  } else {
    list.head = y;
  }

  if (y_prev) {
    y_prev.next = x;
  } else {
    list.head = x;
  }

  return list;
}

// The Josephus problem

// People are standing in a circle waiting to be executed. Counting begins at a specified point in the circle and proceeds around the circle in a specified direction. After a specified number of people are skipped, the next person is executed. The procedure is repeated with the remaining people, starting with the next person, going in the same direction and skipping the same number of people, until only one person remains, and is freed. The problem—given the number of people, starting point, direction, and number to be skipped—is to choose the position in the initial circle to avoid execution.

// Write an algorithm that accepts a list of people, the number of persons n, and the number to be skipped m. The algorithm should return the name of the last person left alive.

function josephus(list, m) {
  let node = list.head;
  const tail = list.find((node) => !node.next);
  tail.next = list.head;
  while (node.next != node) {
    for (let i = 1; i < m; i++) {
      node = node.next;
    }
    if (node.next === list.head) {
      list.head = list.head.next;
    }
    node.next = node.next.next;
    node = node.next;
  }
  return node.value;
}

//   Cycle in a list

// Write an algorithm to find whether a linked list has a cycle (i.e., whether a node in the list has its next value pointing to an earlier node in the list). Return true if a cycle is found and false otherwise.

const cycle = (list) => {
  let mySet = new Set();
  let node = list.head;

  while (node) {
    if (mySet.has(node.value)) {
      return true;
    }
    mySet.add(node.value);
    node = node.next;
  }

  return false;
};
