const circle = require('./circle')
const rectangle = require('./rectangle')
const triangle = require('./Triangle')
const http = require('http')
const fs = require('fs')
const url = require('url')
var server = http.createServer(function(req,resp){
    console.log(req.url+"------"+req.method)
    var q = url.parse(req.url,true)
    console.log("q= ",q)
    resp.writeHead(200,{'content-type':'text/html'})
    
})