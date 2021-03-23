(() => {
    const card = $(".catalog__item");

    $(card).on("mouseenter", function (){
        toggleShow($(this).find(".catalog__info"), 5);
    });

    $(card).on("mouseleave", function () {
        toggleShow($(this).find(".catalog__info"), 0, false);
    });

    function toggleShow(item, zid=0, show=true) {
        if(!item) { return; }
        
        if(!show) {
            item.hide();
            item.css({zIndex: zid});
            return;
        }

        item.show();
        item.css({zIndex: zid});
    }
})();

(() => {
    const btnPuls = $(".catalog__btn-plus");
    const btnMinus = $(".catalog__btn-minus");

    function hundleChange(e) {
        let input = $(e.target.closest(".catalog__form")).find("input");
        let curVal = parseInt(input.val());

        if ($(e.target).hasClass("catalog__btn-plus")) {
            curVal += 1;
        } else if ($(e.target).hasClass("catalog__btn-minus")) {
            if (curVal > 0) {
                curVal -= 1;
            }
        }
        input.val(curVal);
    }

    if (btnMinus && btnPuls) {
        $(btnPuls).on("click", hundleChange);
        $(btnMinus).on("click", hundleChange);
    }

})();
