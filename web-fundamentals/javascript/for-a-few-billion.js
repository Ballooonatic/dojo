var pennies = 0.01;

for (let i = 1; i < 30; i++) {
    pennies *= 2;
    console.log("ya got",pennies,"dollas after",i,"days.");
}

console.log("the total amount is",pennies,"monet after 30 days.");