// // Session cookie .....

// const express = require('express');
// const app = express();

// // With the help of just below two line code we can handle the form data inside backend....

// app.use(express.json());
// app.use(express.urlencoded({extended : true}));

// app.get("/" ,(req , res)=>{
//     res.send("Hello Home page");
// });

// app.get("/about" ,(req , res)=>{
//     res.send("Hello about page");
// });

// app.get("/profile" ,(req , res)=>{
//     res.send("Hello profile page");
// });

// app.listen(3000 , ()=>{
//     console.log("The port is running on port 3000");
// });

// ============================================================


const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));

// Setup public static files .
app.use(express.static(path.join(__dirname, 'public')));

// set the ejs as the view engine , this code means backend what will be render .
app.set('view engine' , 'ejs');

app.get('/', (req, res) => {
    res.render("index.ejs");
});


// app.get("/profile/ritik" ,(req , res)=>{
//     res.send("Hello profile page");
// });

// Create Dynamic Routing , Here collon means username is dynamic
// app.get("/profile/:username" ,(req , res)=>{
//     res.send("It is Dynamic ,  ");
// });


app.get("/profile/:username" ,(req , res)=>{
    res.send(`Welcome , ${req.params.username}`);
});

app.get("/author/:username/:age" , (req , res)=>{
    res.send(req.params);
});


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
