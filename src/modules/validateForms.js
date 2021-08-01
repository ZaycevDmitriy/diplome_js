const validateForms = () => {
  const formsElems = document.querySelectorAll('form');

  const validateInputText = input => {
    input.value = input.value.replace(/[^а-яё\-\s\n]/gim, '');
  };

  const firsLetterToUpperCase = input => {
    input.value = input.value.replace(/^[а-я]/gi, match => match.toUpperCase());
  };

  formsElems.forEach(form => {
    form.addEventListener('input', event => {
      const target = event.target;

      if (target.name === 'fio') {
        validateInputText(target);
        firsLetterToUpperCase(target);
      }

      if (target.name === 'tel') {
        target.value = target.value.replace(/[^+\-()\d]/g, '');
      }

      if (target.name === 'message') {
        target.value = target.value.replace(/[^а-яё\-\s\n.,]/gim, '');
      }
    });

    form.addEventListener('blur', event => {
      const target = event.target;

      if (target.name === 'tel') {
        target.value = target.value.trim();
        const correctPhone = target.value.match(/(\+?)([78])(-?\(?)*(\d{3})(\)?-?)([-])*(\d{3})([-])*(\d{2})([-])*(\d{2})/);
        if (correctPhone) {
          target.value = `${correctPhone[1]}${correctPhone[2]}${correctPhone[4]}${correctPhone[7]}${correctPhone[9]}${correctPhone[11]}`;
        } else {
          target.value = '';
        }
      }
    }, true);
  });
};

export default validateForms;
