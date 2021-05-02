function isValidWalk(walk) {
  console.log(walk)
  let [n,s,e,w] = [0,0,0,0]
  if(walk.length<10||walk.length>10){return false}
  for(i=0;i<walk.length;i++){
    let c = walk[i]
    if(c==='n'){
      n++;
    }if(c==='s'){
      s++;
    }if(c==='e'){
      e++;
    }if(c==='w'){
      w++;
    }
  }

  return (n-s)===0&&(e-w)===0
}

let walk1 = ['n','s','n','s','n','s','n','s','n','s']
let walk2 = ['w','e','w','e','w','e','w','e','w','e','w','e']
let walk3 = ['w']
let walk4 = ['n','n','n','s','n','s','n','s','n','s']
let walk5 = [ 'e', 's', 'e', 's', 'e', 's', 'e', 's', 'e', 's' ]
console.log(isValidWalk(walk1))
console.log(isValidWalk(walk2))
console.log(isValidWalk(walk3))
console.log(isValidWalk(walk4))
console.log(isValidWalk(walk5))