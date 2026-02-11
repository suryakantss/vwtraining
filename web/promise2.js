function ucase(str){
    let p = new Promise((resolve,reject)=>{
        resolve(str.toUpperCase());
    });
    return p;
}

ucase('happpy learning').then((res)=>{
    console.log(res);
}).catch(function(err){
    console.log(err);
});

