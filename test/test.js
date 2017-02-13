const expect = require('chai').expect

describe("fizzbuzz testing", function() {
  it('expect to to return something', function() {
    expect(fizzbuzz).to.be.a('function')
  })
  it('expect to return Fizz when modular 3', function() {
    expect(fizzbuzz(3)).to.be.equal('Fizz')
  })
  it('expect to return Buzz when modular 5', function() {
    expect(fizzbuzz(5)).to.be.equal('Buzz')
  })
  it('expect to return FizzBuzz when modular 3 AND modular 5', function() {
    expect(fizzbuzz(15)).to.be.equal('FizzBuzz')
  })
  it('expect to return 4', function() {
    expect(fizzbuzz(4)).to.be.equal(4)
  })
})
