const sliderCarousel = () => {
  const servicesElement = document.querySelector('.services-elements'),
    servicesCarousel = document.querySelector('.services-carousel'),
    slides = document.querySelectorAll('.services-carousel > div'),
    prevArrow = document.querySelector('.arrow-left'),
    nextArrow = document.querySelector('.arrow-right');

  let slideCount = 0;
  let showSlides = 3;
  let slideSize = 100 / showSlides;

  const addFlexElems = () => {
    slides.forEach(item => {
      item.style.flex = `0 0 ${slideSize}%`;
    });
  };

  addFlexElems();

  const slideResize = n => {
    showSlides = n;
    slideSize = 100 / showSlides;
    addFlexElems();
  };

  window.addEventListener('resize', () => {
    const windowWidth = document.documentElement.clientWidth;

    if (windowWidth < 870 && windowWidth > 650) {
      slideResize(2);
    } else if (windowWidth <= 650) {
      slideResize(1);
    } else {
      slideResize(3);
    }
  });

  servicesElement.style.overflow = 'hidden';
  servicesCarousel.style.display = 'flex';
  servicesCarousel.style.transition = 'transform 0.5s ease-in-out 0s';
  prevArrow.classList.add('disabled');

  prevArrow.addEventListener('click', () => {
    if (slideCount < 0) {
      nextArrow.classList.remove('disabled');
      slideCount += slideSize;
      servicesCarousel.style.transform = `translateX(${slideCount}%)`;
    } else {
      prevArrow.classList.add('disabled');
    }
  });

  nextArrow.addEventListener('click', () => {
    const maxSlide = Math.round((slides.length - showSlides) * -(slideSize));

    if (slideCount > maxSlide) {
      prevArrow.classList.remove('disabled');
      nextArrow.classList.remove('disabled');
      slideCount -= slideSize;
      servicesCarousel.style.transform = `translateX(${slideCount}%)`;
    } else {
      nextArrow.classList.add('disabled');
    }
  });
};

export default sliderCarousel;
