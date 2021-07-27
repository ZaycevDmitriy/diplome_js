const openingModalWindowCallback = () => {
  const modalCallback = document.getElementById('callback'),
    modalCallbackBtns = document.querySelectorAll('.callback-btn'),
    modalOverlay = document.querySelector('.modal-overlay');
  // функция закрытия модального окна.
  const closePopUpCallback = event => {
    const target = event.target;
    if (target.matches('.modal-overlay') || target.closest('.modal-close')) {
      modalOverlay.style.display = 'none';
      modalCallback.classList.add('animate__zoomOut');
      // задержка, чтобы успела отработать анимация закрытия окна
      setTimeout(() => {
        modalCallback.style.display = 'none';
      }, 500);
      setTimeout(() => {
        modalCallback.classList.remove('animate__zoomOut');
      }, 700);
      // при закрытии модального окна удаляем обработчик события
      document.body.removeEventListener('click', closePopUpCallback);
    }
  };
  // функция открытия модального окна
  const openingPopUpCallback = () => {
    modalOverlay.style.display = 'block';
    modalCallback.style.display = 'block';
    // добавляем класс для плавного появления окна (анимация)
    modalCallback.classList.add('animate__zoomIn');
    // через 1.5 сек удаляем класс анимации.
    setTimeout(() => {
      modalCallback.classList.remove('animate__zoomIn');
    }, 1500);
    // навешиваем на body обработчик для закрытия модального окна
    document.body.addEventListener('click', closePopUpCallback);
  };
  // навешиваем на кнопку заказать звонок обработчик и вызываем при клике функцию открытия модального окна.
  modalCallbackBtns.forEach(btn => {
    btn.addEventListener('click', openingPopUpCallback);
  });
};

export default openingModalWindowCallback;
