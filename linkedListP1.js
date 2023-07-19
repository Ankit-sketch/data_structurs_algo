console.clear();
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor(data) {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    printData() {
        let current = this.head;
        let previous;
        let listData = new Array();
        while (current) {
            listData.push(current.data)
            previous = current;
            current = current.next;
        }
        return listData;
    }
    append(data) {
        const node = new Node(data);
        if (!this.head) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }
    prepend(data) {
        const node = new Node(data);
        if (!this.head) {
            this.append(data);
            return
        } else {
            let pointer = this.head;
            this.head = node;
            this.head.next = pointer;
        }
        this.size++;
    }
    insertAt(index, data) {
        if (this.size < index) return -1;
        const node = new Node(data);
        if (this.size === index) {
            this.append(data);
            return
        } else {
            let counter = 1;
            let current = this.head;
            let previous;
            while (counter < index) {
                previous = current;
                current = current.next;
                counter++;
            }
            previous.next = node;
            previous.next.next = current;
        }
        this.size++;
    }
    delete() {
        if (!this.head) return -1;
        if (this.size === 1) {
            this.head = null;
            this.tail = null;
        } else {
            let index = this.size - 1;
            let counter = 1;
            let current = this.head;
            let previous;
            while (counter <= index) {
                previous = current;
                current = current.next;
                counter++;
            }
            let pointer = previous;
            previous.next = null;
            this.tail = pointer;
        }
        this.size--;
    }
    reverseIterative() {
        let previous = null;
        let current = this.head;
        while (current) {
            let nextPointer = current.next;
            current.next = previous;
            previous = current;
            current = nextPointer;
        }
        this.head = previous;
    }
    reverseRecursive(upcomingHead) {
        if (!upcomingHead) return;
        let previous = null;
        let current = upcomingHead;
        let nextPointer = current.next;
        current.next = previous;
        previous = current;
        current = nextPointer;
        this.reverseRecursive(nextPointer);
        this.head = previous;
    }
}
const ll = new LinkedList();
ll.append(20);
ll.append(30);
ll.append(40);
ll.prepend(2);
ll.prepend(1);
ll.insertAt(3, 100);
ll.delete();
// ll.reverseIterative();
ll.reverseRecursive(this.head);
console.log(ll.printData());
console.log(ll);