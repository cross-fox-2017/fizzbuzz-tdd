module.exports = function(num){
  var data = [[5,'buzz'],[3,'fizz'],[15,'fizzbuzz']]
  var result = num
  data.forEach(function(x){
    if(num%x[0]==0){
      result = x[1]
    }
  })
  return result
}
