import dougzLogo from './dougz-favicon.png';
import createImg from './image-creator.js';

export default function loadContact() {

  const content = document.getElementById('content');
  const contact = document.createElement('div');
  contact.setAttribute('id', 'content');

  const contactImg = createImg(dougzLogo, 'Dougz Logo');

  const contactHTML = `
    <div class="contact-wrapper hidden">
      <div class="contact-head">
        <img src="${contactImg.src}" title="${contactImg.title}">
        <h2>Contact Us</h2>
        <p>We love hearing from our customers, so grap a cup and tell us what's on your mind.</p>
      </div>
      <div class="form-wrapper">
        <div class="contact-info">
          <h3>Contact Information</h3>
          <ul>
            <li>142 S. Ellis St.</li>
            <li>San Francisco, CA</li>
            <li>(123)232-1212</li>
            <li>doug@dougzcoffee.help</li>
          </ul>
        </div>
          <form>
            <p>
              <label for="f-name">First Name</label>
              <input type="text" name="f-name" id="f-name" required>
            </p>
            <p>
              <label for="l-name">Last Name</label>
              <input type="text" name="l-name" id="l-name" required>
            </p>
            <p>
              <label for="email">Email</label>
              <input type="text" name="email" id="email" required>
            </p>
            <p>
              <label for="phone">Phone Number (Optional)</label>
              <input type="text" name="phone" id="phone">
            </p>
            <p class="full-width">
              <label for="help">How can we help you?</label>
              <input type="text" name="help" id="help">
            </p>
            <p class="full-width">
              <button>Submit</button>
            </p>
          </form>
      </div>
    </div>
  `;

  contact.innerHTML = contactHTML;
  content.appendChild(contact);

  return content;
};