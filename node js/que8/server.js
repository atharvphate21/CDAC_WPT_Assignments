const m1 = require("./circle");
const http = require("http");
const url = require("url");
const fs = require("fs");

var server = http.createServer(function (req, resp) {
  resp.writeHead(200, { "content-type": "text/html" });
  var q = url.parse(req.url, true);
  console.log("p= "+q)
  switch (q.pathname) {
    case "/input":
      var rs = fs.createReadStream("input.html");
      rs.pipe(resp);
      break;
    case "/inputRadius":
      var radii = q.query.radius;
      var areaC = m1.calcArea(radii);
      var circumC = m1.calcCircumference(radii);
      resp.write(`Area of Circle = ${areaC}` + "<br>");
      resp.end(`Circumference of Circle = ${circumC}`);
      break;
    default:
      resp.end("In Default Page");
      break;
  }
});

server.listen(3001, function () {
  console.log("Server is running at port 3001");
});
