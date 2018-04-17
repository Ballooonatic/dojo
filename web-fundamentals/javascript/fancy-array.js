var name_array = ["James", "Jill", "Jane", "Jack"];

function fancyArray(array, list_symbol, reverse) {

    // if they don't pass an array, we yell at them.
    if (array === undefined) {return console.log("you need to give me an array to fancify!");}

    // if list symbol is undefined, not a string, OR an empty string, we use our own.
    if (list_symbol === undefined || list_symbol !== String || list_symbol === "") {list_symbol = "->";}

    // if reverse isn't passed, we iterate through the array and log the index, list symbol and value for each element in the array.
    if (reverse === undefined) {
        for (let i = 0; i < array.length; i++) {
            console.log(i, list_symbol, array[i]);
        }
    }
    // otherwise, if "true" is passed as the third parameter, we start at the top of the array, iterating backwards, stopping at 0.
    else {
        for (let i = array.length - 1 ; i >= 0; i--) {
            console.log(i, list_symbol, array[i]);
        }
    }
}