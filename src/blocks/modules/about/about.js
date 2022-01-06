import swiper from "swiper/bundle";

const aboutSlider = document.querySelector('.about-slider');

let mySwiper;

if (window.innerWidth <= 1024) {
    mySwiper = new swiper(aboutSlider, {
        slidesPerView: 1,
        spaceBetween: 25,
        wrapperClass: 'about-gallery',
        slideClass: 'about-gallery__image',
    });

    aboutSlider.dataset.mobile = 'true';
}

const mobileSlider = () => {
	if (window.innerWidth <= 1024 && aboutSlider.dataset.mobile == 'false') {
		mySwiper = new swiper(aboutSlider, {
            slidesPerView: 1,
            spaceBetween: 25,
            wrapperClass: 'about-gallery',
			slideClass: 'about-gallery__image',
		});

		aboutSlider.dataset.mobile = 'true';
	}

	if (window.innerWidth > 1024) {
		aboutSlider.dataset.mobile = 'false';
		if (aboutSlider.classList.contains('swiper-container-initialized')) {
			mySwiper.destroy();
		}
	}
}
mobileSlider();

window.addEventListener('resize', () => {
	mobileSlider();
});