const accordion = () => {
  const accordionSection = document.querySelector('.accordeon'),
    accordionElems = document.querySelectorAll('.element'),
    accordionElemsContent = document.querySelectorAll('.element-content');

  const closeElem = () => {
    accordionElems.forEach(i => {
      i.classList.remove('active');
    });

    accordionElemsContent.forEach(i => {
      i.style.display = 'none';
    });
  };

  accordionSection.addEventListener('click', event => {
    const target = event.target;

    if (target.matches('.title')) {
      if (target.parentElement.classList.contains('active')) {
        closeElem();
      } else {
        closeElem();
        target.parentElement.classList.add('active');
        target.nextElementSibling.style.display = 'block';
      }
    }
  });
};

export  default  accordion;
