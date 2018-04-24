// "Predict the output of the following snippets. Do not plug these into the interpreter."

// Hoo boy. First I'll comment the predicted output and then the actual one, if i was wrong, after.



console.log(hello);
var hello = 'world';
// undefined

// ...i was right!



var needle = 'haystack';
test();

function test(){
	var needle = 'magnet';
	console.log(needle);
}
// undefined

// ~ actual output: ~
// magnet



var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan);
// super cool

// ...i was right!



var food = 'chicken';
console.log(food);
eat();
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = 'gone';
}
// chicken
// half-chicken

// ...i was right!



mean();
console.log(food);
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);
// chicken
// fish
// Uncaught ReferenceError: food is not defined

// o sht.

// ~ actual output: ~
// Uncaught TypeError: mean is not a function at <anonymous>:1:1



console.log(genre);
var genre = "disco";
rewind();
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre);
// undefined
// rock
// r&b
// disco

// ...i was right!



dojo = "san jose";
console.log(dojo);
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);
// it should error out on the first line

// fuq

// ~ actual output ~
// san jose
// seattle
// burbank
// san jose



// ~~~ SCORE ~~~
// 4/7 :( hoisting is hard.