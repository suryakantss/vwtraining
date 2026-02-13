const expect = require("chai").expect;
const GreetService = require("../greet");
describe('test suite for greetservice', () => {
    let gs = null;
    before(() => {
        console.log('before...cls');
    });
    beforeEach(() => {
        console.log('beforeeach...');

        gs = new GreetService();
    });
    it('greet should return Hello John', () => {
        expect(gs.greet('John')).to.be.equal('Hello John!!')
    });
    it('greet should return Hello Guest', () => {
        expect(gs.greet('')).to.be.equal('Hello Guest!!')
    })
    afterEach(() => {
        console.log('aftereach...')
        gs = null;
    });
    after(() => {
        console.log('after...')
    })
});