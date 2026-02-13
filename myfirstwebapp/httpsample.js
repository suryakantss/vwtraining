const http = require('http');
const fs  = require('fs');

let server = http.createServer((req,res)=>{
    res.setHeader("Content-Type","text/html");
    if (req.url=='/login')
    {
        res.write(fs.readFileSync('login.html'));
        res.end();
    }
    else if (req.url=='/home')
    {
        res.write(fs.readFileSync('home.html'));
        res.end();
    }
    else 
    {
    res.write('<h3>Welcome to HTTP!!</h3>');
    res.write('<h3>This is http module!!</h3>');
    res.end();
    }
});


server.listen(3000,()=>{
    console.log('server is up @ port :  3000');
})