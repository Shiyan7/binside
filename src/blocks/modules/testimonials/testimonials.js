import swiper from "swiper/bundle";

const secondSlider = document.querySelector(".testimonials-slider");
let currentQuantity = secondSlider.querySelector(".current-quantity");
let genralQuantity = secondSlider.querySelector(".general-quantity");

const testimonialsSlider = new swiper(secondSlider, {
    slidesPerView: 'auto',
    spaceBetween: 15,
    freeMode: true,
    breakpoints: {
        1025: {
          spaceBetween: 30,
        }
    },
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
    currentQuantity.textContent = testimonialsSlider.activeIndex + 1;
};
const setQuantity = () => {
    genralQuantity.textContent = testimonialsSlider.slides.length;
};
testimonialsSlider.on('slideChange', () => {
    updateQuantity();
});

updateQuantity();
setQuantity();