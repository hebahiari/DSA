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

    enqueue(value) {
        const newNode = new Node(value)

        if (this.first) {
            this.last.next = newNode;
        } else {
            this.first = newNode
        }

        this.last = newNode
    }

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

module.exports = Queue;