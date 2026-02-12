const fs = require('fs/promises');


fs.readFile('demo.txt').then(content=>console.log(content.toString())).catch(err=> console.log(err.message));


