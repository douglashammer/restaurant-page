import Logo from './dougz-logo.png';
import createImg from './image-creator.js';

export default function navBar() {
	const navBar = document.createElement('nav');
  navBar.setAttribute('id', 'nav-bar');
	// logo
	let logo = createImg(Logo, 'Dougz Coffee');

	// navigation bar
	const navHTML = `
  <img class="logo" src=${logo.src} title=${logo.title}></img>
    <ul>
      <li>Home</li>
      <li>Menu</li>
      <li>Contact</li>
    </ul> 
  `;

  navBar.innerHTML = navHTML;
	return navBar;
}
