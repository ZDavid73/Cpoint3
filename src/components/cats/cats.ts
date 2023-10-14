import { dataCatFact, dataCatImage} from "../../types/api";
export default class AppCats extends HTMLElement {
  catfact: string = '';
  catimag: string = '';

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  async handleClick() {
    this.catfact = await dataCatFact();
    this.catimag = await dataCatImage();
    this.render();
  }

  render() {
    this.shadowRoot!.innerHTML = '';

    const button = this.ownerDocument.createElement('button');
    button.innerText = 'new cat';
    button.onclick = () => this.handleClick();
    this.shadowRoot?.appendChild(button);

    const container = this.ownerDocument.createElement('div');

    if (this.catimag) {
      const img = this.ownerDocument.createElement('img');
      img.src = this.catimag;
      img.alt = 'cat image';
      container.appendChild(img);
    }

    if (this.catfact) {
      const fact = this.ownerDocument.createElement('h3');
      fact.textContent = this.catfact;
      container.appendChild(fact);
    }
  }
}

customElements.define('app-cats', AppCats);
