let array = [false,1,0,1,2,0,1,3,"a"]

var moveZeros = function (arr) {
  let newArray = []
  let zeros = []
  for(i=0;i<arr.length;i++){    
    if(arr[i]===0){
      zeros.push(0)
    }else{
      newArray.push(arr[i])
    }      
  }  
  zeros.forEach(zero => newArray.push(0))
  return newArray
}
console.log(moveZeros(array))