function duplicateCount(text){

  splitText = text.split('').sort()
  let testMap = new Map();
  let duplicateCount = 0
  for(let i =0;i<splitText.length;i++){
    let char = splitText[i].toLowerCase()
    if(testMap.has(char)){
      testMap.set(char, testMap.get(char)+1);
      
      if(testMap.get(char)===2){
        duplicateCount++;
      }
    }
    else{
      testMap.set(char, 1);
    }
  }
  return duplicateCount
}

duplicateCount("Indivisib1ilities")