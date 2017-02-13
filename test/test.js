const assert = require('assert');
const test   = require('../fizzbuzz.js')
const should = require('chai').should()

describe('Test -> Operation Result :', function() {
  it('if number divisible by three and five, return "FizzBuzz" ', function() {
    test.fizzbuzz(15).should.equal("FizzBuzz");
  });

  it('if number divisible by three, return "Fizz" ', function() {
    test.fizzbuzz(3).should.equal("Fizz");
  });

  it('if number divisible by five, return "Buzz" ', function() {
    test.fizzbuzz(5).should.equal("Buzz");
  });

  it('if number not divisible by three or five, return itself ', function() {
    test.fizzbuzz(8).should.equal("Buzz");
  });
})
