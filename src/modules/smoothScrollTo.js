const smoothScrollTo = () => {
  const links = document.querySelectorAll('.scroll'),
    headerWrapper = document.querySelector('.header-wrapper'),
    buttonUp = document.querySelector('.up'),
    servicesSection = document.querySelector('.services-section'),
    // высота шапки
    heightHeaderWrapper = headerWrapper.offsetHeight,
    servicesSectionTop = servicesSection.offsetTop;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;

    if (scrollTop >= servicesSectionTop - heightHeaderWrapper) {
      if (buttonUp.classList.contains('animate__zoomOut')) buttonUp.classList.remove('animate__zoomOut');
      buttonUp.style.display = 'block';
      buttonUp.classList.add('animate__zoomInDown');
    } else {
      buttonUp.classList.remove('animate__zoomInDown');
      buttonUp.classList.add('animate__zoomOut');
      setTimeout(() => {
        buttonUp.style.display = 'none';
      }, 200);
    }
  });

  buttonUp.addEventListener('click', () => {
    window.scrollTo({
      behavior: "smooth",
      left: 0,
      top: 0,
    });
  });

  links.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();

      const blockID = event.target.getAttribute('href').slice(1);
      const heightElement = document.getElementById(blockID).offsetTop;
      window.scrollTo({
        behavior: "smooth",
        left: 0,
        top: (heightElement - heightHeaderWrapper),
      });
    });
  });
};

export default smoothScrollTo;
