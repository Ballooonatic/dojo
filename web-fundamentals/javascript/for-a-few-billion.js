var pennies = 0.01;

for (let i = 2; i < Infinity; i++) {
    pennies *= 2;
    console.log("ya got",pennies,"dollas after",i,"day(s).");
    if (pennies == Infinity) {
        break;
    }
}

console.log("the total amount is",pennies,"monet after 30 days.");

// BONUS
// it takes 21 days to make over $10,000,
// only 28 to break a million,
// and 1032 or so to reach infinity