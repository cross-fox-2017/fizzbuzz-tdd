const chai = require('chai');
const should = chai.should()
const chaiArrays = require('chai-arrays');
chai.use(chaiArrays)
const fizzbuzz = require('../fizzbuzz');

describe('Testing FizzBuzz', function(){
  it('should return print array function', function(){
    fizzbuzz.print_array.should.be.ok
  })
  it('should return array', function(){
    fizzbuzz.print_array(15).should.equalTo([1,2,'Fizz',4,'Buzz','Fizz',7,8,'Fizz','Buzz',11,'Fizz',13,14,'FizzBuzz'])
    // expect(fizzbuzz.print_array(15)).equalTo([1,2,'Fizz',4,'Buzz','Fizz',7,8,'Fizz','Buzz',11,'Fizz',13,14,'FizzBuzz'])
    })
})
