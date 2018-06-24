function rFib(n) {
    if(n === 0) { return 0 }
    if(n === 1) { return 1 }
    return rFib(n - 1) + rFib(n - 2)
}

// console.log(
//     rFib(0),
//     rFib(1),
//     rFib(2),
//     rFib(3),
//     rFib(4),
//     rFib(5),
//     rFib(6),
//     rFib(7),
//     rFib(8),
//     rFib(9)
// )

// console.log('\n')





// CD Solution:

function recursiveFibonacci(n) {
    if (n === 1 || n === 2) { return 1; }
    else { return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2) }
}

// console.log(
//     // recursiveFibonacci(0), This one don't work. Dinguses.
//     recursiveFibonacci(1),
//     recursiveFibonacci(2),
//     recursiveFibonacci(3),
//     recursiveFibonacci(4),
//     recursiveFibonacci(5),
//     recursiveFibonacci(6),
//     recursiveFibonacci(7),
//     recursiveFibonacci(8),
//     recursiveFibonacci(9)
// )

// console.log('\n')