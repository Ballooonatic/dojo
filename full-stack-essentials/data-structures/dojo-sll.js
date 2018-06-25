// This is Coding Dojo's solution for Singly Linked List implementation in Javascript. Literally doesn't work

function Node(el) {
    this.element = el;
    this.next = null;
}

function SinglyLinkedList() {
    this.head = new Node("head");
}

SinglyLinkedList.prototype.findNode = function(element) {
    var currentNode = this.head;
    while (currentNode.element !== element) {
        currentNode = currentNode.next;
    }
    return currentNode;
}

SinglyLinkedList.prototype.insert = function(newElement, element) {
    var newNode = new Node(newElement);
    var current = this.findNode(element);
    newNode.next = current.next
    current.next = newNode.element;
}

SinglyLinkedList.prototype.display = function() {
    var currentNode = this.head;
    while (currentNode) {
        console.log(currentNode.element)
        currentNode = currentNode.next
    }
}


var cities = new SinglyLinkedList();

cities.insert("Los Angeles", "head");
cities.insert("San Francisco", "Los Angeles");
cities.insert("Seattle", "San Francisco");
cities.display();