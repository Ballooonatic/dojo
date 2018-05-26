// For this assignment, I will be putting the instructors' comments in quotations for clarity.


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 1 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Was initially set to be a string. I changed it to "any"
var myString: any;

// "I can assign myString like this:"
myString = "Bee stinger";

// "Why is there a problem with this? What can I do to fix this?"
myString = 9;

// You can't retype the variable, but you can declare it as "any" from the start, if you like.

// Alternatively, you could set it to "9", if it must be a string.
// In this case, feel free to change the declaration above
myString = "9"



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 2 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function sayHello(name: string){
    return `Hello, ${name}!`;
}

// "This is working great:"
console.log(sayHello("Kermit"));

// "Why isn't this working? I want it to return 'Hello, 9!'"
console.log(sayHello("9"));

// I changed the number above to "9" instead of 9. This is pretty much the same as the last assignment.
// Either change the type to "any" up above, or do this. I think it outputs the same.



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 3 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// I added the question mark at the middleName parameter to signify it as optional
function fullName(firstName: string, lastName: string, middleName?: string){
    
    // I also had to change both fullNames to vars instead of using let.
    var fullName = `${firstName} ${middleName} ${lastName}`;

    // I also added this if check to make sure it doesn't return "fullName undefined lastName" in the event of a missing middleName
    if (!middleName) {
        var fullName = `${firstName} ${lastName}`
    }

    return fullName;
}
 
// "This works:"
console.log(fullName("Mary", "Moore", "Tyler"));
 
// "What do I do if someone doesn't have a middle name?"
console.log(fullName("Jimbo", "Jones"));


// Believe it or not, I actually found a use for var over let today. Lol when it was using let, the transpiler would convert the
// fullNames to fullName_1, fullName_2, etc, favoring creating a new pointer rather than rewriting the one like I wanted. 
// Of course, since it returned fullName in the end, this couldn't be had. 



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 4 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

interface Student {
    firstName: string;
    lastName: string;
    belts: number;
}

function graduate(ninja: Student){
    return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
}

const christine = {
    firstName: "Christine",
    lastName: "Yang",
    belts: 2
}

const jay = {
    firstName: "Jay",
    lastName: "Patel",
    belts: 4 // This was a typo! All I had to do was change it from "belt" to "belts"! 
}

// "This seems to work fine:"
console.log(graduate(christine));

// "This one has problems:"
console.log(graduate(jay));



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 5 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

class Ninja {
    fullName: string;
    constructor(
        public firstName: string,
        public lastName: string
    ){ this.fullName = `${firstName} ${lastName}`; }

    debug(){
        console.log("Console.log() is my friend.")
    }
}
// "This is not making an instance of Ninja, for some reason:"
// Fix: I had to add the "new" keyword and the parameters firstName, lastName
const shane = new Ninja("Shane", "Howe");

// "Since I'm having trouble making an instance of Ninja, I decided to do this:"
const turing = {
    fullName: "Alan Turing",
    firstName: "Alan",
    lastName: "Turing"
}
// "Now I'll make a study function, which is a lot like our graduate function from above:"
function study(programmer: Ninja){
    return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
}
// "Now this has problems:"
// Fix: instead of passing turing, I passed shane now that it works.
console.log(study(shane));



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 6 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var increment = x => x + 1;
// "This works great:"
console.log(increment(3));

// I erased the brackets on this one. It wasn't returning the expression; now it is.
var square = x => x * x;
// "This is not showing me what I want:"
console.log(square(4));

// "This is not working:"
var multiply = (x, y) => x * y;
// Added parentheses around x and y.

// "Nor is this working:"
var math = (x, y) => {
    let sum = x + y;
    let product = x * y;
    let difference = Math.abs(x-y);
    return [sum, product, difference];
}
// Had to add brackets around this whole thing.



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 7 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

class Elephant {
    constructor(public age: number){}
    birthday = () => this.age++;
}
const babar = new Elephant(8);

setTimeout(babar.birthday, 1000)

setTimeout(function(){
    console.log(`Babar's age is ${babar.age}.`)
}, 2000)
// "Why didn't babar's age change? Fix this by using an arrow function in the Elephant class."

// ...Well, I changed the birthday function to an arrow function. For some reason, "this" referred to the window object
// when it was NOT an arrow function. Perhaps it has something to do with passing it into setTimeout, a window method.
// In any case, arrow functions help keep "this" what you want it to actually refer to.