const fs = require('fs');


fs.readFile('demo.txt',(err,content)=>{
    if(err) return console.log(err.message);
    console.log(content.toString());
});

console.log('Bye!!!');
