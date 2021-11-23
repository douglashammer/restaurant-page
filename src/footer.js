export default function footer() {
  const footer = document.createElement('footer');
 
	const footerHTML = `
    <div class="footer-container">
      <div class="footer-row">
        <div class="footer-column">
          <h3>Main Menu</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
        <div class="footer-column">
          <h3>Social</h3>
            <ul>
              <li><a href="#instagram">Instagram</a></li>
              <li><a href="#twitter">Twitter</a></li>
              <li class="copyright">Copyright © 2021 Dougz Coffee.</li>
            </ul
        </div>
      </div>
    </div>
  `;
  footer.innerHTML = footerHTML; 
  
  return footer;
}