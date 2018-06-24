# CS Foundations

At some point we came up with a _positional number system_, the one we use today. They told me it was a guy named Algorithmi, but I'm too lazy to look that one up. You know, we use the digits 0-9 and combine/rearrange them to represent different values. So once you reach past 9, you start over at zero but with a 1 next to it. The big deal about this number system is this:

In decimal notation, you have a 1's place, 10's place, 100's place, and so on. Let's look at the number '326.7'. 3 in the 100's place, 2 in the 10's place, 6 in the 1's place, and 7 in the tenth's place. Let's break this down visually

3 * 10^2 +
2 * 10^1 +
6 * 10^0 +
7 * 10^-1

That's why we call it decimal notation, because it is based off the number 10 this way. But why did we choose 10? Truly, we could've chosen anywhere to start over, but we picked 10. Perhaps we're biased on account of the number of fingers we have? Maybe it's not so bad a theory; it does make counting easier especially when learning. Imagine if we had one based on 7. it would (probably) look like this:

On the right, with the squigglies, are the numbers represented in decimal.

0
1
2
3
4
5
6
10   ~ 7
11   ~ 8
12   ~ 9
13   ~ 10
14   ~ 11
15   ~ 12
16   ~ 13
20   ~ 14

Ugh.

## Binary

This is the whole point of relearning the concept. Because computers have two "fingers". On, and off. True, and False. One, and zero. So to make them count, we used the same positional number system believe it or not, but based on 2! We call each digit a _bit_.

0   ~ 0
1   ~ 1
10  ~ 2
11  ~ 3
100 ~ 4
101 ~ 5
110 ~ 6
111 ~ 7

So now that we know this, we can understand conversion to decimal from powers of 2. Let's check out this number

101110011

What value is that? Let's lay it out flat so we can sanely process the places

1 * 2^0  =>  1   +
1 * 2^1  =>  2   +
0 * 2^2  =>  0   +
0 * 2^3  =>  0   +
1 * 2^4  =>  16  +
1 * 2^5  =>  32  +
1 * 2^6  =>  64  +
0 * 2^7  =>  0   +
1 * 2^8  =>  256

= 371

Now let's try converting from decimal to binary, with our good friend 237. Since 128 is the biggest value that goes into it, we put a one there, and subtract it from 237. Rinse, and repeat

1    ~  1
2    ~  0
4    ~  1
8    ~  1
16   ~  0
32   ~  1
64   ~  1
128  ~  1
256  ~  0

237 - 128 =
109 - 64 =
45 - 32 =
13 - 8 =
5 - 4 =
1

Surprisingly enough, the systems for addition, multiplication, subtraction, and division also work in binary as well! But I don't feel a need to get into that one.

### Signed / Unsigned Int

So... How do we do negatives with two digits? Well

Unsigned integers use all of its bits to represent as many positive numbers as possible. Signed integers, on the other hand, reserve some of its bit combinations to represent negative numbers. Go ahead and look at the image below to see how unsigned and sign integers use the three bits different to represent different things.

unsigned ~ binary rep. ~ signed

    3        011           3
    2        010           2
    1        001           1
    0        000           0
    7        111           -1
    6        110           -2
    5        101           -3
    4        100           -4

Oh god.

## ASCII

Well, we kind of pretty much get how 1's and 0's represent all the numbers to a computer, but wait. What about letters? How in the hell do we represent "A"? "$"? "*&^%$#@"? "'"? "?"?

I mean, we kinda obviously have to assign numbers to them. But it's not just gonna be 26 letters. We need uppercase, lower case, special characters AND the digits. Spaces, newlines, yeah.

However we decide to assign those numbers is ultimately arbitrary. So it was a problem in the 60's/70's getting communication done with all kinds of machines doing different encodings. ANSI, the American National Standards Institute, formed a standard: the American Standard Code for Information Interchange, ASCII.

ASCII was designed as a 7-bit encoding. This allows for 128 different combinations to assign a character. But let's count what we need.

a-z   = 26 lowercase
A-Z   = 26 uppercase
0-9   = 10 digits
.,:;? = 32 specials
" "   = 1 space.

that's 95 total characters. What's left? There's 33 spaces left! Well, we need our _control characters_ to work too. Return, backspace, command, option, shift, arrows, escape, f1-12, tab, capslock, "fn", NULL, and even more stuff that was more prevalent in the past...

But then we have international characters too, emojis and such. Which is why we have Unicode(!) which I think takes care of everything.

## Bit Manipulation

Bit manipulation is often used for low-level programming such as encryption and compression. As programmers, we are turning lightbulbs on and off by running commands. These commands run specific operations on individual bits.

Fun Fact: Addition, subtraction, multiplication and division actually work in binary the same way as in decimal notation, because both notations are based off the same positional number system. However, I don't wanna write those out here because I think they'd be too hard to explain in plain text. Instead, I wanna get into the insane fun of applying boolean logic to binary!

### AND

We're going to take two numbers, convert them to binary, and then perform & on each column. But first, let's underst(and) `AND`.
Logically, `AND` evaluates to `true` only when all inputs are `true`.

Truth Table:
x y x&y
0 0 0
1 0 0
0 1 0
1 1 1

So, if we have x = 60 and y = 13, then x&y = 12! Wait, what?

x = 60 = 111100
y = 13 = 001101

x & y  = 001100 = 12

Performing & on each bit, you only have a 1 when both columns are 1.

### OR

`OR` evaluates `true` when any input of all is `true`.

Truth table:
x y x|y
0 0 0
1 0 1
0 1 1
1 1 1

x = 60 = 111100
y = 13 = 001101
x | y  = 111101 = 61

### XOR

`XOR` evaluates `true` when any inputs differ... I think.

Truth table:
x y x^y
0 0 0
1 0 1
0 1 1
1 1 0

x = 60 = 111100
y = 13 = 001101
x ^ y  = 110001 = 49

### Shift

Shifting is weird. But, like it sounds, it shifts all the bits right or left. Right: `>>`, Left: `<<`
We'll represent our numbers in 8-bit this time.

x = 60 = 0011 1100

x >> 2 = 0000 1111 = 15

x << 2 = 1111 0000 = 240

### NOT

`NOT` evaluates `true` when the input is `false`.

One might think that since this involves flipping all the values, it might matter how many bits we have. Well, this is only true if you're staying unsigned which I think is a felony offense of some sort. Because going signed will leave you the same answer regardless of bits, since counting negatives is the exact same as counting in binary normally, except it's the opposite. And instead of starting from 0, you start from -1, which is why we add 1 in this process.

x = 60 = 0000 0000 0011 1100

~x     = 1111 1111 1100 0011

So.. in the Coding Dojo video, the guy says to figure out this number, you take the first number (60) and add 1 to it, and then make it negative. I'm not sure how this would work out if it were something like 63 (111111) with a ton of 1's. I guess we're converting to signed too? Is that what happens with each `NOT`? They didn't say. For what it's worth, I would've expected ~x to come out 65475