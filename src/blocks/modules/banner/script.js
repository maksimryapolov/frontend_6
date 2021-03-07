import 'owl.carousel';

(() => {
    $('.owl-carousel').owlCarousel({
        items: 1,
        dotsContainer: '.banner__dots'
    });
})();

(() => {
    let array = [2, 3, 6, 7, 23, 654, 234, 546,]

    function sum(arr = []) {
        if(!arr || arr.length == 1) {
            return arr[arr.length - 1];
        } else {
            return arr.shift() + sum(arr);
        }
    }
    // console.log(sum(array));

    
    function count(arr) {
        
        if(arr.length == 1) {
            return 1;
        } else {
            arr.shift();
            return 1 + count(arr);
        }
    }

    // console.log(count(array));

    function max(arr = [10,4,6]) {
        
        if(arr.length == 1) {
            return arr[arr.length - 1];
        } else {
            if(arr.shift() < arr[0]) {
                return max(arr);
            } else {
                return arr.shift()
            }
        }
    }
    // console.log(numberMax);
    console.log(max());
})()