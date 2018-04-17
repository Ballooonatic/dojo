// Make a function that copies an array, ONLY accepting the items that are numbers.

// IT SHOULD RETURN A NEW ARRAY

// Bonus (Only If You Have Time):

// Make a second function that removes them from the given array. (instead of copying to a new array)
var mixedArray = [1, "apple", -3, "orange", 0.5];

function numbersOnly(array) {
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] !== "number") {
            for (let x = i; x < array.length - 1; x++) {
                array[x] = array[x + 1];
            }
            array.pop();
        }
    }
    return array;
}