(() => {
    const fullContainerMenu = document.querySelector('#mobile-container');  // Контейнер с бургером и с мобильным меню
    const btn = fullContainerMenu.querySelector('#burger');                 // Бургер(Кнопка)
    const wrapperMenu = fullContainerMenu.querySelector('#mobile-wrapper'); // Блок с пунктами

    if(btn && wrapperMenu) {
        fullContainerMenu.addEventListener('click', function(e) {
            if(e.target.closest('.burger') == btn  || e.target == wrapperMenu) {
                fullContainerMenu.classList.toggle('open');
                btn.classList.toggle('burger-active');
                document.body.classList.toggle('mobile-open');
            }
        });
    }
})();