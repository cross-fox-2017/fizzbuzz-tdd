module.exports = function(num){
  const data = [[5,'buzz'],[3,'fizz'],[15,'fizzbuzz']]
  let hasil = ""
  data.forEach(function(x){
    if(num%x[0]==0){
     hasil = x[1]
    }
  })
  return hasil
}
