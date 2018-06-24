// Given an array of multiple values (e.g. [0, -1, 2, -3, 4, -5, 6]), write a program that removes any negative values in that array.
// Once your program is done, the array should be composed of only the non-negative numbers, in their original order.
// Do this without creating a temporary array; only use the pop() method to remove values from the array.

// I'm gonna decide to treat the 0 inclusively with this assignment.

let arr = [ -4, 3, -5, 2, -2, -1, 1, -9, 0]
let negAmount = 0;
let overwriteIdx = 0;


// First let's count how many negatives are in the array
for ( let i = 0; i < arr.length; i++ ) {
    if ( arr[i] < 0 )  { negAmount++; }
}


// Now let's find out exactly where to start overwriting the negative numbers
for ( let i = 0; i < arr.length; i++ ) {
    if ( arr[i] < 0 ) { 
        overwriteIdx = i;
        break;
    }
}

// Now we insert each "positive" value we find at the overwrite index, incrementing the overwrite index each iteration
for ( let i = 0; i < arr.length; i++ ) {
    if ( arr[i] >= 0 && overwriteIdx < i) {
        arr[overwriteIdx] = arr[i];
        overwriteIdx++;
    }
}


// Finally, we pop off a value from the array for each negative boi we found.
for (let i = 0; i < negAmount; i++) {
    arr.pop()
}


// crossFingers()
console.log(arr)
