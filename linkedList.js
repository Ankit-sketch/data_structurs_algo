class Node {
    constructor(data = null, next = null) {
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
    printData() {
        let counter = 0;
        let current = this.head;
        let arr = [];
        while (current) {
            arr.push(current.data)
            current = current.next
            counter++;
        }
        return arr;
    }
    append(data) {
        const node = new Node(data);
        if (this.size == 0) {
            this.head = node;
            this.tail = this.head;
        } else {
            let counter = 0;
            let current = this.head;
            let previous;
            while (current) {
                previous = current;
                counter++;
                current = current.next;
            }
            previous.next = node;
            this.tail = previous.next;
        }
        this.size++;
    }
    prepend(data) {
        if (this.size == 0) {
            this.head = node;
            this.tail = this.head;
        } else {
            let pointer = this.head;
            this.head = new Node(data);
            this.head.next = pointer;
        }
        this.size++;
    }
    insertAt(index, data) {
        if (this.size == 0) return
        let counter = 0;
        let previous;
        let current = this.head;
        while (counter < index) {
            previous = current;
            current = current.next;
            counter++;
        }
        previous.next = new Node(data);
        previous.next.next = current;
        // this.size++;
    }
    reverse() {
        let prev = null;
        let current = this.head;
        while (current != null) {
            let forwardRef = current.next;
            current.next = prev;
            prev = current;
            current = forwardRef;
        }
        this.head = prev
    }
}
const ll = new LinkedList();
ll.append(1)
ll.append(2)
ll.append(3)
ll.append(4)
ll.append(5)
ll.append(6)
ll.prepend(7)
ll.prepend(8)
ll.prepend(9)
ll.insertAt(4, 19)
ll.reverse()


// ll.pop();
console.log(ll);
console.log(ll.printData());