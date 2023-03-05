// pages links
const homeLink = document.getElementById('home-page-link');
const aboutLink = document.getElementById('about-page-link');
const mediaLink = document.getElementById('media-page-link');
const faqLink = document.getElementById('FAQ-page-link');
const contactLink = document.getElementById('contact-page-link');

// pages
const homePage = document.getElementById('home-page');
const aboutPage = document.getElementById('about-page');
const mediaPage = document.getElementById('media-page');
const faqPage = document.getElementById('FAQ-page');
const contactPage = document.getElementById('contact-page');

// функции для переключения страниц
function showHomePage() {
  homePage.classList.remove('d-none');
  aboutPage.classList.add('d-none');
  mediaPage.classList.add('d-none');
  faqPage.classList.add('d-none');
  contactPage.classList.add('d-none');
}

function showAboutPage() {
  homePage.classList.add('d-none');
  aboutPage.classList.remove('d-none');
  mediaPage.classList.add('d-none');
  faqPage.classList.add('d-none');
  contactPage.classList.add('d-none');
}

function showMediaPage() {
  homePage.classList.add('d-none');
  aboutPage.classList.add('d-none');
  mediaPage.classList.remove('d-none');
  faqPage.classList.add('d-none');
  contactPage.classList.add('d-none');
}

function showFAQPage() {
  homePage.classList.add('d-none');
  aboutPage.classList.add('d-none');
  mediaPage.classList.add('d-none');
  faqPage.classList.remove('d-none');
  contactPage.classList.add('d-none');
}

function showContactPage() {
  homePage.classList.add('d-none');
  aboutPage.classList.add('d-none');
  mediaPage.classList.add('d-none');
  faqPage.classList.add('d-none');
  contactPage.classList.remove('d-none');
}

// добавляем обработчики событий на ссылки для переключения страниц
homeLink.addEventListener('click', showHomePage);
aboutLink.addEventListener('click', showAboutPage);
mediaLink.addEventListener('click', showMediaPage);
faqLink.addEventListener('click', showFAQPage);
contactLink.addEventListener('click', showContactPage);