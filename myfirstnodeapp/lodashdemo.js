
const _ = require('lodash');

let res = _.chunk([10, 20, 40, 60], 2);

console.log(res);

console.log(_.sortBy([100, 90, 120, 80]));
console.log(_.sortBy(['Java', 'Spring', 'Junit']));

let products = [
    { code: 'P4', name: 'Mouse', price: 500 },
    { code: 'P2', name: 'Mug', price: 300 },
    { code: 'P3', name: 'USB', price: 1300 },

];

let productsgt300 = _.filter(products,(p)=> p.price>300);
//console.log(_.sortBy(products,"code"));
console.log(productsgt300);
