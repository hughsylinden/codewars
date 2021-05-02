function preprend(str){
  return "0"+str;
}

function humanReadable(seconds) {  
  let [h,m,s] = [0,0,0,0]

  if(seconds<60){ //seconds
    s=seconds;
  }

  else if(seconds<60*60){ //minutes
    s = seconds%60
    m = Math.floor(seconds/60)
  }

  else if(seconds<=359999){ //hours
    h = Math.floor(seconds/(60*60))
    seconds = seconds-(h*60*60)
    m = Math.floor(seconds/60)
    seconds = seconds-(m*60)
    s = seconds
  }
  let [hStr,mStr,sStr] = [h.toString(),m.toString(),s.toString()]
  if(h<=10)
    hStr = preprend(hStr)
  if(m<=10)
    mStr = preprend(mStr)
  if(s<=10)
    sStr = preprend(sStr)  
  return hStr+":"+mStr+":"+sStr
}

humanReadable(60)