const navToggle = document.querySelector('[aria-controls="primary-nav"]');
const primaryNav = document.querySelector('#primary-nav');

navToggle.addEventListener('click', () => {
  const isNavOpen = navToggle.getAttribute('aria-expanded');

  isNavOpen === 'false' 
    ? navToggle.setAttribute('aria-expanded', 'true') 
    : navToggle.setAttribute('aria-expanded', 'false')

  console.log(isNavOpen)
})
