const http = require('http')
const fs = require('fs')
const readline = require('readline')

var server = http.createServer(function(req, resp){
    var rs = fs.createReadStream('read.txt')
    var rl = readline.createInterface({
        input:rs
    });
    var linenum=0;
    rl.on('line',function(data){
        linenum++;
        resp.write(linenum+"------"+data+"\n");
    })
    rl.on("close",function(){
        resp.write("\n\n")
        resp.end(`Total line count is: ${linenum}`);
    })
})

server.listen(3001, function(){
    console.log("Server is running at port 3001")
})