let boards = document.querySelector('.boards');
let arrowDown = document.querySelector('.fa-chevron-down');
export function burger() {
  boards.classList.toggle('activBoards');
  arrowDown.classList.toggle('none');
}
