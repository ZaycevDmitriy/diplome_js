const openingModalWindowCallback = () => {
    const modalCallback = document.getElementById('callback'),
        modalCallbackBtns = document.querySelectorAll('.callback-btn'),
        modalOverlay = document.querySelector('.modal-overlay');

    const closePopUpCallback = event => {
        const target = event.target;
        if (target.matches('.modal-overlay') || target.matches('.modal-close img')) {
            modalOverlay.style.display = 'none';
            modalCallback.classList.add('animate__zoomOut');
            setTimeout(() => {
                modalCallback.style.display = 'none';
            }, 500);
            setTimeout(() => {
                modalCallback.classList.remove('animate__zoomOut');
            }, 700);
            document.body.removeEventListener('click', closePopUpCallback);
        }
    };

    const openingPopUpCallback = () => {
        modalOverlay.style.display = 'block';
        modalCallback.style.display = 'block';
        modalCallback.classList.add('animate__zoomIn');
        setTimeout(() => {
            modalCallback.classList.remove('animate__zoomIn');
        }, 1500);
        document.body.addEventListener('click', closePopUpCallback);
    };

    modalCallbackBtns.forEach(btn => {
        btn.addEventListener('click', openingPopUpCallback);
    });
};

export default openingModalWindowCallback;
