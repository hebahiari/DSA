/**
 * return true if two arrays are equal, false otherwise
 */
function isEqual(a1, a2) {
  if (a1.length !== a2.length) {
    return false;
  }

  if (!a1.length && !a2.length) {
    return true;
  }

  a1.sort((a, b) => b - a);
  a2.sort((a, b) => b - a);

  return a1.every((number, index) => {
    return number === a2[index];
  });
}

/**
 * return the union of two sets
 */
function union(s1, s2) {
  let s3 = new Set([...s1, ...s2]);
  return s3;
}

/**
 * return the intersection of two sets
 */
function intersect(s1, s2) {
  let s3 = new Set([...s1].filter((x) => s2.has(x)));
  return s3;
}

/**
 * return the difference of two sets
 */
function difference(s1, s2) {
  let s3 = new Set([...s1].filter((x) => !s2.has(x)));
  return s3;
}

/**
 * Remove duplicate values, if any, from a sorted linked list.
 *
 * The algorithm should be O(n) time complexity, therefore it cannot use `find()`.
 *
 * @param sortedLinkedList
 *  a possibly empty link list with all values in lexical order.
 *
 * @returns {LinkedList}
 *  the original linked list with any duplicate values removed.
 */

function removeDuplicates(sortedLinkedList) {
  let node = sortedLinkedList.head;
  while (node && node.next) {
    if (node.value == node.next.value) {
      node.next = node.next.next;
    }
    node = node.next;
  }
  return sortedLinkedList;
}

/**
 * Implement a Parking Lot.
 *
 */
class ParkingLot {
  constructor(capacity, rate) {
    this.spaces = new Array(capacity).fill("vacant");
    this.rate = rate;
    this.revenue = 0;
    this.queue = new Queue();
  }

  /**
   * Returns the number of vacant parking spaces
   * @returns {Number}
   *  the total number of spaces where the value is "vacant".
   */

  get vacantSpaces() {
    return this.spaces.reduce(
      (sum, space, index) => sum + (space === "vacant" ? 1 : 0),
      0
    );
  }

  /**
   * As cars enter the parking lot, the license plate number is entered and the car is parked in the first vacant space.
   * If the lot is full, the car is added to the queue to be parked when a spot is available.
   *
   * @param licensePlateNumber
   *  the license plate number of the car entering
   */
  enter(licensePlateNumber) {
    let vacantSpot = this.spaces.findIndex((space) => space == "vacant");
    if (vacantSpot >= 0) {
      this.spaces[vacantSpot] = licensePlateNumber;
    } else {
      this.queue.enqueue(licensePlateNumber);
    }
  }

  /**
   * As a car leaves the parking lot, or the queue, the leave method is called with the license plate number of the car leaving.
   * @param licensePlateNumber
   *    *  the license plate number of the car leaving.
   */
  leave(licensePlateNumber) {
    let car = this.spaces.findIndex((car) => car == licensePlateNumber);

    if (car !== -1) {
      let dequeued = this.queue.dequeue();
      this.spaces[car] = dequeued ? dequeued : "vacant";
      this.revenue = this.revenue + 1;
    } else {
      if (!this.queue.isEmpty()) {
        let newqueue = new Queue();
        let item = this.queue.dequeue();
        while (item) {
          if (item !== licensePlateNumber) {
            newqueue.enqueue(item);
          }
          item = this.queue.dequeue();
        }
        this.queue = newqueue;
      }
    }
  }

  /**
   * Lists each space in the parking lot along with the license plate number of the car parked there, or
   * "vacant" as the license plate if the spot is vacant.
   * @returns {{licensePlateNumber: string, space: Number}[]}
   */
  get occupants() {
    return this.spaces.map((licensePlateNumber, index) => ({
      space: index + 1,
      licensePlateNumber,
    }));
  }

  /**
   * The total cumulative revenue for the parking lot. The parking rate is paid when the car leaves, it does not matter how long the car stays in the spot.
   * @returns {number}
   *  the total revenue for the parking lot.
   */
  get totalRevenue() {
    return this.revenue * this.rate;
  }
}

/**
 * A palindrome is a word, phrase, or number that is spelled the same forward and backward.
 * For example, “dad” is a palindrome; “A man, a plan, a canal: Panama” is a palindrome if you take out the spaces and ignore the punctuation;
 * and 1,001 is a numeric palindrome.
 *
 * Use a stack to determine whether or not a given string is a palindrome.
 *
 * The implementation should have O(n) performance.
 *
 * @param text
 *  a possibly empty string that may be a palindrome.
 */

function isPalindrome(text) {
  const cleanText = text.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

  if (cleanText.length < 1) {
    return false;
  }

  let middle = Math.floor(cleanText.length / 2);
  let myStack = new Stack();

  for (let i = 0; i < middle; i++) {
    myStack.push(cleanText[i]);
  }

  middle += cleanText.length % 2 == 0 ? 0 : 1;

  for (let i = middle; i < cleanText.length; i++) {
    if (cleanText[i] !== myStack.pop()) {
      return false;
    }
  }

  return !myStack.top;
}

const cycle = (list) => {
  const visited = [];
  let current = list.head;
  while (current) {
    if (visited.includes(current.value)) {
      return true;
    }
    visited.push(current.value);
    current = current.next;
  }
  return false;
};

class Editor {
  /**
   * Constructs a new Editor object with the given text.
   * Defaults to empty text. Cursor is positioned at the end of the text.
   * @param {LinkedList} text - A linked List containing the characters that are in the editor,
   * empty by default
   */
  constructor(text = new LinkedList()) {
    this.text = text;
    this.cursor = this.text.find(
      (node, index) => index === this.text.length - 1
    );
  }

  /**
   * Insert a character at the cursor position of the editor.
   * @param {*} char a value to be inserted into the editor
   * @returns {Editor} a reference to this editor
   */
  insert(char) {
    if (!this.cursor || this.text.length === 0) {
      this.text.insertAtHead(char);
      this.cursor = this.text.head;
    } else {
      this.text.insert(char);
      this.cursor = this.text.find(
        (node, index) => index === this.text.length - 1
      );
    }
    return this;
  }

  /**
   * Remove the character at the cursor position.
   * Moves the cursor to the previous position.
   * If editor is empty does nothing.
   * @returns {Editor} a reference to this editor
   */
  delete(isMatch) {
    if (!this.cursor) return this;

    const [matchedNode, previousNode] = this.text.findWithPrevious(
      (node) => node === this.cursor
    );

    if (!matchedNode) {
      return null;
    }
    if (!previousNode) {
      this.text.head = matchedNode.next;
      this.cursor = null;
      return this;
    }
    previousNode.next = matchedNode.next;
    this.cursor = previousNode;

    return this;
  }

  /**
   * Moves the cursor one position to the left.
   * If the cursor is at the start of the editor nothing happens.
   * @returns {Editor} a reference to this editor
   */
  arrowLeft() {
    if (!this.cursor) {
      return this;
    } else {
      const [ptr, previous] = this.text.findWithPrevious(
        (node) => node === this.cursor
      );
      this.cursor = previous;
    }
  }

  /**
   * Moves the cursor one position to the right.
   * If the cursor is at the end of the editor nothing happens.
   * @returns {Editor} a reference t this editor
   */
  arrowRight() {
    if (this.text.length === 0) {
      return this;
    } else {
      if (!this.cursor) {
        this.cursor = this.text.head;
        return this;
      }
      if (!this.cursor.next) {
        return this;
      }
      this.cursor = this.cursor.next;
      return this;
    }
  }
}
