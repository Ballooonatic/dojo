// Singly Linked List

class Node {
    constructor(el) {
        this.element = el;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.length = 0;
    }

    findNode(el) {
        let node = this.head;
        while (node.element !== el) {
            node = node.next;
        }
        return node;
    }

    addToHead(el) {
        let newNode = new Node(el);
        if (this.length === 0) {
            this.head = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++;
        return this;
    }

    removeNode(el) {
        let node = this.head;
        let prevNode;
        while (node.element !== el) {
            prevNode = node
            node = node.next;
        }
        if (node.element === el && prevNode) {
            prevNode.next = node.next
            node = null
        }
        this.length--;
        return this;
    }

    displayList() {
        let node = this.head
        while (node) {
            console.log(node.element)
            node = node.next
        }
        console.log("\n")
        return this;
    }
}






let sll = new SinglyLinkedList()

sll.addToHead("sticc")
    .addToHead("thicc")
    .addToHead("dicc")
    .addToHead("stacc")
    .addToHead("thancc")
    .addToHead("blacc")
    .addToHead("drincc")
    .displayList()
;

sll.removeNode("sticc")
    .removeNode("stacc")
    .removeNode("drincc")
    .displayList()
;