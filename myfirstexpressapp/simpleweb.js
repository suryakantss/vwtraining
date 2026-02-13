const express = require('express');

let app = express();

//security
app.use("/login", (req,res,next)=>{
    console.log('logging requests...');
    console.log(req.url);
    next();
});
app.use((req,res,next)=>{
    console.log('Auth...requests.....');
    console.log(req.url);
    next();
});
app.use(express.static('static'));
app.use(express.urlencoded({extended:'true'}));

app.get("/home",(req,res)=>{
    res.send('<h3>Welcome to express!!');
});

app.get("/login",(req,res)=>{
    throw new Error('Something went wrong!!');
    res.send('<h3>Login Page');
});
app.post('/checkLogin',(req,res)=>{
    if(req.body.login =='John' && req.body.password == '123')
        res.send("<h3>Welcome to my app</h3>");
    else
        res.send("<h3>Invalid Login/Password</h3>");

});

app.listen(80,()=>{
    console.log('server is up and running -> 3000');
})


app.use((err,req,res,next)=>{
    res.send(err.message);
    next();
});