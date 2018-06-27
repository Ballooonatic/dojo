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

    BST.prototype.getMin = function(node) {
        let cur = node
        while (cur.left) {
            cur = cur.left
        }
        return cur
    }

    BST.prototype.getMax = function(node) {
        let cur = node
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

    // ~~~~~~~~~~ Assignment III ~~~~~~~~~~

    BST.prototype.erase = function(root, node) {
        if (!root) return root;
        else {
            if      (node < root.data) root.left = this.erase(root.left, node);
            else if (node > root.data) root.right = this.erase(root.right, node);
            else {
                if (!root.left && !root.right) {
                    delete root;
                    root = null;
                }
                else if (!root.left) {
                    let temp = root
                    root = root.right
                    delete temp;
                }
                else if (!root.right) {
                    let temp = root
                    root = root.left
                    delete temp;
                }
                else {
                    let temp = this.getMin(root.right)
                    root.data = temp.data
                    root.right = this.erase(root.right, temp.data)
                }
            }
        }
        return root;
    }

    BST.prototype.levelOrder = function () {
        if (this.root === null) return null;
        else {
            var Q = [this.root];
            while (Q.length > 0) {
                cur = Q[0];
                console.log(cur.data);
                if (cur.left) Q.push(cur.left);
                if (cur.right) Q.push(cur.right);
                Q.shift();
            }
        }
    }

    return BST;
})();

module.exports = BST;