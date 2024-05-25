const http = require('http')
const m1 = require('./fizzbuzz')
var server = http.createServer(function (req, resp) {
    var a = "";
    resp.writeHead(200,{'content-type':'text/html'})
    for (var i = 1; i <= 100; i++) {
        a = m1.numberType(i)
        resp.write("<h3>"+a+"<br></h3>")
    }
    resp.end();
})

server.listen(3001,()=>{
    console.log("Server is running on port 3001")
})