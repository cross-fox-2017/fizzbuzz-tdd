module.exports = function(num) {

  var arrayFizzBuzz =[[3, "fizz"],[5, "buzz"],[15,"fizzbuzz"]];
  var word = num

    arrayFizzBuzz.forEach(function(data){
      if(num%data[0] == 0){
        word = data[1]
      }
    });

  return word;
}
