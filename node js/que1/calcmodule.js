exports.addition = function (a, b) {
    return a + b;
}

exports.subtraction = function (a, b) {
    return a - b;
}

exports.multiplication = function (a, b) {
    return a * b;
}

exports.division = function (a, b) {
    return a / b;
}

exports.sum=function(a,b,...c){
    var s = 0;
    for(var num of c){
        s+=num;
    }
    return a+b+s;
}

exports.square=function(a){
    return a*a;
}


