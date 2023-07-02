class Node {
    constructor(data, previous = null, next = null) {
        this.data = data;
        this.previous = previous;
        this.next = next;
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    insertAtFirst(data) {
        this.head = new Node(data);
        this.tail = this.head;
        this.size++;
    }
    insertSecond(data) {
        const node = new Node(data);
        node.previous = this.head;
        this.head.next = node;
        this.tail = this.head.next;
        this.size++;
    }
}

const dll = new DoubleLinkedList();
dll.insertAtFirst(3);
dll.insertSecond(4);
console.log(dll);