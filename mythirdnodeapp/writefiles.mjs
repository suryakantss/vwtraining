import fs from 'fs';

fs.writeFile('out.txt','This is some text',(err)=>{
    if(err) return console.log(err.message);
    console.log('file created...')
}) ;

console.log('Done!!!');

