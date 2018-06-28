function Node(chr, value) { 
    this.chr = chr;
    this.value = value;
    this.next = [];
}


function Trie() {
    this.root = new Node("A", null);
}

/*
{
    root: Node {
        chr: A,
        next: [Node {
            chr: N,
            next: [Node {
                chr: D,
                next: [Node{
                    chr: R,
                    next: [Node {
                        chr: E,
                        next: 
                    }]
                }, Node {
                    chr: Y,
                    value: "amazing"
                }]
            }]
        }]
    }
}
*/

Trie.prototype.insert = function(word, value) {
    // first implementation seemed to work..
    
    // if (word[0] !== this.root.chr) return;

    // else if (!this.root.next[0]) {
    //     let cur = this.root
    //     for (let i = 0; i < word.length; i++) {
    //         cur.chr = word[i]
    //         cur.next.push(new Node(word[i + 1], null))
    //         cur = cur.next[0]
    //     }
    //     cur.value = value
    // }

    // else {
    //     let cur = this.root
    //     for (let i = 0; i < word.length - 1; i++) { // - 1?
    //         if (word[i + 1] === cur.next.chr) {
    //             cur = cur.next[0]            
    //         } 
    //         else {
    //             cur.next.push(new Node(word[i + 1], null))
    //             cur = cur.next[cur.next.length - 1]
    //         }
    //     }
    //     cur.value = value
    // }

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
    word = word.toUpperCase()
    if(!this.root.next) return null;
    let cur = this.root
    for (let i = 1; i < word.length; i++) {
        let found = false
        for (let j = 0; j < cur.next.length; j++) {
            if (word[i] === cur.next[j].chr) {
                cur = cur.next[j]
                found = true
            }
        }
        if (!found) {
            cur = null
            break;
        }
    }
    if(cur && cur.value) { return cur.value; }
    else { return "Not Found"; }
}


var trie = new Trie(); 

trie.insert("ANDREW", "awesome"); 
trie.insert("ANDY", "amazing"); 
trie.insert("ANT", "what");

console.log(trie.get("ANDY")); 
console.log(trie.get("ANDREW")); 
console.log(trie.get("ANT"));