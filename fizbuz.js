module.exports={
  mkfizbuz: number =>{
    let res=[]
    for(let i=1;i<=number;i++){
      i%3===0 && i%5===0 ?res.push('fizzbuzz'): i%5 === 0 ? res.push('buzz') : i%3 === 0 ? res.push('fizz'):res.push(i)
    }
    return res
}

}
