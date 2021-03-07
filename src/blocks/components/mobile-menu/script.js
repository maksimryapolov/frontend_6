(() => {
    const fullContainerMenu = document.querySelector('#mobile-container');
    const btn = fullContainerMenu.querySelector('#burger');
    const wrapperMenu = fullContainerMenu.querySelector('#mobile-wrapper');

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
