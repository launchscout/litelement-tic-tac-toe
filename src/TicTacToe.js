import { html, css, LitElement } from 'lit-element';

export default class TicTacToe extends LitElement {

  static get properties() {
    return {
      heading: { type: String }
    }
  }

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
