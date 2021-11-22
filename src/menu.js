import navBar from './nav-bar.js';
import createImg from './image-creator.js';
import item1 from './black-coffee.png';
import item2 from './latte.png';
import item3 from './cappucino.png';
import item4 from './croissant.png';
import item5 from './muffins.png';

export default function loadMenu() {
  const content = document.getElementById('content');

  // menu
  const menu = document.createElement('div');
  menu.setAttribute('id', 'menu');

  let coffee = createImg(item1, 'black coffee');
  let latte = createImg(item2, 'latte');
  let cappucino = createImg(item3, 'cappucino');
  let croissant = createImg(item4, 'croissant');
  let muffins = createImg(item5, 'muffins');
  
  const menuHTML = `
    <div class="menu-wrapper hidden">
    <h2>Menu</h2>
      <div class="menu-item">
        <img src=${coffee.src} title=${coffee.title}>
          <div class="menu-copy">
            <h4>Coffee<span>3.00</span></h4>
            <p>Choose a pourover or drip of your choice! Available hot or iced.</p>
          </div
      </div>
      <div class="menu-item">
        <img src=${latte.src} title=${latte.title}>
          <div class="menu-copy">
            <h4>Latte<span>5.00</span></h4>
            <p>Classic latte. Dairy alternatives available. Order it hot or iced.</p>
          </div
      </div>
      <div class="menu-item">
        <img src=${cappucino.src} title=${cappucino.title}>
          <div class="menu-copy">
            <h4>Cappucino<span>5.00</span></h4>
            <p>Classic cappucino. Dairy alternatives available. Order it hot or iced.</p>
          </div
      </div>
      <div class="menu-item">
        <img src=${croissant.src} title=${croissant.title}>
          <div class="menu-copy">
            <h4>Croissant<span>4.00</span></h4>
            <p>Buttery and delicious! Made in house. Get 'em while they're hot!</p>
          </div
      </div>
      <div class="menu-item">
        <img src=${muffins.src} title=${muffins.title}>
          <div class="menu-copy">
            <h4>Muffin<span>4.50</span></h4>
            <p>Choose from choclate, blueberry, or banana. Vegan and made in house!</p>
          </div
      </div>
    </div>
  `;

  menu.innerHTML = menuHTML;
  content.appendChild(menu);

  return content;
}