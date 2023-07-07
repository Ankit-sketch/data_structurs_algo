class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    printData() {
        let current = this.head;
        let arr = [];
        while (current) {
            arr.push(current.data);
            current = current.next
        }
        return arr;
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
        if (this.size === 0) this.append(data);
        else {
            let current = this.head;
            let node = new Node(data);
            this.head = node;
            this.head.next = current;
        }
        this.size++;
    }
    insertAt(index, data) {
        if (this.size === 0) return;
        let counter = 0;
        let current = this.head;
        let previous;
        while (counter < index) {
            previous = current;
            current = current.next;
            counter++;
        }
        previous.next = new Node(data);
        previous.next.next = current;
        this.size++;
    }
    removeAt(index) {
        if (this.size === 0) return;
        let counter = 0;
        let current = this.head;
        let previous;
        while (counter < index) {
            previous = current;
            current = current.next;
            counter++;
        }
        previous.next = current.next;
        this.size--;
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
}
const ll = new LinkedList();
ll.append(1);
ll.append(2);
ll.append(3);
ll.prepend(0);
ll.insertAt(2, 54);
ll.removeAt(2);
ll.reverse();
console.log(ll.printData());
console.log(ll);