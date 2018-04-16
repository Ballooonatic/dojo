function rangePrint(start, end, skip) {
    
    // if there're no params, we yell at them.
    if (!start && !end && !skip) {console.log("You need to pass parameters for the function to work. (starting point, end point, increment value");}
    
    // if skip is negative, we yell at them.
    else if (skip < 0) {console.log("skip can't be negative!");}
    
    // if they pass no skip value, use 1.
    else if (start !== undefined && end !== undefined && skip === undefined) {
        if (end > 0) {
            for (let i = start; i < end; i += 1) { // up
                console.log(i);
            }
        }
        else {
            for (let i = start; i > end; i -= 1) { // or down
                console.log(i);
            }
        }
    }
    
    // if only one parameter is passed, we start from 0 and increment in 1's...
    else if (start !== undefined && end === undefined && skip === undefined) {
        if (start > 0) {
            for (let i = 0; i < start; i += 1) { //either up...
                console.log(i);
            }
        }

        else {
            for (let i = 0; i > start; i -= 1) { //or down.
                console.log(i);
            }
        }
    }
    
    // if the endpoint passed is negative, then we increment down.
    else if (end < 0) {
        for (let i = start; i > end; i -= skip) {
            console.log(i);
        }
    }
    
    // otherwise, the function runs as originally intended.
    else {   
        for (let i = start; i < end; i += skip) {
            console.log(i);
        }
    }
}