var Node = require('./node');

var BST = (function(){

    function BST() {
        this.root = null;
    };

    // ~~~~~~~~~~ Assignment I ~~~~~~~~~~

    BST.prototype.insert = function(data) {

        // If there's nothing in the BST, this insert will be the first Node
        if (!this.root) { this.root = new Node(data) }

        // Otherwise, we start at the root
        let cur = this.root

        // While there is still a place to go, we go toward the right place for the value until we find an opening
        while (cur.left && cur.right) {
            if (data < cur.data && cur.left) { cur = cur.left }
            if (data > cur.data && cur.right) { cur = cur.right}
        }

        // and then insert appropriately
        if (data < cur.data) { cur.left = new Node(data) }
        if (data > cur.data) { cur.right = new Node(data) }

        // other solution worth considering:

        // while (cur) {
        //     if(data < cur.data){
        //         if(!cur.left){
        //            cur.left = new Node(data);
        //            break;
        //         }
        //         else { cur = cur.left; }
        //     }
        //     else {
        //        if(!cur.right){
        //           cur.right = new Node(data);
        //           break;
        //        }
        //        else { cur = cur.right; }
        //     }
        // }
    };

    
    BST.prototype.inOrder = function(node) {
        if (!node) { return }
        this.inOrder(node.left)
        console.log(node.data);
        this.inOrder(node.right)
    };

    
    BST.prototype.preOrder = function(node) {
        if (!node) { return }
        console.log(node.data);
        this.preOrder(node.left)
        this.preOrder(node.right)
    };

    
    BST.prototype.postOrder = function(node) {
        if (!node) { return }
        this.postOrder(node.left)
        this.postOrder(node.right)
        console.log(node.data);
    };

    // ~~~~~~~~~~ Assignment II ~~~~~~~~~~

    BST.prototype.getMin = function() {
        let cur = this.root
        while (cur.left) {
            cur = cur.left
        }
        return cur
    }

    BST.prototype.getMax = function() {
        let cur = this.root
        while (cur.right) {
            cur = cur.right
        }
        return cur
    }

    BST.prototype.fimd = function(node) {
        if (this.root.data === node) { return this.root }
        let cur = this.root
        while (cur) {
            if (node < cur.data) { cur = cur.left } 
            if (node > cur.data) { cur = cur.right }
            if (node === cur.data) { return cur }
        }
        return -1;
    }


    return BST;
})();

module.exports = BST;