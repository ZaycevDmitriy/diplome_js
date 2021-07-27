const openingMobileMenu = () => {
  const mobileMenuBtn = document.querySelector('.mob-menu-btn'),
    mobileMenu = document.querySelector('.mobile-menu');

  const closeMobileMenu = event => {
    const target = event.target;
    if (
      target.matches('.overlay') ||
      target.matches('.mobile-menu-close') ||
      target.matches('.scroll') ||
      target.matches('.callback-btn')
    ) {
      mobileMenu.classList.remove('open');
      document.body.removeEventListener('click', closeMobileMenu);
    }
  };

  mobileMenuBtn.addEventListener('click', ()  => {
    mobileMenu.classList.add('open');
    document.body.addEventListener('click', closeMobileMenu);
  });
};

export default openingMobileMenu;
