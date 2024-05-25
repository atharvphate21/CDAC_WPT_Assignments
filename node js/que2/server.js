const m1 = require('./mymodule')
const fs = require('fs')
const http = require('http')
const url = require('url')

var server = http.createServer(function (req, resp) {
    var q = url.parse(req.url,true)
    
    console.log("q=",q)
    resp.writeHead(200, { 'content-type': 'text/html' })
    switch (q.pathname) {
        case '/page':
            var rs = fs.createReadStream('page.html')
            rs.pipe(resp)//events ata,er,end event in single line
            break;
        case '/submit-data':
            var num = parseInt(q.query.number);
            if (num < 5) {
                var ans = m1.factorial(num);
                resp.end("<h3>Factorial = " + ans + "</h3>")
                break;
            }
            else if (num >= 5 && num < 10) {
                var ans = m1.printable(num);
                resp.end("<h3>Table <br>" + ans + "</h3>")
                break;
            }
            else {
                var ans = m1.myprime(num);
                if (ans) {
                    resp.end("<h3>Number : " + num + " is Prime</h3>")
                    break;
                }
                else {
                    resp.end("<h3>Number : " + num + " is not a Prime</h3>")
                    break;
                }
            }
        default:
            resp.end("<h3>Default Page</h3>")
            break;
    }
})

server.listen(3001, function (){
    console.log("Server is running at port 3001")
})