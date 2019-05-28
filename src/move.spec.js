import move from './move';
import { expect } from '@open-wc/testing';

describe('move', () => {
  const initialState = {
    board: [
      '','','',
      '','','',
      '','',''
    ],
    currentPlayer: 'X',
  }
  it('allows a simple player move', () => {
    const newState = move(initialState, 1);
    expect(newState.board[1]).to.equal('X');
    expect(newState.currentPlayer).to.equal('O');
  });
  it('prevents an illegal move', () => {
    const firstMove = move(initialState, 1);
    const secondMove = move(firstMove, 1);
    expect(secondMove.board[1]).to.equal('X');
    expect(secondMove.currentPlayer).to.equal('O');
    expect(secondMove.gameInfo).to.equal('Illegal move.');
  });
  it('checks for wins', () => {
    const almostWonBoard = [
      'X','X','',
      '','','',
      '','',''
    ];
    const winningMove = move({...initialState, board: almostWonBoard}, 2);
    expect(winningMove.gameInfo).to.equal('X has won.');
    expect(winningMove.currentPlayer).to.equal('X');
  });
});