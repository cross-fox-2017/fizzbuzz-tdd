const assert    = require('assert')
const chai      = require('chai')
const should    = chai.should()
const fizzbuzz = require('../index');

describe('menjalankan fungsi fizzbuzz', function() {
  it('menghasilkan fizz', function() {
      fizzbuzz(18).should.equal("fizz");
      fizzbuzz(7).should.equal(7);
  });
  it('menghasilkan buzz', function() {
      fizzbuzz(35).should.equal("buzz");
      fizzbuzz(34).should.equal(34);
  });
  it('menghasilkan fizzbuzz', function() {
      fizzbuzz(30).should.equal("fizzbuzz");
  });
});
