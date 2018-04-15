var HOUR = 7;
var MINUTE = 15;
var PERIOD = "PM";

if (MINUTE < 30 && PERIOD == "PM") {
    console.log("it's just after",HOUR,"in the evening.");

} else if (MINUTE >= 30 && PERIOD == "PM") {
    console.log("it's almost",HOUR,"in the evening.");

} else if (MINUTE < 30 && PERIOD == "AM") {
    console.log("it's just after",HOUR,"in the morning.");

} else if (MINUTE >= 30 && PERIOD == "AM") {
    console.log("it's almost",HOUR,"in the morning.");
}