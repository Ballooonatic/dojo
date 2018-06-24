// We loop from 0 to the middle of the array, swapping the first with the last, the second with the second last, and so on.

let arr = [1, 2, 3, 4, 5, 6, 7];

let arrayMiddle = arr.length / 2;

let bottomIdx   = 0;
let topIdx      = arr.length - 1;

console.log(arr);


while (bottomIdx < arrayMiddle) {
    
    // This bad boy swaps the values. [a, b] = [b, a]
    [ arr[bottomIdx], arr[topIdx] ] = [ arr[topIdx], arr[bottomIdx] ];
    
    bottomIdx++;
    topIdx--;
    
    console.log(arr);
}