function findUniq(arr) {
  let sArr=arr.sort()
  return sArr[0]===sArr[1] ? sArr[arr.length-1] : sArr[0]
}

console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]))
console.log(findUniq([ 3, 10, 3, 3, 3 ]))