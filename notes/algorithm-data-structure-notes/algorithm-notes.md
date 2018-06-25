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

### Queue

A queue is a list of elements that are accessible only from the front of the list which is called the front. The queue is known as a first-in, first out (FIFO) data structure. You can think of a queue as the drive-through at [insert business here]. The first car there gets served first and leaves. First in first out. Seems fair. Although .enqueue, and .queue methods are often associated with queues, JavaScript "Arrays" are also queues because it implements the .shift and .unshift() methods.

### Singly Linked List

Remember that an Array is a fixed length of contiguous memory. What if you have more data than you predicted? You can't go outside the bounds of the initial declaration because the computer might have already used the bits next to the Array for something else. What you would have to do is declare a new Array, make it larger this time and store the information. This makes Arrays a pain to use when you don't know how much you are going to store. Linked List is a solution to this problem, although it has some downsides as well. Think of Linked List as a list of objects. Each object has one job, to remember one other person that is after them. This way, all objects are linked once you start from the very first object. You can ask the first object where the next object is and so on. Because Linked Lists aren't the contiguous chunk of memory, we can't find elements as fast as an Array with an index. However, we don't have to worry about predicting exactly how much data that we need.