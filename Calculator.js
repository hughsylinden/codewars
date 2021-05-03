function calcMultiDivi(nums){
  let arr = nums  
  let ans = 0
  let c = 0
  let a = 0
  while(arr.includes('*')||arr.includes('/')){ 
    console.log(c)
    if(arr.length===1){
      break
    }
    a = arr[c] 
    if(a==='*' || a==='/'){      
      if(a==='*'){
        ans = parseFloat(arr[c-1])*parseFloat(arr[c+1])
      }      
      if(a==='/'){
        ans = parseFloat(arr[c-1])/parseFloat(arr[c+1])
      }      
      if(c>1){ 
        arr=arr.slice(0,c-1).concat(ans).concat(arr.slice(c+2))
        c=0
      }else{
        arr=[ans].concat([...arr.splice(c+2)])  
        c=0
      }
    }    
    c+=1
  }
  return arr
}

function calcAddSub(nums){  
  arr = nums
  let ans = 0
  let c = 0
  while(arr.length>3){
    if(arr[1]=='+'){
      ans = parseFloat(arr[0])+parseFloat(arr[2])
      arr=[ans,...arr.splice(3)] 
    }
    if(arr[1]=='-'){
      ans = parseFloat(arr[0])-parseFloat(arr[2])
      arr=[ans,...arr.splice(3)] 
    }
  }
  if(arr[1]=='+'){
    ans = parseFloat(arr[0])+parseFloat(arr[2])
    arr=[ans]
  }
  if(arr[1]=='-'){
    ans = parseFloat(arr[0])-parseFloat(arr[2])
    arr=[ans]
  }
  return arr
}

const Calculator = function() {
  this.evaluate = string => {
    let cArr = string.split(' ').join(' ').split(' ')
    let arr = calcMultiDivi(cArr)
    let ans = calcAddSub(arr)[0]
    return ans
  }
};

let calc = new Calculator()
console.log(calc.evaluate('10 * 5 / 2'))