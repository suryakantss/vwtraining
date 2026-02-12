const fs = require('fs');
let content = fs.readFileSync('demo.txt');
console.log(content.toString());
console.log('END......');
