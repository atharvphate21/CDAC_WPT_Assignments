const express = require("express");
const app = express();
const port = 8080;
const path =require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require("method-override");


app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

app.set("view engine", "views");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
   {
    id:uuidv4(),
    username : "atharv",
    content : "I love coding"
   } ,
   {
    id:uuidv4(),
    username : "sandeep",
    content : "Hard work is important"
   } ,
   {
    id:uuidv4(),
    username : "Rohit",
    content : "I got selected as captain for WC"
   } 
]

app.get("/posts",(req, resp)=>{
    // resp.send("Serving working well!");
    resp.render("index.ejs",{posts})
})

app.get("/posts/new", (req, resp)=>{
    resp.render("new.ejs")
})

app.post("/posts", (req, resp)=>{
    let{username,content}= req.body;
    let id =uuidv4();
    posts.push({id,username, content});
    resp.redirect("/posts")
})

app.get("/posts/:id", (req, resp)=>{
    let{id}= req.params;
    let post = posts.find((p) => id===p.id);
    // posts.push({username, content});
    // console.log(post);
    // resp.redirect("/posts")
    // resp.send("request working");
    resp.render("show.ejs", {post})
})

app.patch("/posts/:id",(req, resp)=>{
    let{id}= req.params;
    let newContent = req.body.content;
    
    let post = posts.find((p) => id===p.id);
    post.content = newContent;
    // resp.send("patch request working")
    console.log(post);
    resp.redirect("/posts");
});

app.get("/posts/:id/edit",(req, resp)=>{
    let{id}= req.params;
    let post = posts.find((p) => id===p.id);
    resp.render("edit.ejs",{post})

})

app.delete("/posts/:id", (req, resp)=>{
    let{id}= req.params;
    // let post = posts.find((p) => id===p.id);
    posts = posts.filter((p) => id!==p.id);
    // resp.send("Delete successfully")
    resp.redirect("/posts")
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})
