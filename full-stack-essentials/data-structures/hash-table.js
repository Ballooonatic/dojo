// Step 1: Implement the simpleHash, simplePut function

// Step 2: Implement linkPut which will create arrays for each key to deal with collisions

// Step 3: Implement a betterHash function that will result in a more widely distributed hash table

function HashTable() {
    // given fixed size of array of 26 slots
    this.table = new Array(26);
}

HashTable.prototype.buildLinks = function() {
    // set an empty array for all indexes in this.table
    for(var i = 0; i < this.table.length; i++) {
        this.table[i] = [];
    }
}

HashTable.prototype.linkIsBuilt = function() {
    // determines if links have been built yet
    var first = this.table[0];
    if (first === undefined || first.constructor.name !== "Array") {
        return false;
    } else {
        return true;
    }
}

HashTable.prototype.simpleHash = function(data) {
    // determines the hash value given data
    // how can we use the ASCII values to find appropriate data (use charCodeAt())
    return data.charCodeAt(0) - 65
    // I have no idea why this works. it should be - 97 to return array indeces 0-25, rather than 32-57
}

HashTable.prototype.betterHash = function(data) {
    // how can we write a better Hash using ASCII values?
    var sum = 0;
    for (var i = 0; i < data.length; i++) {
        sum += data[i].charCodeAt();
    }
    return sum % 26;
    // I tried running this in linkPut. Totally messed everything up.
}

HashTable.prototype.simplePut = function(data) {
    // place data in appropriate place by using simpleHash
    this.table[this.simpleHash(data)] = data;
}

HashTable.prototype.linkPut = function(data) {
    // build links if not built yet and place data in the right place
    if (!this.linkIsBuilt()) {
        this.buildLinks();
    }

    var loc = this.simpleHash(data);
    // var loc = this.betterHash(data);

    if (this.table[loc] !== undefined) {
        this.table[loc].push(data);
    } else {
        this.table[loc] = data;
    }
}

HashTable.prototype.showDistribution = function() {
    // shows distribution of hash table
    for(var i = 0; i < this.table.length; i++) {      
        console.log(this.table[i]);    
    }
}

var names = ["Tony", "Tori", "Kate", "Kyle", "Thomas", "Dale", "David", "Daisy", "Andy", "Albert", "Dane", "Shane", "Lane", "Janet", "Katelyn", "Janet", "Vivian", "Joe"];

// var simpleHashTable = new HashTable();

// for(var i = 0; i < names.length; i++) {
//     simpleHashTable.simplePut(names[i]);
// }

// simpleHashTable.showDistribution();

var betterHashTable = new HashTable();

for(var i = 0; i < names.length; i++) {
    betterHashTable.linkPut(names[i]);
}

betterHashTable.showDistribution();