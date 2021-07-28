const topSlider = () => {
  const slider = document.querySelector('.top-slider'),
    sliderItems = document.querySelectorAll('.item'),
    tableItems = document.querySelectorAll('.table');
  let count = 0;

  const addDots = () => {
    const listDots = document.createElement('ul');
    listDots.classList.add('slick-dots');
    slider.append(listDots);

    for (let i = 0; i < sliderItems.length; i++) {
      const dot = document.createElement('li');
      dot.classList.add('dot');
      if (i === 0) dot.classList.add('slick-active');
      listDots.append(dot);
    }
  };

  addDots();

  const dots = document.querySelectorAll('.dot');

  const removeClass = (items, nameClass) => {
    items.forEach(i => {
      i.classList.remove(nameClass);
    });
  };

  const movingSlides = () => {
    removeClass(sliderItems, 'item-active');
    removeClass(tableItems, 'active');
    removeClass(dots, 'slick-active');
    sliderItems[count].classList.add('item-active');
    tableItems[count].classList.add('active');
    dots[count].classList.add('slick-active');
    count++;
    if (count >= sliderItems.length) count = 0;
  };

  setInterval(movingSlides, 3000);
};

export  default topSlider;
