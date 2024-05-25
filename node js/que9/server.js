const http = require("http");
const url = require("url");
const fs = require("fs");
const m1 = require("./validate");

var server = http.createServer(function (req, resp) {
  resp.writeHead(200, { "content-type": "text/html" });
  var q = url.parse(req.url,true);
  switch (q.pathname) {
    case "/login":
      var rs = fs.createReadStream("login.html");
      rs.pipe(resp);
      break;
    case "/loginData":
      var v = m1.validate(q.query.uname,q.query.pass)
      if(v){
        resp.end("Valid Login")
      }
      else{
        resp.end("Invalid Login")
      }
      break;
    default:
      resp.end("Default Page");
      break;
  }
});

server.listen(3001, function () {
  console.log("Server is running at port 3001");
});
