
const otherPlayer = (currentPlayer) => {
  return currentPlayer === 'X' ? 'O' : 'X';
}

const gameWon = (board) => {
  const wins = [
    [0,1,2], [3,4,5], [6,7,8], // horizontal
    [0,3,6], [1,4,7], [2,5,8], // vertical
    [0,4,8], [2,4,6]           // diagonal
  ];
  return wins.some((win) => 
    win.every((index) => board[index] === 'X') ||
    win.every((index) => board[index] === 'O')
  );
}

const move = ({ board, currentPlayer }, index) => {
  if (board[index] == otherPlayer(currentPlayer)) {
    return Object.assign({}, {
      board,
      currentPlayer,
      gameInfo: "Illegal move."
    });
  }
  const newBoard = [...board.slice(0, index), currentPlayer, ...board.slice(index+1)];
  if (gameWon(newBoard)) {
    return Object.assign({}, {
      board: newBoard,
      currentPlayer,
      gameInfo: `${currentPlayer} has won.`
    });  
  }
  return Object.assign({}, {
    board: newBoard,
    currentPlayer: otherPlayer(currentPlayer)
  });
}

export default move;