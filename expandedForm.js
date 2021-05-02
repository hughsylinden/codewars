function expandedForm(num) {
  let splitNum = num.toString().split('')
  let ans = []  
  let str = ''

  for(let i=0;i<splitNum.length;i++){
    let tempNum = ''

    if(splitNum[i]>0){
      let j=splitNum.length-i-1;
      tempNum=splitNum[i]
      while(j>0){
        tempNum += '0'
        j--
      }
      ans.push(tempNum)
    }
    
    str = ''
    for(let j=0;j<ans.length;j++){
      if(j==ans.length-1){
        str += ans[j]
      }      
      else{
        str += ans[j] + ' + '
      }
    }
  }
  return str
}

expandedForm(12)    // '10 + 2'
expandedForm(42)    // '40 + 2'
expandedForm(9000000) //'70000 + 300 + 4'