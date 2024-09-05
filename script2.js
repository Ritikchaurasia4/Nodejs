// ======= With the help of this just below syntax we can create a server ......

const http = require('http');
const server = http.createServer(function(req , res){
    res.end("Hello Server how  are you");
});
server.listen(3000 , () =>{
    console.log("Server is running on the port 3000")
});


