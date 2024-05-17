const http=require("http");

const server =http.createServer((req, resp)=>{
    // req: request Process
    // resp: for writing response 
    resp.writeHead(200,{"content-type":"text/html"});
    resp.write("<h1> Wow this is response from first server </h1>");
    resp.write('<h2>ni work</h2>');
    resp.write("<button>click me</button>");
    resp.end("Thank you. Visit again")

}) ;

server.listen(8682)