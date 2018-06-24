function quiccSort(arr) {
    if (arr.length > 1) {
        let left = [], right = [], pivot = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < pivot) { left.push(arr[i]); }
            if (arr[i] > pivot) { right.push(arr[i]); }
        }
        return quiccSort(left).concat([pivot]).concat(quiccSort(right))
    }
    return arr;
}





let array = [], i = 0

while (i++ < 20) {
    array.push(Math.floor(Math.random() * 100));
}

// while (i++ < 100) {
//     array.push(Math.random() * 100);
// }

console.log(quiccSort(array))

console.log("\n");

/*



~~~ call 1 ~~~

arr   = [3, 1, 2, 5, 4]
left  = [1 2]
right = [5 4]
pivot = 3
i     = 1





~~~ call 2.left ~~~ RETURNS [1, 2]

arr   = [1 2]
left  = []
right = [2]
pivot = 1
i     = 1


~~~ call 2.right ~~~ RETURNS [4, 5]

arr   = [5 4]
left  = [4]
right = []
pivot = 5
i     = 1



*/