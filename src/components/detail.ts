import { PokemonStructure } from '../model/pokemon';
import { Component } from './component';
import './detail.css';

export class Detail extends Component {
  pokemon: PokemonStructure | null;

  constructor(selector: string) {
    super(selector);
    this.pokemon = null;
  }

  setPokemon(pokemon: PokemonStructure) {
    this.pokemon = pokemon;
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    if (!this.pokemon) return '';

    let abilitiesStr = 'None';
    if (this.pokemon.abilities) {
      abilitiesStr = this.pokemon.abilities
        .map((a) => a.ability.name)
        .join(', ');
    }

    return `
    <div class="modal">
      <div class="modal-content">
        <span class="close">&times;</span>
        <h2>${this.pokemon.name.toUpperCase()}</h2>
        <img src="${
          this.pokemon.sprites.front_default
        }" width="200" height="200">
        <h3>Type: ${this.pokemon.types
          .map((t) => t.type.name.toUpperCase())
          .join(', ')}</h3>
        <h4>Abilities: ${abilitiesStr}</h4>
        <h4>Height: ${this.pokemon.height || 'Unknown'}</h4>
        <h4>Weight: ${this.pokemon.weight || 'Unknown'}</h4>
        <h4>Base experience: ${this.pokemon.base_experience || 'Unknown'}</h4>
        <h4>Order: ${this.pokemon.order || 'Unknown'}</h4>
      </div>
    </div>
  `;
  }

  afterRender() {
    const modal = this.element;
    const closeBtn = modal.querySelector('.close') as HTMLElement;
    // eslint-disable-next-line no-unused-vars
    const modalContent = modal.querySelector('.modal-content') as HTMLElement;

    // Cerrar el modal al hacer clic en el botón de cierre
    closeBtn.onclick = () => {
      modal.style.display = 'none';
    };

    // Cerrar el modal al hacer clic fuera del contenido del modal
    window.onclick = (event: MouseEvent) => {
      if ((event.target as Element) === modal) {
        modal.style.display = 'none';
      }
    };
  }

  // eslint-disable-next-line no-undef
  render(position: InsertPosition = 'beforeend'): HTMLElement {
    const renderedElement = super.render(position);
    this.afterRender();
    return renderedElement;
  }
}
