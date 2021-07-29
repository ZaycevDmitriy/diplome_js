const accordion = () => {
  const accordionSection = document.querySelector('.accordeon'),
    accordionElems = accordionSection.querySelectorAll('.element'),
    titleAcc = accordionSection.querySelectorAll('.title');

  accordionSection.addEventListener('click', event => {
    const target = event.target;

    titleAcc.forEach((item, index) => {
      if (target === item) {
        accordionElems[index].classList.toggle('active');
      } else {
        accordionElems[index].classList.remove('active');
      }
    });
  });

};

export  default  accordion;
