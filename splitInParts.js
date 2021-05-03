var splitInParts = function(s, partLength){
  str = ''
  let c = 0
  while(c<s.length){
    str+=s.slice(c,c+partLength)+" "
    c+=partLength
  }
  return str.slice(0,str.length-1)
}