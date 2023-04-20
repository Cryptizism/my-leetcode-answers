/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    var answer = [];

    for(var x = 1; x <= n; x++){
        switch(true){
            case(x % 5 === 0 && x % 3 === 0):
                answer.push("FizzBuzz");
                break;
            case(x % 5 === 0):
                answer.push("Buzz");
                break;
            case(x % 3 === 0):
                answer.push("Fizz");
                break;
            default:
                answer.push(x.toString());
                break;
        }
    }

    return answer;
};