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
    append(data) {
        let node = new Node(data);
        if (!this.head) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            let pointer = this.tail;
            this.tail = node;
            this.tail.previous = pointer;
        }
        this.size++;
    }
}

const dll = new DoubleLinkedList();
dll.append(1);
dll.append(2);
dll.append(3);
console.log(dll);