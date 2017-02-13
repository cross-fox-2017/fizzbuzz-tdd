var chai   = require('chai')
var should = chai.should()
var fizzbuzz = require('../index')

describe('pengecekan funsi fizz', function () {
  console.log(fizzbuzz);
  it('jika angka habis dibagi tiga akan mencetak kata fizz', function() {
      fizzbuzz(9).should.equal('fizz')
  })

  it('jika angka habis dibagi lima akan mencetak kata buzz', function() {
      fizzbuzz(10).should.equal('buzz')
  })

  it('jika angka habis dibagi tiga dan lima akan mencetak kata fizzbuzz', function() {
      fizzbuzz(15).should.equal('fizzbuzz')
  })

  it('jika tidak dapat dibagi tiga dan lima akan mencetak angka itu sendiri', function() {
      fizzbuzz(17).should.equal(17)
  })
})
