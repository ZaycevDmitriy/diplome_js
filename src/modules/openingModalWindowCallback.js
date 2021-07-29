import openingModalWindow from "./openingModalWindow";

const openingModalWindowCallback = () => {
  const modalCallback = document.getElementById('callback'),
    modalCallbackBtns = document.querySelectorAll('.callback-btn');

  openingModalWindow(modalCallback, modalCallbackBtns);

};

export default openingModalWindowCallback;
