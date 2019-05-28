import { html, css, LitElement } from 'lit-element';
import { createStore } from 'wc-state-reducers';
import move from './move';

const reducers = {
  move
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
      <div>${this.gameInfo}</div>
    `;
  }
}
