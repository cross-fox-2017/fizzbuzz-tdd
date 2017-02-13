const should = require('chai').should()
const Testing = require('../fizzbuzz');

describe('FizzBuzz Testing',function() {
  it('Should Return : "FIZZ BUZZ" input%3 == 0 && input%5 == 0',function() {
      Testing.fizzbuzz.should.be.ok
      Testing.fizzbuzz(15).should.equal("FIZZ BUZZ")
  })
  it('Should Return : "FIZZ" input%3 == 0',function() {
        Testing.fizzbuzz.should.be.ok
        Testing.fizzbuzz(3).should.equal("FIZZ")
  })
  it('Should Return : "BUZZ" input%5 == 0',function() {
        Testing.fizzbuzz.should.be.ok
        Testing.fizzbuzz(5).should.equal("BUZZ")
  })
  it('Else Return input number',function() {
        Testing.fizzbuzz.should.be.ok
        Testing.fizzbuzz(2).should.equal(2)
  })

})
