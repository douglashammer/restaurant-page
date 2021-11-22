import _ from 'lodash';
import loadHome from './home-page.js';
import loadMenu from './menu.js';
import './style.css';

//document.body.appendChild(loadHome());
document.body.appendChild(loadMenu());

const content = document.getElementById('content');
const tabs = document.getElementById('nav-bar').getElementsByTagName('li');

for(let i = 0; i < tabs.length; i++) {
  let tab = tabs[i];

  tab.addEventListener('click', e => {
    if(tab.textContent === 'Home') {
      content.innerHTML = '';
      document.body.appendChild(loadHome());
    } else if (tab.textContent === 'Menu') {
      content.innerHTML = '';
      document.body.appendChild(loadMenu());
    } else if (tab.textContent === 'Contact') {
      console.log('contact')
    }
  })
};





