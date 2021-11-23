import _ from 'lodash';
import loadHome from './home-page.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';
import navBar from './nav-bar.js';
import footer from './footer.js';
import './style.css';

document.body.appendChild(navBar());
document.body.appendChild(loadHome());
document.body.appendChild(loadMenu());
document.body.appendChild(loadContact());
document.body.appendChild(footer());

const homeWrapper = document.querySelector('.home-wrapper');
const menuWrapper = document.querySelector('.menu-wrapper');
const contactWrapper = document.querySelector('.contact-wrapper');


// tab changing logic
const tabs = document.getElementById('nav-bar').getElementsByTagName('li');

for (let i = 0; i < tabs.length; i++) {
	let tab = tabs[i];

	tab.addEventListener('click', (e) => {
		if (tab.textContent === 'Home') {
			homeWrapper.classList.remove('hidden');
			menuWrapper.classList.add('hidden');
			contactWrapper.classList.add('hidden');
		} else if (tab.textContent === 'Menu') {
			menuWrapper.classList.remove('hidden');
			homeWrapper.classList.add('hidden');
			contactWrapper.classList.add('hidden');
		} else if (tab.textContent === 'Contact') {
			contactWrapper.classList.remove('hidden');
			homeWrapper.classList.add('hidden');
			menuWrapper.classList.add('hidden');
		}
	});
}
