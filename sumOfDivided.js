function divisors(num) {
  let prime = []
  for (i=2;i<num;i++){
    if(num%i==0 && num!==i){
      prime.push(i)
    }
  }
  return prime
}

function primes(num) {  
  let div = divisors(num)
  let primeNums=[]
  for (i=0;i<div.length;i++){
    let isPrime = true
    for(j=2;j<div[i];j++){
      if(div[i]%j==0 && div[i]!==j){
        isPrime = false;
      }
    }
    if(isPrime){primeNums.push(div[i])}
  }
  return primeNums
}

function sumOfDivided(lst) {
  //your code
  return [[2, 12]];
}

console.log(primes(21))