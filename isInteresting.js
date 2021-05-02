function numToArray(num){
  arr = num.toString().split('')
  numArr = []
  arr.forEach(str => numArr.push(Number.parseInt(str)))
  return numArr
}

function isPalindrome(num){
  let numArr = num.toString().split('')
  if(numArr.length<=2){return false}
  return numArr.join()===numArr.reverse().join()
}

function isSequence(num){
  var nums = numToArray(num)
  if(nums.length<=2){return false}
  let prev=nums[0]
  let reversed = false
  let [current,diff]=[0,nums[1]-nums[0]]
  if(nums.length==2){
    return Math.abs(diff)===1
  }
  for(let i=1;i<nums.length;i++){
    if(nums[i]===0){
      diff===1 ? current = 10 :current=0      
    }else{
      current = nums[i]
    }
    console.log(current-prev)
    if(current-prev!==diff){
      return false
    }
    prev = current
  }
  return true
}

function isFollowedByZeros(num){
  let nums = numToArray(num)
  if(nums.length>2){
    for(let i=1;i<nums.length;i++){
      if(nums[i]!==0){
        return false;
      }
    }
    return true
  }
  return false;
}

function isSame(num){
  let nums = numToArray(num)
  if(nums.length<=2){return false}
  for(let i=1;i<nums.length;i++){
    if(nums[i]!==nums[0]){
      return false;
    }    
  }
  return true
}

function isInteresting(number, awesomePhrases) {
  let result = 0
  if(numToArray(number).length>1){
    for(let i=1;i<3;i++){
      if(isSame(number+i)||isFollowedByZeros(number+i)||isSequence(number+i)||isPalindrome(number+i)||awesomePhrases.includes(number+i)){
        result = 1          
      }
    }
    if(isSame(number)||isFollowedByZeros(number)||isSequence(number)||isPalindrome(number)||awesomePhrases.includes(number)){     
      result = 2
    }    
  }
  else{    
    for(i=1;i<=2;i++){
      if(awesomePhrases.includes(number+i)){   
        result = 1
      }
    }
    if(awesomePhrases.includes(number)){
      result = 2
    }
  }
  return result
}

//console.log(isInteresting(3, [1337,256]))
console.log(isInteresting(3210, []))