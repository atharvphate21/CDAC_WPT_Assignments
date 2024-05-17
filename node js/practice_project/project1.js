const url = require('url');
const http = require('http');
const fs = require('fs');

http.createServer((req, resp)=>{
    const path=req.url
    if(path=='/about'){
        resp.writeHead(200,{
            'content-type':'text/html'
        })

        const fileContent= fs.readFileSync("./about.html");

        resp.write(fileContent);

        resp.end();
        

        console.log("about page")
    }else if(path=="/"){

        resp.writeHead(200,{
            'content-type':'text/html'
        })

        const fileContent= fs.readFileSync("./home.html");

        resp.write(fileContent);

        resp.end();
        console.log("home page")
    }else if(path == "/services"){
        resp.writeHead(200,{
            'content-type':'text/html'
        })

        const fileContent= fs.readFileSync("./services.html");

        resp.write(fileContent);

        resp.end();
        

        console.log("services");
    }
}).listen(8083, ()=>{
    console.log('server is running on port 8083');
});