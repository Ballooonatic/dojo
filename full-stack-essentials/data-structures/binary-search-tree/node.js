var Node = (function(){

    function Node(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
  
    Node.prototype.show = function() {
        return this.data;
    }
  
    return Node;
})();

module.exports = Node;