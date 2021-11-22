import createImg from './image-creator.js';
import navBar from './nav-bar.js';
import mainImage from './restaurant-bg2.jpg';
import commonRoomImg from './common-room.jpg';
import onyxImg from './onyx.jpg';
import morrowImg from './morrow.jpg';
import locationImg from './dougz-location.jpg';

export default function loadHome() {
  const content = document.getElementById('content');
  const homeWrapper = document.createElement('div');
  homeWrapper.classList.add('home-wrapper');

	// section 1
	const section1 = document.createElement('section');
	const topImg = createImg(mainImage, 'Dougz Coffee Shop');
	section1.classList.add('section1');
	section1.innerHTML = `<img src=${topImg.src} title=${topImg.title}></img>`;

	// section 2
	const section2 = document.createElement('section');
	section2.classList.add('section2');

	const aboutHead = document.createElement('h3');
	aboutHead.textContent = 'About Us';

	const aboutCopy = document.createElement('p');
	aboutCopy.innerHTML +=
		"Here at Dougz Coffee, we value the good things in life, whether that be a cup of our signature 'Morning Mantra Roast' or the warm embrace of a close friend. Our number one goal has always been simple: Lorem Ipsum. So be like us!<br /><i>Do Good. Drink Good.</i>";

	// section 3
	const section3 = document.createElement('section');
	section3.classList.add('section3');

	const productImg1 = createImg(commonRoomImg, 'Common Room Roasters');
	const productImg2 = createImg(onyxImg, 'Onyx Coffee');
	const productImg3 = createImg(morrowImg, 'Morrow Coffee');
	const productHTML = `
  <div class="grid-container">
    <div class="product-pic">
      <img class="logo" src=${productImg1.src} title=${productImg1.title}></img>
    </div>
    <div class="product-copy">
      <span>Common Room Roasters</span>
      Originally from Melbourne, Australia, now located in Newport Beach, we feature their award-winning Brunswick blend on bar as well as seasonal blends for retail and pour overs.</div>
    <div class="product-pic">
      <img class="logo" src=${productImg2.src} title=${productImg2.title}></img>  
    </div>
    <div class="product-copy">
    <span>Onyx Coffee Lab</span>
      Based out of Arkansas, these guys do some phenomenal stuff with coffee. We also offer a variety of their blends up for retail and filter.</div>

    <div class="product-pic">
      <img class="logo" src=${productImg3.src} title=${productImg3.title}></img>
    </div>
    <div class="product-copy">
    <span>Morrow Coffee</span>
      Our friends from Barcelona, Spain sent us some of their unique offerings. Beautiful, aromatic, single-origin bags will be available for a limited time at our shop.</div>
  </div>

  `;

	section3.innerHTML = productHTML;

	// section 4
	const section4 = document.createElement('section');
	section4.classList.add('section4');
	const location = createImg(locationImg, 'Dougz Location');
	section4.innerHTML = `<img src=${location.src} title=${location.title}></img>`;
  
  // append children to DOM
  homeWrapper.appendChild(section1);
  section2.appendChild(aboutHead);
	section2.appendChild(aboutCopy);
  homeWrapper.appendChild(section2);
  homeWrapper.appendChild(section3);
	homeWrapper.appendChild(section4);
  content.appendChild(homeWrapper);

	return content;
}
