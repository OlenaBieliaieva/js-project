const charityFunds = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: './img/save-the-children.png',
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: './img/project-hope.png',
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: './img/united24.png',
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: './img/international-medical-corps.png',
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: './img/medicines-sans-frontieres.png',
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: './img/razom.png',
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: './img/action-against-hunger.png',
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: './img/world-vision.png',
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: './img/sergiy-prytula.png',
  },
];

// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

const charityElem = document.querySelector('.support-funds-list');
const swiperBtnElem = document.querySelector('.swiper-button');

function fundsMarkup() {
  const result = charityFunds
    .map(({ title, url, img }) => {
      return `<div class="swiper-slide"> <a class="support-funds-list-link-image-link" href="${url}">
                <img class="support-funds-list-link-image" src="${img}"
                    alt="${title}" target="_blank"
                    rel="noopener noreferrer nofollow"
            </a></div>`;

      return `<li class="support-funds-list-link"> <div class="swiper-slide">
            <a class="support-funds-list-link-image-link" href="${url}">
                <img class="support-funds-list-link-image" src="${img}"
                    alt="${title}" target="_blank"
                    rel="noopener noreferrer nofollow"
            </a>
        </div></li>`;
    })
    .join('');
  charityElem.innerHTML = result;
}
fundsMarkup();

const swiper = new Swiper('.swiper', {
  direction: 'vertical',
  loop: false,
  effect: 'slide',
  slidesPerView: 6,
  slidesPerGroup: 6,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
// swiperBtnElem.addEventListener('click', onBtnClick());

// function onBtnClick(e) {
//   console.log('click');
//   swiper.slideNextEl(2000);
// }
