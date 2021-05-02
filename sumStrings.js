function sumStrings(a,b) { 
  let lArr = []
  let sArr = []
  if(parseInt(a)>parseInt(b)){ 
    lArr = a.split('')  
    sArr = b.split('') 
  }
  else{
    lArr = b.split('')  
    sArr = a.split('') 
  }
  let diff = lArr.length-sArr.length
  for(i=0;i<diff;i++){
    sArr.unshift('0')
    console.log('larger: '+lArr)
  }

  let remainder=0
  let newArr=[]
  let val=0
  for(i=lArr.length-1;i>=0;i--){        
    val = parseInt(lArr[i])+parseInt(sArr[i])+remainder
    if(val>9){
      remainder = 1
      val-=10      
    }else{remainder=0}
    newArr.unshift(val.toString())
  }
  if(remainder==1){
    newArr.unshift('1')
  }
  let finalStr = newArr.join('')
  if(finalStr.charAt(0)==0){
    finalStr = finalStr.substring(1)
  }
  return finalStr
}

console.log(sumStrings('712569312664357328695151392', '8100824045303269669937'))