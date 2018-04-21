// Write a function called zero_negativity(). This function should take an array.
// Return true if the input array contains no negative numbers, return false if it does.

function zero_negativity(arr){
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            return false;
        }
    }
    return true;
}




// Write a function called is_even(). This function should take a number.
// Return true if the input number is even, return false if the number is odd.

let is_even = function(n){
    if (n % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}




// Write a function called how_many_even(). This function should take an array.
// Return the total number of elements in the array that are even. You may call is_even() to solve this.

let how_many_even = (arr) => {
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (is_even(arr[i])) {
            sum++;
        }        
    }
    return sum;
}




// Write a function called create_dummy_array(). This function should take a number n. 
// Return an array of random numbers between 0 and 9 with the length of n.

function create_dummy_array(n) {
    var dummy_array = [];
    for (let i = 0; i < n; i++) {
        let rand = Math.floor(Math.random() * 10)
        dummy_array.push(rand);
    }
    return dummy_array;
}




// Write a function called random_choice(). This function should take an array.
// Return a random element of the array, based on its length. This function should never return undefined.

let random_choice = function(arr){
    var idx = Math.floor(Math.random() * arr.length)
    return arr[idx];
}