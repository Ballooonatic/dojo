function bubbleSort(arr) {
    let isSorted = false;
    while (!isSorted) {
        let swapCount = 0;
        for (let i = 0; i < arr.length-1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapCount++;
            }
        }
        if (!swapCount) isSorted = true;
    }
    return arr;
}

// console.log(bubbleSort(['zucc', 'dicc', 'walcc', 'blacc boi', 'drincc', 'thancc', 'succ', 'thicc', 'sticc', 'protecc', 'attacc']))
// console.log(bubbleSort([90,3,56,29,5,7,34,88,-40,0,-3,7,-55,60,-4]))

// CD Solution:

function BuBbLeSoRt (arrr) {
    for (let i = 0; i < arrr.length - 1; i++) {
        for (let j = 0; j < arrr.length - 1 - i; j++) {
            if (arrr[j] > arrr[j + 1]) {
                swap(arrr, j, j + 1)
            }
        }
    }
    return arrr;
}

function swap(ar, idxOne, idxTwo) {
    let temp = ar[idxOne];
    ar[idxOne] = ar[idxTwo];
    ar[idxTwo] = temp
}

// console.log(BuBbLeSoRt([90,3,56,29,5,7,34,88,-40,0,-3,7,-55,60,-4]))

// But CD said they were still doing iterations they didn't need to do in the best case scenario. So there's room to improve

function betterBubble(array) {
    var count = 0;
    do {
        var swapping = false;
        for (let j = 0; j < array.length - 1 - count; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1)
                swapping = true;
            }
        }
    } while (swapping === true)
    return array;
}

// console.log(betterBubble([90,3,56,29,5,7,34,88,-40,0,-3,7,-55,60,-4]))