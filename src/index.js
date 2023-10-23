import { fetchHeader } from './js/api';
import { createCards } from './js/createCards';
import { burger } from './js/boardSelection';

fetchHeader(createCards);

let buttonBoardSelection = document.querySelector('.boardSelection');
buttonBoardSelection.addEventListener('click', burger);
