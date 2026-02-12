const fs = require('fs/promises');

async function doIt() {
    try {
        let content = await fs.readFile('demo.txt');
        console.log(content.toString());
    } catch (err) {
        console.log(err.message);
    }
}

doIt();
