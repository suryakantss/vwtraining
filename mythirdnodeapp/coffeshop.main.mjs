import { CoffeShop } from "./cofffeshop.mjs";

let cs = new CoffeShop();
cs.on('queue',(c)=>{
    console.log('In Queue....'+ c);
});
cs.on('brew',(c)=>{
    console.log('In Process....'+ c);
});
cs.on('ready',(c)=>{
    console.log('Ready to pickup..'+ c);
})

cs.placeOrder('John','Mocha-Large');
cs.placeOrder('Sam','Mocha-Small');
cs.placeOrder('Tom','Americano');
cs.placeOrder('Jack','Mocha-Large');


