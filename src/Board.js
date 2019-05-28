import { html, css, LitElement } from 'lit-element';
import { createStore } from 'wc-state-reducers';

export default class Board extends LitElement {

  static get properties() {
    return {
      board: { type: Object }
    };
  }

  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 105px;
      }
    `;
  }

  render() {
    return html`
      <div class="row">
        <tictactoe-square .index=${0} .player=${this.board[0]}></tictactoe-square>
        <tictactoe-square .index=${1} .player=${this.board[1]}></tictactoe-square>
        <tictactoe-square .index=${2} .player=${this.board[2]}></tictactoe-square>
      </div>
      <div class="row">
        <tictactoe-square .index=${3} .player=${this.board[3]}></tictactoe-square>
        <tictactoe-square .index=${4} .player=${this.board[4]}></tictactoe-square>
        <tictactoe-square .index=${5} .player=${this.board[5]}></tictactoe-square>
      </div>
      <div class="row">
        <tictactoe-square .index=${6} .player=${this.board[6]}></tictactoe-square>
        <tictactoe-square .index=${7} .player=${this.board[7]}></tictactoe-square>
        <tictactoe-square .index=${8} .player=${this.board[8]}></tictactoe-square>
      </div>
    `;
  }
}
