const  chai  = require("chai");
const  calc = require("../calc");

describe('test suite for calc',()=>{
    it('add should return 11 if a=5 and b=6',()=>{
        chai.expect(calc.add(5,6)).to.equal(11);
    });

    it('mul should return 10 if a=2 and b=5',()=>{
        chai.expect(calc.mul(2,5)).to.equal(10);
    });
  
})