var Stacc = (function(){
    function Stacc() {
        this.dataStore = [];
        this.top = 0;
    }
    Stacc.prototype.pushie = function(item) {
        this.dataStore[this.top] = item;
        this.top++;
    }
    Stacc.prototype.popp = function() {
        this.dataStore.length--;
        this.top--;
    }
    Stacc.prototype.display = function() {
        console.log(this.dataStore)
        console.log(this.top)
    }
    return Stacc;

  })();
//   module.exports = Stacc;

var array = new Stacc();


array.pushie(3)
array.display()
console.log("\n");


array.popp()
array.display()
console.log("\n");


for (let i = 0; i < 10; i++) {
    array.pushie(i)
}
array.display()
console.log("\n");


for (let i = 0; i < 5; i++) {
    array.popp()
}
array.display()
console.log("\n");