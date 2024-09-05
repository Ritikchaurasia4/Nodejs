// ======= With the help of this just below commented code we can create a server ......

// const http = require('http');
// const server = http.createServer(function(req , res){
//     res.end("Hello Server how  are you");
// });
// server.listen(3000 , () =>{
//     console.log("Server is running on the port 3000")
// });


// in which  we need to install express by the syntax ...   npm i express

const express = require('express');
const app = express();

app.get("/" , function(req , res){
    res.send("Backend send the data1");
});
app.get("/profile" , function(req , res){
    res.send("Backend send  data");
});
app.listen(3000 , ()=>{
    console.log("code is running on port 3000")
});
