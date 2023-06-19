class Node {
    constructor(value, next = null) {
        this.data = value;
        this.next = next;
    }
}
class LinkedList {
    constructor(value) {
        this.head = null;
        this.tail = this.head;
        this.size = 0;
    }
    //insert first node
    insertFirst(value) {
        if (!this.head) {
            this.head = new Node(value, this.head);
            this.tail = this.head;
        } else {
            const node = this.head;
            this.head = new Node(value, node);
            this.tail = node;
        }
        this.size = this.size + 1;
    }
    //insert last node
    insertLast(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail = node;
        }
    }
    //print list data
    printListData() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}
console.clear();
const ll = new LinkedList();
ll.insertFirst(2);
ll.insertFirst(1);
ll.insertLast(3);
console.log(ll);
console.log("=========================================================");
ll.printListData();
