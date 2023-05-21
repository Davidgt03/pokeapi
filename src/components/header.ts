/* eslint-disable no-unused-vars */
import { Component } from './component';
import './header.css';
export class Header extends Component {
  constructor(selector: string, public title: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render('afterbegin');
    console.log(this.element);
  }

  createTemplate() {
    return `
    <header class="main-header">
  <h1 class="main-title"><img height="175" width="300" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png" alt=""></h1>
    </header>
    `;
  }
}
