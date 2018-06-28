var Node = require('./trie_node');

var Trie = (function() {
  function Trie(chr) {
    this.root = new Node(chr, null);
  }

  Trie.prototype.insert = function(word, value) {
    word = word.toUpperCase();
    var current = this.root;

    for(var i = 1; i < word.length; i++) {
      var found = false;

      for(var j = 0; j < current.next.length; j++) {
        if(current.next[j].chr == word[i]) {
          current = current.next[j];
          found = true;
        }
      }

      if(found == false) {
        var node = new Node(word[i], null);
        current.next.push(node);
        current = node;
      }
    }
    current.value = value;
  }

  Trie.prototype.get = function(word) {
    word = word.toUpperCase();
    var current = this.root;

    for(var i = 1; i < word.length; i++) {
      var found = false;

      for(var j = 0; j < current.next.length; j++) {
        if(current.next[j].chr == word[i]) {
          current = current.next[j];
          found = true;
        }
      }

      if(found === false) {
        current = null;
        break;
      }
    }

    if(current && current.value) {
      return current.value;
    } else {
      return "Not Found";
    }
  }

  return Trie;
})()

module.exports = Trie;
