import { Component } from './component';
import './main.css';

export class Main extends Component {
  // eslint-disable-next-line no-unused-vars
  constructor(selector: string, public title: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
    console.log(this.element);
  }

  createTemplate() {
    return `
      <main class="main">
        <div class="pokeback"> </div>
        <div id="pokemon-detail"></div>
      </main>
    `;
  }
}
