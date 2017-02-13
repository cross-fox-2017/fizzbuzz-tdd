
var Testing = {
  fizzbuzz: function(input) {
    // var arr = []
    // for (var i = 1; i <= 100; i++) {
    //   arr.push(i)
    // }
    // for (var i = 0; i < arr.length; i++) {
      if(input%3==0 && input%5==0) return "FIZZ BUZZ"
      else if(input%3==0) return "FIZZ"
      else if(input%5==0) return "BUZZ"
      else return input
    // }

  }
}

module.exports = Testing
