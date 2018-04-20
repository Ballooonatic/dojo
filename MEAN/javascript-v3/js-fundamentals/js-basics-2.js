// In this assignment, complete the function magic_multiply and ensure it passes all the test inputs and matches their results. 
// Modify magic_multiply until all the tests pass. Do not create a new magic_multiply for each test!

function magic_multiply(x, y){

    if (x === 0 && y === 0) {        
        return "All inputs 0";
    }

    else if (y.constructor === String) {
        return console.error("Error: Can not multiply by string");
    }

    else if (x.constructor === Array) {
        for (let i = 0; i < x.length; i++) {
            x[i] *= y;
        }
    }

    else if (x.constructor === String) {
        let temp = x;
        for (let i = 1; i < y; i++) {
            x += temp;
        }
    }

    else {
        x *= y;
    }

    return x;
}


let test1 = magic_multiply(5, 2);
console.log(test1);
// => 10

let test2 = magic_multiply(0, 0);
console.log(test2);
// => "All inputs 0"

let test3 = magic_multiply([1, 2, 3], 2);
console.log(test3);
// => [2, 4, 6]

let test4 = magic_multiply(7, "three");
console.log(test4);
// => "Error: Can not multiply by string"

let test5 = magic_multiply("Brendo", 4);
console.log(test5);
// => "BrendoBrendoBrendoBrendo"