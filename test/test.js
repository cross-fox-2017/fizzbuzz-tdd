var should = require('chai').should() // actually call the function
const check = require('./fizzbuzz')

describe('Testing FizzBuzz', function () {
  it('if input number can be modulo by 3 and 5 it will return "FizzBuzz" ', function () {
    check.fizzbuzz(15).should.equal('FizzBuzz')
  })
  it('if input number can be modulo by 5 it will return "Buzz" ', function () {
    check.fizzbuzz(5).should.equal('Fizz')
  })
  it('if input number can be modulo by 3 it will return "Buzz" ', function () {
    check.fizzbuzz(3).should.equal('Buzz')
  })
})
