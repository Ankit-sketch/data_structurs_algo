class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.previous = null;
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
        if (this.size == 0) {
            this.head = node;
            this.tail = node;
        } else {
            let pointer = this.tail;
            pointer.next = node;
            pointer.previous = this.tail;
            this.head = pointer;
            this.tail = node;
            this.tail.previous = pointer;
            this.tail.next = null;
        }
        this.size++;
    }
}

const dll = new DoubleLinkedList();
dll.append(1);
dll.append(2);
console.log(dll);