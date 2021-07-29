import openingModalWindow from "./openingModalWindow";

const openingModalFeedback = () => {
  const modalFeedback = document.getElementById('feedback'),
    feedbackBtns = document.querySelectorAll('.button-services');

  openingModalWindow(modalFeedback, feedbackBtns);
};

export default openingModalFeedback;
