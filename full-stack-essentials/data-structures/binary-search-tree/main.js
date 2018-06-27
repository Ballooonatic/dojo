var BinarySearchTree = require('./bst');

var bst = new BinarySearchTree();
bst.insert(23);
bst.insert(45);
bst.insert(16);
bst.insert(37);
bst.insert(3);
bst.insert(99);
bst.insert(22);
bst.insert(38);
bst.insert(2);

console.log("\n\nIN ORDER");
bst.inOrder(bst.root);
console.log("\n\nPRE ORDER");
bst.preOrder(bst.root);
console.log("\n\nPOST ORDER");
bst.postOrder(bst.root);

/*
        23
    16     45
 3       37   99
2       22 38
      
*/