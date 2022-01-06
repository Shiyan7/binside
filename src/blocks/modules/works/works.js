import swiper from "swiper/bundle";

const workSlider = new swiper('.works-slider', {
    slidesPerView: 'auto',
    freeMode: true,
    spaceBetween: 15,
    wrapperClass: 'works-slider__wrapper',
    slideClass: 'work-slide',
    breakpoints: {
        1025: {
          slidesPerView: 'auto',
          spaceBetween: 30,
        }
      }
});