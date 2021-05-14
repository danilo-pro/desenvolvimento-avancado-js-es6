const assert = require('assert');
const Math = require('../src/math.js');
const expect = require('chai').expect;
const sinon = require('sinon');

let value = 0;

describe( 'Math class', function() {
    // hooks
    beforeEach(function() {
        value = 0;
    });

    it( 'Sum two numbers', function(done) {
        const math = new Math();
        this.timeout(3000);
        
        value = 5;
        
        math.sum(value, 5, (value) => {
            expect(value).to.equal(10);
            done();
        });
    });
    
    it('Multiply two numbers', function () {
        const math = new Math();
        const obj = {
            name: 'Danilo Perez'
        }

        const obj2 = {
            name: 'Danilo Perez'
        }
        
        expect(obj).to.deep.equal(obj2);
        // expect(obj).to.have.property('name').equal('Danilo Perez');
        // expect(math.multiply(value, 5)).to.equal(0);
    });

    it.only('Calls req with sum and index values', function() {
        const req = {};
        const res = {
            load: function load() {
                console.log('Called!');
            }
        };

        // sinon.spy(res, 'load');
        sinon.stub(res, 'load').returns('xpto');

        const math = new Math();

        math.printSum(req, res, 5, 5);

        res.restore();
        
        // expect(res.load.args[0][1]).to.equal(10);
        expect(res.load.args[0][0]).to.equal('index');
        // expect(res.load.calledOnce).to.be.true;
    });
});

// it.only - executa apenas aquele teste
// it.skip - ignora aquele teste

// Usando MOCHA

// let value = 0;

// describe( 'Math class', function() {
//     // hooks
//     beforeEach(function() {
//         value = 0;
//     });

//     it( 'Sum two numbers', function(done) {
//         const math = new Math();
//         this.timeout(3000);
        
//         value = 5;
        
//         math.sum(value, 5, (value) => {
//             assert.equal(value, 10);
//             done();
//         });
//     });
    
//     it('Multiply two numbers', function () {
//         const math = new Math();
        
//         assert.equal(math.multiply(value, 5), 0);
//     });
// });

// Usando CHAI

// let value = 0;

// describe( 'Math class', function() {
//     // hooks
//     beforeEach(function() {
//         value = 0;
//     });

//     it( 'Sum two numbers', function(done) {
//         const math = new Math();
//         this.timeout(3000);
        
//         value = 5;
        
//         math.sum(value, 5, (value) => {
//             expect(value).to.equal(10);
//             done();
//         });
//     });
    
//     it('Multiply two numbers', function () {
//         const math = new Math();
//         const obj = {
//             name: 'Danilo Perez'
//         }

//         const obj2 = {
//             name: 'Danilo Perez'
//         }
        
//         expect(obj).to.deep.equal(obj2);
//         // expect(obj).to.have.property('name').equal('Danilo Perez');
//         // expect(math.multiply(value, 5)).to.equal(0);
//     });
// });