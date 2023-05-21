/* eslint-disable no-unused-vars */
import { Component } from './component';
import './footer.css';
export class Footer extends Component {
  constructor(selector: string, public title: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render('beforeend');
    console.log(this.element);
  }

  createTemplate() {
    return `
    <footer class="main-header">
      <h3 class="footer-title">${this.title}</h3>
    </footer>
    `;
  }
}
