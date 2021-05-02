function checkSquares(board){
  let sums = [0,0,0,0,0,0,0,0,0]
  let c = 0
  while(c<9){
    for(j=0;j<3;j++){
      sums[c] += board[c][j] + board[c+1][j] + board[c+2][j]
      sums[c+1] += board[c][j+3] + board[c+1][j+3] + board[c+2][j+3]
      sums[c+2] += board[c][j+6] + board[c+1][j+6] + board[c+2][j+6]      
    }
    c += 3
  }
  for(i=0;i<9;i++){
    if(sums[i]!==45)
      return false
  }
  return true
}

function checkRows(board){
  let sum=0
  for(i=0;i<9;i++){
    let row = board[i]
    sum = row.reduce((acc,int) => acc+int)
  }
  return sum===45 ? true : false
}

function checkCols(board){
  let cols=[0,0,0,0,0,0,0,0,0]
  for(i=0;i<9;i++){    
    for(j=0;j<9;j++){  
      cols[j]+=board[i][j]
    }    
  }
  for(i=0;i<9;i++){
    if(cols[i]!==45){
      return false;
    }
  }
  return true;
}


function validSolution(board){
  return checkCols(board)&&checkRows(board)&&checkSquares(board) ? true : false
}

  
console.log(validSolution([[1, 2, 3, 4, 5, 6, 7, 8, 9],
  [2, 3, 1, 5, 6, 4, 8, 9, 7],
  [3, 1, 2, 6, 4, 5, 9, 7, 8],
  [4, 5, 6, 7, 8, 9, 1, 2, 3],
  [5, 6, 4, 8, 9, 7, 2, 3, 1],
  [6, 4, 5, 9, 7, 8, 3, 1, 2],
  [7, 8, 9, 1, 2, 3, 4, 5, 6],
  [8, 9, 7, 2, 3, 1, 5, 6, 4],
  [9, 7, 8, 3, 1, 2, 6, 4, 5]]))

  console.log(validSolution([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
    [6, 7, 2, 1, 9, 0, 3, 4, 8],
    [1, 0, 0, 3, 4, 2, 5, 6, 0],
    [8, 5, 9, 7, 6, 1, 0, 2, 0],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 0, 1, 5, 3, 7, 2, 1, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 0, 0, 4, 8, 1, 1, 7, 9]]))

    console.log(validSolution([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
      [6, 7, 2, 1, 9, 5, 3, 4, 8],
      [1, 9, 8, 3, 4, 2, 5, 6, 7],
      [8, 5, 9, 7, 6, 1, 4, 2, 3],
      [4, 2, 6, 8, 5, 3, 7, 9, 1],
      [7, 1, 3, 9, 2, 4, 8, 5, 6],
      [9, 6, 1, 5, 3, 7, 2, 8, 4],
      [2, 8, 7, 4, 1, 9, 6, 3, 5],
      [3, 4, 5, 2, 8, 6, 1, 7, 9]]))