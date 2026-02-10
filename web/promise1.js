
function add(a, b) {
    let p = new Promise( (resolve, reject)=> {
       setTimeout(function(){
        resolve(a + b);
       },3000);
    });
    return p;
}

add(10, 20).then( (res)=>  console.log(res)).catch((rej)=> console.log(rej));

console.log("**********************");
console.log("**********************");
console.log("**********************");


