let wrapCards = document.querySelector('.wrapAllCards');
export function createCards(elementFile) {
  let wrapCard = document.createElement('div');
  wrapCard.classList.add('wrapCard');
  wrapCards.append(wrapCard);

  let imgContainer = document.createElement('div');
  imgContainer.classList.add('wrapImg');
  wrapCard.append(imgContainer);

  let img = document.createElement('img');
  img.setAttribute('src', elementFile);
  img.classList.add('imgCard');
  imgContainer.append(img);
}
