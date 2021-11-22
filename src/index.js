import _ from 'lodash';
import loadHome from './home-page.js';
import loadMenu from './menu.js';
import navBar from './nav-bar.js';
import footer from './footer.js';
import './style.css';

document.body.appendChild(navBar());
document.body.appendChild(loadHome());
document.body.appendChild(loadMenu());
document.body.appendChild(footer());

const homeWrapper = document.querySelector('.home-wrapper');
const menuWrapper = document.querySelector('.menu-wrapper');

const tabs = document.getElementById('nav-bar').getElementsByTagName('li');

for(let i = 0; i < tabs.length; i++) {
  let tab = tabs[i];

  tab.addEventListener('click', e => {
    if(tab.textContent === 'Home') {
      console.log('home')
      menuWrapper.classList.add('hidden')
      homeWrapper.classList.remove('hidden');
    } else if (tab.textContent === 'Menu') {
      homeWrapper.classList.add('hidden');
      menuWrapper.classList.remove('hidden');
    } else if (tab.textContent === 'Contact') {
      console.log('contact')
    }
  })
};





