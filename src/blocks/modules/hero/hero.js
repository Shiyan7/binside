import swiper from "swiper/bundle";

const firstslider = document.querySelector(".hero-slider");
let currentQuantity = firstslider.querySelector(".current-quantity");
let genralQuantity = firstslider.querySelector(".general-quantity");

const heroSlider = new swiper(firstslider, {
    effect: 'slide',
    speed: 500,
    navigation: {
        nextEl: '.slider__button-next',
        prevEl: '.slider__button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
        clickable: true,
    },
});

const updateQuantity = () => {
    currentQuantity.textContent = heroSlider.activeIndex + 1;
};
const setQuantity = () => {
    genralQuantity.textContent = heroSlider.slides.length;
};
heroSlider.on('slideChange', () => {
    updateQuantity();
});

updateQuantity();
setQuantity();