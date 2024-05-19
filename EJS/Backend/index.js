const express = require("express");
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json())
app.get("/register", (req, resp)=>{
    let {user, password} = req.query;
    resp.send(`standerd Get response, Welcome ${user}`);
})

app.post("/register", (req, resp)=>{
    // console.log(req.body)
    let {user, password} = req.body;
    resp.send(`standerd POST response, Welcome ${user}`);
})
app.listen(8080,()=>{
    console.log("server is running on port 8080");
})