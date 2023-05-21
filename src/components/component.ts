/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
export abstract class Component {
  template!: string;
  element!: HTMLElement; // Cambia de Element a HTMLElement
  constructor(public selector: string) {}

  render(position: InsertPosition = 'beforeend'): HTMLElement {
    const parentElement = document.querySelector(this.selector);
    if (!parentElement) throw new Error('Invalid selector');
    parentElement.insertAdjacentHTML(position, this.template);
    this.element = parentElement.lastElementChild as HTMLElement; // Usa as HTMLElement para afirmar el tipo
    return this.element;
  }
}
