/* eslint-disable no-new */
import { Header } from './components/header';
import { Main } from './components/main';
import { List } from './components/list';
import { Footer } from './components/footer';

new Header('.container', 'Pokeapi');

new Main('.container', 'poke');

new List('.pokeback');

new Footer('.container', '');
