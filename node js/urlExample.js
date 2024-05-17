const http= require('http')
const url = require("url")

// url.parse()
http.createServer((req, resp)=>{
    console.log(req.url);

    const urlOb= url.parse(req.url, true); // or u can use false
    console.log(urlOb)
    console.log(urlOb.query)
    console.log(urlOb.keyword)

})
.listen(8082);