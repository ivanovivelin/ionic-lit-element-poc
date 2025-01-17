// Import the LitElement base class and html helper function
import { LitElement, html, css } from 'https://unpkg.com/lit-element/lit-element.js?module';

class MyElement extends LitElement {

  static get properties() {
    return {
      mood: {type: String}
    }
  }
  
  static get styles() {
    return css`.mood { color: green; }`;
  }

  render() {
    return html`Web Components are <span class="mood">${this.mood}</span>!`;
  }
}

customElements.define('my-element', MyElement);