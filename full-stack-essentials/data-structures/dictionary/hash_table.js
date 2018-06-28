var Trie = require('./trie');

var HashTable = (function(){
  function HashTable() {
    this.table = new Array(26);
  }

  HashTable.prototype.buildLinks = function() {
    for(var i = 0; i < this.table.length; i++) {
      this.table[i] = [];
    }
  }

  HashTable.prototype.linkBuilt = function() {
    var first = this.table[0];
    if (first === undefined || first.constructor.name !== "Array") {
      return false;
    } else {
      return true;
    }
  }

  HashTable.prototype.buildTries = function() {
    var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    for(var i = 0; i < this.table.length; i++) {
      this.table[i] = new Trie(alphabet[i]);
    }
  }

  HashTable.prototype.trieBuilt = function() {
    var isTrie = true;
    for (let i = 0; i < this.table.length; i++) {
      if (!this.table[i] || this.table[i].constructor !== Trie) {
        isTrie = false
      }
    }
    return isTrie
  }

  HashTable.prototype.simpleHash = function(data) {
    return data.charCodeAt() - 65;
  }

  HashTable.prototype.betterHash = function(data) {
    var sum = 0;
    for (var i = 0; i < data.length; i++) {
      sum += data[i].charCodeAt();
    }
    return sum % 26;
  }

  HashTable.prototype.simplePut = function(data) {
    this.table[this.simpleHash(data)] = data;
  }

  HashTable.prototype.linkPut = function(data) {
    if (this.linkBuilt() === false) {
      this.buildLinks();
    }

    var loc = this.simpleHash(data);

    if (this.table[loc] !== undefined) {
      this.table[loc].push(data);
    } else {
      this.table[loc] = data;
    }
  }

  HashTable.prototype.triePut = function(key, value) {
    if (!this.trieBuilt()) {
      this.buildTries()
    }
    var loc = this.simpleHash(key)

    this.table[loc].insert(key, value)
  }

  HashTable.prototype.trieGet = function(key) {
    var loc = this.simpleHash(key.toUpperCase())

    if (this.table[loc] && this.table[loc].constructor === Trie) {
      return this.table[loc].get(key)
    }
  }

  HashTable.prototype.showDistribution = function() {
    for(var i = 0; i < this.table.length; i++) {
      console.log(this.table[i]);
    }
  }

  return HashTable;
})();

module.exports = HashTable;
