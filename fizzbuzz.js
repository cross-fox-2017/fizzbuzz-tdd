var fizzbuzz_controller = {
  fizzbuzz_checker:function(n){
    if(n%3===0 && n%5 ===0){
      return "fizzbuzz"
    }else if(n%3===0){
      return "fizz"
    }else if(n%5===0){
      return "buzz"
    }else{
      return n
    }
  }
}

module.exports=fizzbuzz_controller;
