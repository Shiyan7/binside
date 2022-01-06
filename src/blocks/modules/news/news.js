import swiper from "swiper/bundle";

const newsTabsBtn = document.querySelectorAll('.news-tabs__btn');
const newsSliders = document.querySelectorAll(".news-slider");

newsSliders.forEach(el => {
    let currentQuantity = el.querySelector(".current-quantity");
    let genralQuantity = el.querySelector(".general-quantity");
    const newsSlider = new swiper(el, {
        slidesPerView: 'auto',
        spaceBetween: 15,
        freeMode: true,
        breakpoints: {
            1025: {
              spaceBetween: 30,
            }
        },
    });
    const switchSlider = (path) => {
        newsSlider.update();
        newsSliders.forEach(el => {el.classList.remove('news-slider--active')});
        document.querySelector(`[data-news-target="${path}"]`).classList.add('news-slider--active');
    };

    newsTabsBtn.forEach(el => {
        el.addEventListener('click', (e) => {
            const newsPath = el.getAttribute("data-news-path");
            newsTabsBtn.forEach(el => {el.classList.remove('news-tabs__btn--active')});
            document.querySelector(`[data-news-path="${newsPath}"]`).classList.add('news-tabs__btn--active');
            switchSlider(newsPath);
        })
    });
});