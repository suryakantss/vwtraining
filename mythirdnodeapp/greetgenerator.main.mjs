import { GreetGenerator } from "./greetgenerator.mjs";

let ggen = new GreetGenerator();
ggen.on('start',(m)=>{
    console.log(m);
});

ggen.on('end',()=>{
    console.log('No more messges..');
});
ggen.generate();