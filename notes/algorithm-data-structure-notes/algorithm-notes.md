# Algorithm & Data Structure

## Recursion

So recursion is when you use a function that calls itself. So keep the stack from overflowing, ya gotta have a base case. If you don't make sure it stops somewhere by its own nature, it'll run forever and cause problems. For example, here's a recursive function that returns the sum of all numbers from 1 to n. Since n is subtracted each recursion, it'll stop at 1.

```js
function rSum(n) {
    if (n === 1) { return 1; }
    else { return rSum(n - 1) + n; }
}
```

...It only works with n as a positive integer.

Here's an example of a factorial function done iteratively and recursively.

```js
function iFac(n) {
    let product = 1;
    while(n >= 1) {
        product *= n
        n--;
    }
    return product;
}
```

```js
function rFac(n) {
    if (n === 1) { return 1; }
    else { return rFac(n - 1) * n; }
}
```

## Data Structures

### Stack

A stack is a list of elements that are accessible only from one end of the list, which is called the top. The stack is known as a last-in, first out (LIFO) data structure. You can think of it as a stack of trays. When people come to pick the tray up, they pick the tray that is all the way at the top, which also happens to be the last one placed. Another example is a function stack. Every time a function gets called before returning, a new stack of memory gets placed on top of the previous stack. Then the last called function returns first and so on. "Arrays" in JavaScript are also stacks because it .push and .pop methods which are associated with the stack data structure.