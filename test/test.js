const chai = require('chai');
const assertArrays = require('chai-arrays');
chai.use(assertArrays)
const expect = require('chai').expect
const fizz = require('../fizzbuzz.js')
console.log(fizz.buzz);

describe("fizzbuzz testing", function() {
  it('expect fizzbuzz to be function', function() {
    expect(fizz.buzz).to.be.a('Function')
  })
  it('expect fizzbuzz result in Number if not fizzbuzzed', function() {
    expect(fizz.buzz(1)).to.be.a('Number')
  })
  it('expect fizzbuzz to return Fizz when modular 3', function() {
    expect(fizz.buzz(3)).to.be.equal('Fizz')
  })
  it('expect fizzbuzz 99 to return Fizz ', function() {
    expect(fizz.buzz(99)).to.be.equal('Fizz')
  })
  it('expect fizzbuzz to return Buzz when modular 5', function() {
    expect(fizz.buzz(5)).to.be.equal('Buzz')
  })
  it('expect fizzbuzz 50 to return Buzz', function() {
    expect(fizz.buzz(50)).to.be.equal('Buzz')
  })
  it('expect fizzbuzz to return FizzBuzz when modular 3 AND modular 5', function() {
    expect(fizz.buzz(15)).to.be.equal('FizzBuzz')
  })
  it('expect fizzbuzz 90 to return FizzBuzz', function() {
    expect(fizz.buzz(90)).to.be.equal('FizzBuzz')
  })
  it('expect fizzbuzz to return 4', function() {
    expect(fizz.buzz(4)).to.be.equal(4)
  })
  it('expect fizzbuzzer to be an array', function() {
    expect(fizz.buzzer(4)).to.be.a('Array')
  })
  it('expect fizzbuzzer 15 to be an list of item', function() {
    expect(fizz.buzzer(15)).to.be.equalTo([1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz"])
  })
})
