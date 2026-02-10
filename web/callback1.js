

function add(a, b, fx) {
    setTimeout(function () {
         let res = a + b;
        fx(res);
    }, 3000);
}

function mul(a, b, fx) {
   setTimeout(function () {
         let res = a * b;
        fx(res);
    }, 3000);
}

add(10, 20, function (res) {
    console.log(res);
});

mul(10, 20, function (res) {
    console.log(res);
});


console.log('******************************');
console.log('******************************');


// functions can be passed around as params
