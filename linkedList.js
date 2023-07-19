class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
};
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    pirntData() {
        let current = this.head;
        let arr = [];
        while (current) {
            arr.push(current.data)
            current = current.next;
        }
        return arr
    }
    append(data) {
        const node = new Node(data);
        if (this.size === 0) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }
    prepend(data) {
        let node = new Node(data);
        if (this.size === 0) {
            this.head = node;
            this.tail = this.head;
        } else {
            let pointer = this.head;
            this.head = node;
            this.head.next = pointer;
        }
        this.size++;
    }
    insertAt(index, data) {
        if (this.size === 0 || this.size < index) return;
        if (index === this.size) {
            this.append(data)
            return
        }; // if someone is inserting at last index
        if (index === 0) {
            this.prepend
            return
        };
        let node = new Node(data);
        let current = this.head;
        let previous;
        let counter = 1;
        while (counter < index) {
            previous = current;
            current = current.next;
            counter++;
        }
        previous.next = node;
        previous.next.next = current;
        this.size++;
    }
    reverse() {
        let prev = null;
        let current = this.head;
        this.tail = current;
        while (current) {
            let forwardRef = current.next;
            current.next = prev;
            prev = current;
            current = forwardRef;
        }
        this.head = prev;
    }
};
const ll = new LinkedList();
ll.append(1);
ll.append(2);
ll.append(3);
ll.prepend(0);
ll.prepend(9);
ll.insertAt(2, 99);
ll.insertAt(5, 90);
ll.insertAt(7, 100);
ll.reverse()
console.log(ll.pirntData());
console.log(ll);