const lib = function (value) {
  let arr = []
  for (let i = 0; i < value;i++) {
    let j = i + 1
    j % 5 == 0 && j % 3 == 0 ? arr.push('FizzBuzz') : j % 5 == 0 ? arr.push('Buzz') : j % 3 == 0 ? arr.push('Fizz') : arr.push(j)
  }
  return arr
}

module.exports = lib
