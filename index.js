module.exports = function(num){
  let data = [[5,'buzz'],[3,'fizz'],[15,'fizzbuzz']]
  let result = ""
  data.forEach(function(x){
    if(num%x[0]==0){
      result = x[1]
    }
  })
  return hasil
}
