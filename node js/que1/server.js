const m1 = require("./calcmodule")
const fs = require("fs");
const http = require("http");
const url = require("url");
var server = http.createServer(function (req, resp) {
    var q = url.parse(req.url, true);
    resp.writeHead(200, { 'content-type': 'text/html' })
    var a = 1;
    var b = 2;
    var c = 3;
    var d = 4;
    resp.write("<h3>Addition = " + m1.addition(d, b) + "</h3>")
    resp.write("<h3>Subtraction = " + m1.subtraction(d, b) + "</h3>")
    resp.write("<h3>Multiplication = " + m1.multiplication(d, b) + "</h3>")
    resp.write("<h3>Division = " + m1.division(d, b) + "</h3>")
    resp.write("<h3>Sum(>2) = " + m1.sum(a,b,c,d) + "</h3>")
    resp.end("<h3>Square = " + m1.square(d) + "</h3>")
})

server.listen(3001, function () {
    console.log("Server is running at 3001");
})