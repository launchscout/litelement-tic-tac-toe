import { html, css, LitElement } from 'lit-element';
import { createStore } from 'wc-state-reducers';

const reducers = {
  move: ({ board, currentPlayer }, index) => {
    console.log(board, currentPlayer, index);
    const newBoard = [...board.slice(0, index), currentPlayer, ...board.slice(index+1)];
    return Object.assign({}, {
      board: newBoard,
      currentPlayer: currentPlayer === 'X' ? 'O' : 'X'
    });
  }
}

export default class TicTacToe extends LitElement {

  static get properties() {
    return {
      board: { type: Object },
      gameInfo: { type: String }
    }
  }

  constructor() {
    super();
    this.store = createStore(this, reducers, {
      board: [
        '','','',
        '','','',
        '','',''
      ],
      currentPlayer: 'X'
    });
    this.store.subscribe(({ board, gameInfo}) => {
      this.board = board;
      this.gameInfo = gameInfo;
    });
  }

  render() {
    return html`
      <tictactoe-board .board=${this.board}></tictactoe-board>
      <tictactoe-game-info .gameInfo=${this.gameInfo}></tictactoe-game-info>
    `;
  }
}
