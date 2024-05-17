// readFile

const fs = require('fs');
fs.readFile("./abc.txt",(err, data)=> {
    if(err){
        console.log("error");
        console.log(err);
    }else{
        console.log(data.toString()); //used toString method to convert buffer to string format
    }
})
// writeFile

let content = " this is sample content for writeFile"
fs.writeFile('new_file.txt', content, (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("saved");
    }

})

// appendFile

fs.appendFile("./abc.txt", "new content", (err)=>{
    if(err){
        console.log("error"+err)
    }else {
        console.log("saved")
    }
})
// deleteFile

fs.unlink("./abc.txt", (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("deleted");
    }
});