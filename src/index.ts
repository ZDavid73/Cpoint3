import "./components/export"
import { dataCatFact, dataCatImage } from "./types/api";

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
        console.log("Gatos tristes")
    }

    render() {
        const catscomp = this.ownerDocument.createElement('app-cats');
        this.shadowRoot?.appendChild(catscomp);
    }
}

customElements.define('app-container', AppContainer)