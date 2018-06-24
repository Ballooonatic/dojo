function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        console.log(arr)
        let el = arr[i], k = i
        while (k > 0 && arr[k-1] > el) {
            arr[k] = arr[k-1]
            k = k - 1
        }
        arr[k] = el
    }
    return arr;
}

// let array = [];
// for (let i = 22; i >= 0; i--) {
//     array.push(i)
// }
    
let array = [1,3,56,29,5,7,34,88,-40,0,-3,7,-55,60,-4];
// console.log("Starting array:", array);

console.log(insertionSort(array))