const preloader = document.querySelector(".preloader");
const body = document.querySelector("body");

const scrollToTop = () => {
    window.scroll({
        behavior: 'smooth',
        left: 0,
        top: body.offsetTop
    });
    body.classList.add("lock")
};
const preloaderHidden = () => {
    preloader.style.cssText = "opacity: 0; visibility: hidden;";
    body.classList.remove("lock");
};  

if (preloader) {
    scrollToTop();
    setTimeout(preloaderHidden, 2100);
}