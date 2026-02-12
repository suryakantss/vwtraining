const fs = require('fs');


let stream = fs.createReadStream('demo.txt',{encoding:'utf8',highWaterMark:20});
stream.on('data',(chunk)=>{
    console.log(chunk.length);
    console.log('------------------');
    console.log(chunk);
});
