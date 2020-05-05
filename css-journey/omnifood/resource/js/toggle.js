const navBar = document.querySelector('.main-nav');
const navIcon = document.querySelector('.nav-icon');

navIcon.addEventListener('click', (e) => {
  navBar.classList.toggle('active');
  if(navIcon.name === 'reorder-four-outline')
    navIcon.setAttribute('name', 'close-outline');
  else
    navIcon.setAttribute('name', 'reorder-four-outline');
});