// // i think this is the first one they're letting me do !(in place)

// function mergeArrays(arrOne, arrTwo) {
//     let mergedArr = [];
//     for (let i = 0; i < arrOne.length + arrTwo.length; i++) {
//         if (arrOne[i] < arrTwo[i]) {
//             mergedArr.push(arrOne[i])
//             mergedArr.push(arrTwo[i])
//         }
//         else {
//             mergedArr.push(arrTwo[i])
//             mergedArr.push(arrOne[i])            
//         }
//     }
//     return mergedArr
// }

// function mergeSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = [arr[i]]
//     }
//     for (let i = 0; i < arr.length; i++) {
//         mergeArrays(arr[i], arr[i + 1])
//     }
//     return arr;
// }

// let uArr = [5, 4, 3, 2, 1]

// console.log(mergeSort(uArr))



// I'm abandoning that

function mergeSort(arr) {
    // let mid = Math.floor(arr.length / 2); Believe it or not, I haven't seen this to matter
    let mid = arr.length / 2;
    if (arr.length < 2) return arr;
    else {
        let left = arr.slice(0, mid);
        let right = arr.slice(mid);
        return merge( mergeSort(left), mergeSort(right) );
    }
}

function merge(left, right) {

    let newArr = []
    
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            newArr.push(left.shift());
        }
        else { 
            newArr.push(right.shift());
        }
    }
    
    return newArr.concat(left.concat(right));
}



let array = [], i = 0

while (i++ < 20) {
    array.push(Math.floor(Math.random() * 100));
}

// while (i++ < 100) {
//     array.push(Math.random() * 100);
// }

console.log(mergeSort(array))

console.log("\n");