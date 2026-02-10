function ucase(str){
    let p = new Promise(function(resolve,reject){
        resolve(str.toUpperCase());
    });
    return p;
}

ucase('happpy learning').then(function(res){
    console.log(res);
}).catch(function(err){
    console.log(err);
});

