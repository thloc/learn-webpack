import Pikachu from './pikachu.jpeg';

function addImage() {
  const img = document.createElement('img');
  img.alt = 'Pikachu';
  img.width = 300;
  img.src = Pikachu;

  const body = document.querySelector('body');
  body.appendChild(img);
}

export default addImage;