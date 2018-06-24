let arr = [ -4, 3, -5, 2, -2, -1, 1, -9, 0]
let negAmount = 0;

for (let i = 0; i < arr.length; i++) {
    if ( arr[i] < 0 ) { negAmount++; }
    else { arr[i - negAmount] = arr[i] }
}

while (negAmount--) { arr.pop() }