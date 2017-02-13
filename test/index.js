const assert    = require('assert')
const chai      = require('chai')
const should    = chai.should()


describe('menjalankan fungsi fizzbuzz', function() {
  it('menghasilkan fizz', function() {
      math.fizzbuzz(3).should.equal("fizz");
  });
  it('menghasilkan buzz', function() {
      math.fizzbuzz(5).should.equal("buzz");
  });
  it('menghasilkan fizzbuzz', function() {
      math.fizzbuzz(15).should.equal("fizzbuzz");
  });
});
