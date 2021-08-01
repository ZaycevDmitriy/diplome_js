const sendForms = () => {
  const errorMessage = 'Что-то пошло не так...',
    loadMessage = 'Загрузка...',
    successMessage = 'Спасибо! Мы скоро с вами свяжемся!';
  const forms = document.querySelectorAll('form');
  const modalOverlay = document.querySelector('.modal-overlay'),
    responseMessageModal = document.getElementById('responseMessage'),
    modalContent = responseMessageModal.querySelector('.modal-content'),
    load = responseMessageModal.querySelector('.spinner'),
    closeBtn = responseMessageModal.querySelector('.fancyClose');
  const statusMessage = document.createElement('div');
  statusMessage.style.cssText = `font-size: 2rem; color: #2fab6d`;

  const postData = async (data, cb, cbError) => {

    const response = await fetch('./server.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      cbError(response.status);
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

      // statusMessage.textContent = loadMessage;
      const formData = new FormData(form);
      const data = {};
      formData.forEach(((value, key) => data[key] = value));

      postData(data,
        () => {
          load.style.display = 'none';
          modalContent.append(statusMessage);
          statusMessage.textContent = successMessage;
          closeBtn.addEventListener('click', closedWindow);
          form.reset();
        },
        error => {
          statusMessage.textContent = errorMessage;
          console.error(error);
        }
      );
    });
  });
};

export default sendForms;
