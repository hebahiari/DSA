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
  }

  // doesnt return
  enqueue(value) {
    const newNode = new Node(value);

    if (this.first) {
      this.last.next = newNode;
    } else {
      this.first = newNode;
    }

    this.last = newNode;
  }

  // returns value of dequeued
  dequeue() {
    if (this.first) {
      const dequeued = this.first;
      this.first = dequeued.next;

      if (dequeued === this.last) {
        this.last = null;
      }
      return dequeued.value;
    }
  }
}

class ArrayQueue {
  constructor() {
    this.items = [];
  }

  // Enqueue operation to add an element to the rear of the queue
  enqueue(data) {
    this.items.push(data);
  }

  // Dequeue operation to remove and return the front element from the queue
  dequeue() {
    if (this.isEmpty()) {
      return null; // Queue is empty
    }
    return this.items.shift();
  }

  // Peek operation to return the front element without removing it
  peek() {
    return this.isEmpty() ? null : this.items[0];
  }

  // Check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Get the size of the queue
  getSize() {
    return this.items.length;
  }

  // Display the elements of the queue
  display() {
    console.log(this.items.join(' '));
  }
}


// Connected Friends

// You work for a massive social network with many millions of users. You need to determine if two given users of the network are connected to each other.

// Users of the social network may "follow" each other, but the relationship may not be mutual. That is, person A may follow person B but person B may not necessarily follow person A.

// Consider the diagrammatic representation of a part of the network below:

// A directed graph

// In this diagram an arrow indicates that who a user follows.

// A follows B and C
// B follows D and D follows B
// Both E and B follow F
// F does not follow anyone
// A has no followers
// The objective is to search for a path from any given user to any other user. For example, there is a path from B to E. That path is B -> D -> C -> E. But there is no path from E to A.

// Internally, this network of users and their connections may be represented as an object where the keys are the user's identity and the values are an array of users that they follow. The above network may be represented as follows:

// {
//   "A": ["B", "C"],
//   "B": ["F", "D"],
//   "C": ["E"],
//   "D": ["C", "B"],
//   "E": ["D", "F"],
//   "F": []
// }
// Write a function that accepts a network object graph and two users startUser and endUser and returns true if there is a path from startUser to endUser, false otherwise.

const connected = (graph, startUser, endUser) => {
  const users = Object.keys(graph);

  if (users.length === 0) {
    return false;
  }

  if (startUser === endUser) {
    return true;
  }

  const discovered = new Queue();

  discovered.enqueue(startUser);
  const enqueued = [startUser];

  while (discovered.first) {
    const user = discovered.dequeue();

    const following = graph[user];

    for (const followedUser of following) {
      if (followedUser === endUser) {
        return true;
      }

      if (!enqueued.includes(followedUser)) {
        enqueued.push(followedUser);
        discovered.enqueue(followedUser);
      }
    }
  }

  return false;
};

// Generate binary numbers
// Given a number max, write an algorithm that generates all binary integers from 1 to max.

// Examples:

// Input: max = 2
// Output: ["1", "10"]

// Input: max = 5
// Output: ["1", "10", "11", "100", "101"]

const binary = (max) => {
  let myQueue = new Queue();
  myQueue.enqueue("1");
  let result = [];

  for (let i = 1; i <= max; i++) {
    let dequeued = myQueue.dequeue();
    result.push(dequeued);
    myQueue.enqueue(dequeued + "0");
    myQueue.enqueue(dequeued + "1");
  }
  return result;
};
