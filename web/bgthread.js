const fs = require('fs');
fs.readFile('demo.txt',(err,data)=>{
    console.log(data.toString());
});

fs.readFile('demo.txt',(err,data)=>{
    console.log(data.toString());
});

console.log('****************');
