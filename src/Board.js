import { html, css, LitElement } from 'lit-element';

export default class Board extends LitElement {
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
        <tictactoe-square></tictactoe-square>
        <tictactoe-square></tictactoe-square>
        <tictactoe-square></tictactoe-square>
      </div>
      <div class="row">
        <tictactoe-square></tictactoe-square>
        <tictactoe-square></tictactoe-square>
        <tictactoe-square></tictactoe-square>
      </div>
      <div class="row">
        <tictactoe-square></tictactoe-square>
        <tictactoe-square></tictactoe-square>
        <tictactoe-square></tictactoe-square>
      </div>
    `;
  }
}
