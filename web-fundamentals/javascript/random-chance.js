// Make a function that takes a number of quarters (1 quarter = 1 game).

// There is a 1 in 100 chance to win the slot machine (which will give you between 50 - 100 quarters -- use Math.random and Math.floor to pick a random number of coins).

// While the user still has quarters, use Math.random to determine if they won.

// If they ever win, return the number of quarters (ex: they had 50 remaining quarters and won 90, so it should return 140).

// Return 0 if all the quarters were wasted.

// Bonus (Only If You Have Time):

// Let the user pass the number they are willing to leave
// (ex: If they won the lottery and still have 40 coins, they will keep playing until they have collected 200 coins)
var quarters = 50;

function slotMachine() {
    if (quarters < 1) {return "you're out of quarters! come back next time."}
    quarters--;
    if (Math.floor(Math.random() * 100) === 0) {
        var winnings = Math.floor(Math.random() * 50) + 50;
        console.log("~*~YOU JUST WON",winnings,"QUARTERS!!!~*~");
        quarters += winnings;
        return "(you now have "+quarters+")"
    }
    else {
        console.log("sry no wins this time. come back soon!");
    }
}