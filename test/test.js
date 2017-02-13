const lib = require('../lib/index')
const expect = require('chai').expect

describe('Testing FizzBuzz', function () {
  it('result - method should exist ', function () {
    expect(lib).to.be.ok
  })

  it('result - length should be equal to input', function () {
    expect(lib(100)).to.have.lengthOf(100)
  })

  it('result - if value that can divided by 3 should return "Fizz" ', function () {
    expect(lib(100)).to.have.deep.property('[2]', 'Fizz')
  })

  it('result - if value that can divided by 5 should return "Buzz" ', function () {
    expect(lib(100)).to.have.deep.property('[24]', 'Buzz')
  })

  it('result - if value that can divided by 5 AND 3 should return "FizzBuzz" ', function () {
    expect(lib(100)).to.have.deep.property('[29]', 'FizzBuzz')
  })
})
