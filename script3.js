const express = require('express');
const app = express();



app.use(function(req , res , next){  // Here create a middlewere
    console.log("Middlewere");
    next();
});

app.get("/" , (req , res)=>{
    res.send("Hello Champian , How are you")
});
app.listen(3000,()=>{
    console.log("server is running on port 3000");
});