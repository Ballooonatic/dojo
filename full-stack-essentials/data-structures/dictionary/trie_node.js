var Node = (function(){

  function Node(chr, value) {
    this.chr = chr;
    this.value = value;
    this.next = [];
  }

  return Node;
})();

module.exports = Node;
