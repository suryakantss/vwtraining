
function add(a, b) {
    let p = new Promise((resolve, reject) => {
        setTimeout(function () {
            if (a < 0 || b < 0)
            reject("Invalid Nos...");
            else
            resolve(a + b);
        }, 3000);
    });
    return p;
}

add(10, 20).then((abc) => console.log(abc)).catch((err) => console.log(err));

console.log("**********************");
console.log("**********************");
console.log("**********************");


