var HashTable = require('./hash_table');
var words = require('./dictionary.json');

var dictionary = new HashTable();

for(word in words) {
  var safeWord = word.replace(/\W/g, '')
  if(safeWord.length > 0) {
    dictionary.triePut(safeWord, words[word]);
  }
}

// dictionary.showDistribution();

console.log(dictionary.trieGet("rectovaginal"))

// console.log(dictionary.trieGet("very"))
// console.log(dictionary.trieGet("vatican"))
// console.log(dictionary.trieGet("vapid"))
// console.log(dictionary.trieGet("vet"))
// console.log(dictionary.trieGet("veteran"))
// console.log(dictionary.trieGet("vex"))
// console.log(dictionary.trieGet("vexing"))
// console.log(dictionary.trieGet("veal"))
// console.log(dictionary.trieGet("vendor"))
// console.log(dictionary.trieGet("vendee"))
// console.log(dictionary.trieGet("vent"))
// console.log(dictionary.trieGet("vegetable"))
// console.log(dictionary.trieGet("vehement"))
// console.log(dictionary.trieGet("vehemently"))
// console.log(dictionary.trieGet("viridian"))
// console.log(dictionary.trieGet("vortex"))
// console.log(dictionary.trieGet("voluntary"))
// console.log(dictionary.trieGet("voluptuous"))
// console.log(dictionary.trieGet("voodoo"))