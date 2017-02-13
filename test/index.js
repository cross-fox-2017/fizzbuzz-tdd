const assert    = require('assert')
const chai      = require('chai')
const should    = chai.should()
const fizzbuzz = require('../index');

describe('menjalankan fungsi fizzbuzz', function() {
  it('menghasilkan fizz', function() {
      fizzbuzz(18).should.equal("fizz");
  });
  it('menghasilkan buzz', function() {
      fizzbuzz(35).should.equal("buzz");
  });
  it('menghasilkan fizzbuzz', function() {
      fizzbuzz(30).should.equal("fizzbuzz");
  });
});
