var x = [];
console.log(x);
x.push('coding','dojo','rocks');
x.pop();
console.log(x);

const y = [];
console.log(y);
y.push(88); //won't happen

var z = [9, 10, 6, 5, -1, 20, 13, 2];
var i = 0;
while (i < z.length) {
  console.log(z[i]);
  i++;
}
while (i < z.length - 1) {
  console.log(z[i]);
  i++;
}

var names = ['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso'];
for (var i = 0; i < names.length; i++) {
  if (names[i].length === 5){
      console.log(names[i]);
  }
}

function yell(string) {
   return string.toUpperCase();
}
