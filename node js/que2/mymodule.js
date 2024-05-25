exports.factorial = function (a) {
    var f = 1;
    for (var i = 1; i <= a; i++) {
        f *= i;
    }
    return f;
}

exports.myprime = function (a) {
    var c = 0;
    for (var i = 1; i <= a / 2; i++) {
        if (a % i == 0) {
            c++
        }
    }
    if (c > 1) {
        return false;
    }
    return true;
}

exports.printable = function (a) {
    var tab = ""
    for (var i = 1; i <= 10; i++) {
        tab += a + " * " + i + " = " + a * i + "<br>";
    }
    return tab;
}

// module.exports(this.factorial, this.myprime, this.printable)