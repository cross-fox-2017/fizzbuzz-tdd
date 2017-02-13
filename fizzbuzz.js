
var Testing = {
  fizzbuzz: function(input) {
      if(input%3==0 && input%5==0) return "FIZZ BUZZ"
      else if(input%3==0) return "FIZZ"
      else if(input%5==0) return "BUZZ"
      else return input
  }
}

module.exports = Testing
