function XO(str) {
  let strArr = str.split('')
  let c = 0
  for(i=0;i<strArr.length;i++){
    if(strArr[i].toLowerCase()==='x'){c+=1}
    if(strArr[i].toLowerCase()==='o'){c-=1}
  }
  console.log(strArr)
  return c===0
}

XO('xxxm')