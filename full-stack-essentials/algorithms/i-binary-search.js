function iBS(arr, val) {

    var min = 0;
    var max = arr.length - 1;
    var mid = arr.length / 2;
    
    while (min <= max) {
        mid = Math.floor((min + max) / 2)
        if (arr[mid] > val) max = mid - 1; 
        if (arr[mid] < val) min = mid + 1;
        if (arr[mid] === val) return mid; 
    }

    return false;
}

var sortedArr = [-250, -232, -192, -154, -132, -90, -35, -20, -4, 5, 40, 65, 82, 102, 150, 178, 216, 247];

console.log(iBS(sortedArr, -300)); //out
console.log(iBS(sortedArr, -250));
console.log(iBS(sortedArr, -232));
console.log(iBS(sortedArr, -192));
console.log(iBS(sortedArr, -154));
console.log(iBS(sortedArr, -132));
console.log(iBS(sortedArr, -90));
console.log(iBS(sortedArr, -35));
console.log(iBS(sortedArr, -20));
console.log(iBS(sortedArr, -4));
console.log(iBS(sortedArr, 0)); // out
console.log(iBS(sortedArr, 5));
console.log(iBS(sortedArr, 40));
console.log(iBS(sortedArr, 65));
console.log(iBS(sortedArr, 82));
console.log(iBS(sortedArr, 102));
console.log(iBS(sortedArr, 150));
console.log(iBS(sortedArr, 178));
console.log(iBS(sortedArr, 216));
console.log(iBS(sortedArr, 247));
console.log(iBS(sortedArr, 250)); // out