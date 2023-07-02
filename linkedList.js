class Node {
    constructor(data = 0, next = null) {
        this.data = data;
        this.next = next;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    push(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.head.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }
    pop() {
        if (this.size == 0) return;
        let current = this.head;
        let previous;
        while (current.next) {
            previous = current;
            current = current.next;
        }
        previous.next = null;
        this.tail = previous;
        this.size--;
    }
    insert(data, index) {
        if (index >= this.size) return -1;
        let current = this.head;
        let counter = 0;
        while (counter < index) {
            current
        }
    }
}
const ll = new LinkedList();
ll.push(1);
ll.push(2);
ll.push(3);
ll.push(4);
ll.push(5);
ll.push(6);
ll.push(7);
ll.insert(8, 3)
// ll.pop();
console.log(ll);