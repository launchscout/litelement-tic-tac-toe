import { html, css, LitElement } from 'lit-element';
import { dispatch } from 'wc-state-reducers';

export default class Square extends LitElement {
  
  constructor() {
    super();
  }

  static get properties() {
    return {
      player: { type: String },
      index: { type: Number }
    }
  }

  static get styles() {
    return css`
      .square {
        background: #fff;
        border: 1px solid #999;
        float: left;
        font-size: 24px;
        font-weight: bold;
        line-height: 34px;
        height: 34px;
        margin-right: -1px;
        margin-top: -1px;
        padding: 0;
        text-align: center;
        width: 34px;
      }
      .square:focus {
        outline: none;
      }
      
    `;
  }

  handleClick(e) {
    dispatch(this, 'move', this.index )
  }

  render() {
    return html`
      <button class="square" @click=${(e) => { this.handleClick(e) } }>${this.player}</button>
    `;
  }
}
