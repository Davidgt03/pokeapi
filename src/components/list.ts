import { Component } from './component';
import './list.css';
import { ApiRepository } from '../data/api.repository';
import { PokemonStructure } from '../model/pokemon';
import { Detail } from './detail';

export class List extends Component {
  pokemons: PokemonStructure[];
  repo: ApiRepository;
  detail: Detail;
  currentPage: number;
  limit: number;
  offset: number;

  constructor(selector: string) {
    super(selector);
    this.pokemons = [];
    this.repo = new ApiRepository();
    this.detail = new Detail('#pokemon-detail');
    this.currentPage = 1;
    this.limit = 20;
    this.offset = 0;
    this.handleLoad();
  }

  async handleLoad() {
    this.pokemons = await this.repo.getAll(this.limit, this.offset);
    this.template = this.createTemplate();
    console.log(this.pokemons);
    this.render();
  }

  createTemplate() {
    const list = this.pokemons
      .map(
        (pokemon: PokemonStructure, index: number) => `
          <li data-index="${index}">
            <h3>${pokemon.name.toUpperCase()}</h3>
            <img src="${
              pokemon.sprites.front_default
            }" width="150" height="150">
            <h4>Type: ${pokemon.types[0].type.name.toUpperCase()}</h4>
          </li>`
      )
      .join('');

    return `<div class="pokemon-list-container">
              <ul class="pokemon-list">${list}</ul>
              <div class="pagination">
                <button class="previous-button">Anterior</button>
                <button class="next-button">Siguiente</button>
              </div>
            </div>`;
  }

  afterRender() {
    const listItems = this.element.querySelectorAll('li');
    listItems.forEach((li: Element, index: number) => {
      li.addEventListener('click', () => {
        this.detail.setPokemon(this.pokemons[index]);
        const modal = this.detail.element;
        modal.style.display = 'block';
      });
    });

    const previousButton = this.element.querySelector('.previous-button');
    if (previousButton) {
      previousButton.addEventListener('click', () => {
        this.previousPage();
      });
    }

    const nextButton = this.element.querySelector('.next-button');
    if (nextButton) {
      nextButton.addEventListener('click', () => {
        this.nextPage();
      });
    }
  }

  async nextPage() {
    this.currentPage++;
    this.offset = (this.currentPage - 1) * this.limit;
    this.pokemons = await this.repo.getAll(this.limit, this.offset);
    this.template = this.createTemplate();
    this.render('beforeend');
  }

  async previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.offset = (this.currentPage - 1) * this.limit;
      this.pokemons = await this.repo.getAll(this.limit, this.offset);
      this.template = this.createTemplate();
      this.render('beforeend');
    }
  }

  // eslint-disable-next-line no-undef
  render(position: InsertPosition = 'beforeend'): HTMLElement {
    const renderedElement = super.render(position);
    this.afterRender();
    return renderedElement;
  }
}
