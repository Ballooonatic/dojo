function iFib(n) {

    let i         = 0;
    let fib       = 0;
    let nacci     = 1;

    while (i < n) {
        let fibonacci = fib + nacci;
        fib = nacci;
        nacci = fibonacci;
        i++;
    }

    return fib;
}



console.log(
    iFib(0),
    iFib(1),
    iFib(2),
    iFib(3),
    iFib(4),
    iFib(5),
    iFib(6),
    iFib(7),
    iFib(8),
    iFib(9)
)

// console.log('\n')



// CD solution:

function iterativeFibonacci(n) {
    var fibs = [0, 1]

    for (let i = 0; i < n; i++) {
        fibs.push( fibs[0] + fibs[1] )     
        fibs.shift()   
    }

    return fibs[0]
}