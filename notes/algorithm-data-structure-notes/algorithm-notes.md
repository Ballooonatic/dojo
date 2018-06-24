# Recursion

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