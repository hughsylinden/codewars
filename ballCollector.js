function ballCollector(detritus) {
  let weight = 0
  for(i=0;i<detritus.length;i++){
    if(detritus[i]===58){
      weight+=58
    }
  }
  return {weight: weight}
}