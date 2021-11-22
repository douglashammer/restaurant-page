import navBar from './nav-bar.js';
export default function loadMenu() {
  const content = document.getElementById('content');
  content.appendChild(navBar());

  

  return content;
}