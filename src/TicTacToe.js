import { html, css, LitElement } from 'lit-element';

export default class TicTacToe extends LitElement {


  constructor() {
    super();
    this.heading = 'Hello world!';
  }

  render() {
    return html`
      <tictactoe-board></tictactoe-board>
      <tictactoe-game-info></tictactoe-game-info>
    `;
  }
}
