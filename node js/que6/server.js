const http = require("http");
const fs = require("fs");
const url = require("url");

var server = http.createServer(function (req, resp) {
    resp.end("<h1>Welcome to Nodejs</h1>")
});

server.listen(5000, function () {
  console.log("Server is running at port 5000");
});
