// Using the TypeScript Playground tool, create a new class called Bike with the following properties/attributes:

// price
// max_speed
// miles


class Bike {

    price: number
    max_speed: string
    miles: number
    
    // Use the constructor() function to specify the price and max_speed of each instance (e.g. let bike1 = new Bike(200, "25mph"); 
    constructor(
        price: number,
        max_speed: string,
    ){
        this.price = price
        this.max_speed = max_speed
        // also write the code so that the initial miles is set to be 0 whenever a new instance is created.
        this.miles = 0
    }

    // Add the following functions to this class:

    // displayInfo() - have this method display the bike's price, maximum speed, and the total miles.
    displayInfo() {
        console.log(
            `${this}:`,
            this.price,
            this.max_speed,
            // What would you do to prevent the instance from having negative miles?
            Math.abs(this.miles)
        )
        return this
    }

    // ride() - have it display "Riding" on the screen and increase the total miles ridden by 10
    ride() {
        console.log("Riding...");
        this.miles += 10;
        return this
    }

    // i know lol.
    // reverse() - have it display "Reversing" on the screen and decrease the total miles ridden by 5...
    reverse() {
        console.log("Reversing...")
        this.miles -= 5;
        return this
    }
}



// Create 3 instances of the Bike class.

let bike_1 = new Bike(50, "15mph")
let bike_2 = new Bike(100, "30mph")
let bike_3 = new Bike(150, "60mph") // it's motorized



// Have the first instance ride three times, reverse once and have it displayInfo().
bike_1.ride().ride().ride().reverse().displayInfo()


// Have the second instance ride twice, reverse twice and have it displayInfo().
bike_2.ride().ride().reverse().reverse().displayInfo()


// Have the third instance reverse three times and displayInfo().
bike_3.reverse().reverse().reverse().displayInfo()



// Which methods can return this in order to allow chaining methods?
// Why not all of them?