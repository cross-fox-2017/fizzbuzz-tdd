var should = require('chai').should()
var fizzbuzz_controller = require('../fizzbuzz')

describe("testing fizzbuzz",function(){
  it('should return fizz',function(){
    fizzbuzz_controller.fizzbuzz_checker(3).should.equal('fizz')
  })

  it('should return buzz',function(){
    fizzbuzz_controller.fizzbuzz_checker(5).should.equal('buzz')
  })

  it('should return fizzbuzz',function(){
    fizzbuzz_controller.fizzbuzz_checker(15).should.equal('fizzbuzz')
  })

  it('should return number',function(){
    fizzbuzz_controller.fizzbuzz_checker(1).should.equal(1)
  })
})
