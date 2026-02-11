
function add(a, b) {
    let p = new Promise((resolve, reject) => {
        setTimeout(function () {
            if (a < 0 || b < 0)
                reject("Invalid Nos...");
            else
                resolve(a + b);
        }, 2000);
    });
    return p;
}

let res = await add(12, 13);
console.log(res);



