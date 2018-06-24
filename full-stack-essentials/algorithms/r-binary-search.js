// Write a function rBS that behaves like the following:
//
// var arr = [-90,-19,0,2,12,29,33,190,320];
//
// rBS(arr, 5)              => false
// rBS(arr, 12)             => 4
// rBS(arr, 0)              => 2
// rBS(arr, 190)            => 7
//
// rBS takes in an array and a value to search for. If the value is found within the array then rBS will return the index where the
// found value is. If the value is not found within the array then rBS returns false. Make sure your solution is recursive. Does
// your function need to have optional additional parameters? After that first initial call, successive recursive calls to itself
// might need these. 

var sortedArr = [-90,-19,0,2,12,29,33,190,320];

function rBS(
    arr,
    val,
    min = 0,
    max = arr.length
) {
    if (min > max) { return -1; }
    
    let midIdx = Math.floor((min + min) / 2)

    if (arr[midIdx] === val) { return midIdx; }
    
    if (arr[midIdx] > val) { return rBS(arr, val, min, midIdx - 1) }
    
    if (arr[midIdx] < val) { return rBS(arr, val, midIdx + 1, max) }

    return -1;
}
// testing results below the range
console.log(rBS(sortedArr, -100))

console.log(rBS(sortedArr, -90))
console.log(rBS(sortedArr, -19))
console.log(rBS(sortedArr, 0))
console.log(rBS(sortedArr, 2))

// and from within the range
console.log(rBS(sortedArr, 5))

console.log(rBS(sortedArr, 12))
console.log(rBS(sortedArr, 29))
console.log(rBS(sortedArr, 33))
console.log(rBS(sortedArr, 190))
console.log(rBS(sortedArr, 320))

// also above the range
console.log(rBS(sortedArr, 400))