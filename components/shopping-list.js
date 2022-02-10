import { LitElement, html } from '../node_modules/lit/index.js';

export class ShoppingList extends LitElement {
  static properties = {
    items: { type: Array },
  };

  constructor() {
    super();
    this.items = [];
  }

  render() {
    if (this.items.length === 0) {
      return 'No items';
    }
    return html`
      <ul>
        ${this.items.map((item) => html` <li>${item}</li> `)}
      </ul>
    `;
  }
}

customElements.define('shopping-list', ShoppingList);
