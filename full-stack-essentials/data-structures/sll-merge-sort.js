// ~~~~~~~~~~ "Classes" ~~~~~~~~~~

function Node(element) {
    this.element = element;
    this.next = null
}

function SinglyLinkedList() {
    // linked list has a dummy first element
    this.head = new Node('head');
}





// ~~~~~~~~~~ SLL Methods ~~~~~~~~~~

SinglyLinkedList.prototype.findNode = function(element) {
    var currentNode = this.head;
    while(currentNode !== null && currentNode.element !== element) { 
        currentNode = currentNode.next;
    }
    return currentNode;
};

SinglyLinkedList.prototype.insert = function (newElement, element) {
    var newNode = new Node(newElement);
    var current = this.findNode(element);
    newNode.next = current.next;
    current.next = newNode;
};

SinglyLinkedList.prototype.display = function() {
    var currentNode = this.head;
    while(currentNode.next !== null) {
        console.log(currentNode.next.element);
        currentNode = currentNode.next;
    }
};

SinglyLinkedList.prototype.findPrevious = function(element) {
    var currentNode = this.head;
    while(currentNode.next !== null && currentNode.next.element !== element) {
        currentNode = currentNode.next;
    }
    return currentNode;
};

SinglyLinkedList.prototype.remove = function(element) {
    var previousNode = this.findPrevious(element);
    if(previousNode.next !== null) {
        previousNode.next = previousNode.next.next;
    }
};

SinglyLinkedList.prototype.nodeCount = function() {
    // not including the dummy first element (head)
    var currentNode = this.head;
    var count = 0;
    while(currentNode.next !== null) {
        currentNode = currentNode.next;
        count++;
    }
    return count;
}





// ~~~~~~~~~~ Instantiation ~~~~~~~~~~

var sll = new SinglyLinkedList();
sll.insert(6, "head");
sll.insert(5, 6);
sll.insert(3, 5);
sll.insert(1, 3);
sll.insert(8, 1);
sll.insert(7, 8);
sll.insert(2, 7);
sll.insert(4, 2);

sll.display()
console.log("\n\n");





// ~~~~~~~~~~ Merge Sorting ~~~~~~~~~~

function mergeSortLinkedList(sll) {
    if (sll.nodeCount() < 2) {
        return sll;
    }

    var left = new SinglyLinkedList()
    var right = new SinglyLinkedList()

    var leftNode = left.head;
    var rightNode = right.head;
    var curListNode = sll.head;

    for (let i = 0; i < sll.nodeCount(); i++) {
        if (i < (sll.nodeCount() / 2)) {
            left.insert(curListNode.next.element, leftNode.element)
            leftNode = leftNode.next
        } else {
            right.insert(curListNode.next.element, rightNode.element)
            rightNode = rightNode.next
        }
        curListNode = curListNode.next
    }

    return mergeLinkedLists( mergeSortLinkedList(left), mergeSortLinkedList(right) )
}



function mergeLinkedLists(left, right) {
    var newList = new SinglyLinkedList()
    var curListNode = newList.head;

    while (left.nodeCount() > 0 && right.nodeCount() > 0) {
        if (left.head.next.element <= right.head.next.element) {
            newList.insert(left.head.next.element, curListNode.element)
            left.remove(left.head.next.element)
            curListNode = curListNode.next
        } else {
            newList.insert(right.head.next.element, curListNode.element)
            right.remove(right.head.next.element)
            curListNode = curListNode.next
        }
    }

    
    while (left.nodeCount() > 0) {
        newList.insert(left.head.next.element, curListNode.element)
        left.remove(left.head.next.element)
        curListNode = curListNode.next
    }
    
    while (right.nodeCount() > 0) {
        newList.insert(right.head.next.element, curListNode.element)
        right.remove(right.head.next.element)
        curListNode = curListNode.next
    }

    return newList;
}





// ~~~~~~~~~~ Sort it! ~~~~~~~~~~

var sortedList = mergeSortLinkedList(sll)

sortedList.display()