import openingModalWindow from "./openingModalWindow";

const openingModalWindowApplication = () => {
  const modalApplication = document.getElementById('application'),
    servicesElements = document.querySelector('.services-elements'),
    servicesBtns = servicesElements.querySelectorAll('.fancyboxModal');

  openingModalWindow(modalApplication, servicesBtns);

};

export default openingModalWindowApplication;
