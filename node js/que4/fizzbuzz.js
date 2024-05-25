exports.numberType = function (a) {
    if (a % 3 == 0 && a % 5 == 0) {
        return "FizzBuzz";
    }
    if (a % 3 == 0) {
        return "Fizz";
    }
    if (a % 5 == 0) {
        return "Buzz";
    }
    else{
        return a;
    }
}