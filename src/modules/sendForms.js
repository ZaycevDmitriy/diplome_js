const sendForms = () => {
  const errorMessage = 'Что-то пошло не так...',
    successMessage = 'Спасибо! Мы скоро с вами свяжемся!';
  const forms = document.querySelectorAll('form');
  const modalOverlay = document.querySelector('.modal-overlay'),
    responseMessageModal = document.getElementById('responseMessage'),
    modalContent = responseMessageModal.querySelector('.modal-content'),
    load = responseMessageModal.querySelector('.spinner'),
    closeBtn = responseMessageModal.querySelector('.fancyClose');
  const statusMessage = document.createElement('div');
  statusMessage.style.cssText = `font-size: 2rem`;

  const postData = async (data, cb) => {

    const response = await fetch('./server.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch`);
    }
    cb(response.status);
  };

  const closedWindow = () => {
    responseMessageModal.style.display = 'none';
    modalOverlay.style.display = 'none';
    statusMessage.remove();
    closeBtn.removeEventListener('click', closedWindow);
  };

  forms.forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      const modalWindow = form.closest('.modal');
      modalWindow.style.display = 'none';
      modalOverlay.style.display = 'none';
      responseMessageModal.style.display = 'block';
      load.style.display = 'block';

      const formData = new FormData(form);
      const data = {};
      formData.forEach(((value, key) => data[key] = value));

      const addStatusMessage = message => {
        load.style.display = 'none';
        modalContent.append(statusMessage);
        if (message === errorMessage) statusMessage.style.color = 'red';
        if (message === successMessage) statusMessage.style.color = '#2fab6d';
        statusMessage.textContent = message;
        closeBtn.addEventListener('click', closedWindow);
        form.reset();
      };

      postData(data,
        () => {
          addStatusMessage(successMessage);
        }).catch(error => {
        addStatusMessage(errorMessage);
        console.error(error);
      });
    });
  });
};

export default sendForms;
