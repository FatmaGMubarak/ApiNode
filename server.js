const fs = require('fs')
let user_data = []

let htmlFile;
const http = require("http");

const data = fs.readFile("database.json" ,"utf8" ,(err,data)=>{
    if (err) console.log(err)
    if (data) user_data = data
})

const server = http.createServer((req,res)=>{
res.setHeader("content-type" , "application/json");
if(req.url == "/") {
    res.end(user_data)
}  else if  ( req.url == "/about") {
   res.end("Hello from about page")
} else {
    res.end("404")
}

})

server.listen(5000 ,()=>{
    console.log("Server is running")
});