let fizz = {
  buzz: function (number) {
    if(number%3 == 0 && number%5 == 0){
      return 'FizzBuzz'
    }
    if(number%3 == 0){
      return 'Fizz'
    }
    if(number%5 == 0){
      return 'Buzz'
    }
    return number
  },
  buzzer : function(number){
    result = []
    for (let i = 1; i <= number; i++){
      result.push(fizz.buzz(i))
    }
    return result
  }
}

module.exports = fizz
