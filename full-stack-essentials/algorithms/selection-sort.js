function mySelectionSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        
        let min = arr[i];
        
        for (let j = i; j < arr.length; j++) {

            if (arr[j] < min) { min = arr[j]; }
        }
        if (arr[i] < min) { [arr[i], min] = [min, arr[i]]; }
    }
    return arr;
}

function cs50selectionSort(arr) {

    for (let i = 1; i < arr.length - 1; i++) {

        let min = i;
        
        for (let j = i + 1; j < arr.length; j++) {

            if (arr[j] < arr[min]) min = j;
        }
        if (min !== i) [arr[min], arr[i]] = [arr[i], arr[min]]
    }
    return arr;
}

function dojoSelectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        
        let min = i;
        
        for (let j = i; j < arr.length; j++) {

            if (arr[j] < arr[min]) { min = j; }
        }
        if (min !== i) { [arr[i], arr[min]] = [arr[min], arr[i]]; }
    }
    return arr;
}


console.log(mySelectionSort([5,4,3,2,1]))
console.log(cs50selectionSort([5,4,3,2,1]))
console.log(dojoSelectionSort([5,4,3,2,1]))