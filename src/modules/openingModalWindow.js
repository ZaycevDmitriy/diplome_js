const openingModalWindow = (modalWindow, modalBtns) => {

  const modalOverlay = document.querySelector('.modal-overlay');
  // функция закрытия модального окна.
  let target;
  const closePopUpCallback = event => {
    target = event.target;

    if (target.getAttribute('data-application')) {
      const form = document.forms.application,
        input = form.elements.service_name;

      input.value = target.getAttribute('data-application');
    }
    if (target.matches('.modal-overlay') || target.closest('.modal-close')) {
      modalOverlay.style.display = 'none';
      modalWindow.classList.add('animate__zoomOut');
      // задержка, чтобы успела отработать анимация закрытия окна
      setTimeout(() => {
        modalWindow.style.display = 'none';
      }, 500);
      setTimeout(() => {
        modalWindow.classList.remove('animate__zoomOut');
      }, 700);
      // при закрытии модального окна удаляем обработчик события
      document.body.removeEventListener('click', closePopUpCallback);
    }
  };
    // функция открытия модального окна
  const openingPopUpCallback = () => {
    modalOverlay.style.display = 'block';
    modalWindow.style.display = 'block';
    // добавляем класс для плавного появления окна (анимация)
    modalWindow.classList.add('animate__zoomIn');
    // через 1.5 сек удаляем класс анимации.
    setTimeout(() => {
      modalWindow.classList.remove('animate__zoomIn');
    }, 1500);
    // навешиваем на body обработчик для закрытия модального окна
    document.body.addEventListener('click', closePopUpCallback);
  };
    // навешиваем на кнопку заказать звонок обработчик и вызываем при клике функцию открытия модального окна.
  modalBtns.forEach(btn => {
    btn.addEventListener('click', openingPopUpCallback);
  });
  return target;
};

export default openingModalWindow;
