module.exports = function (){
    return {
        add: function(num1, num2) { 
            return num1 + num2;
        },
        multiply: function(num1, num2) {
            return num1 * num2;
        },
        square: function(num) {
            return num * num;
        },
        random: function(num1, num2) {
            var range = num2 - num1;
            var rand = Math.floor(Math.random() * range); 

            rand += num1;
            return rand;
        }
    }
}