const searchBtn = document.querySelector(".search-btn");
const searchWindowClose = document.querySelector(".search-window__close");
const searchWindow = document.querySelector(".search-window");
const body = document.querySelector("body");

const searchClose = () => {
    searchWindow.classList.remove("is-open");
    body.classList.remove("lock");
};
const openSearchWindow = () => {
    searchWindow.classList.add("is-open");
    body.classList.add("lock");
};
searchWindowClose.addEventListener("click", searchClose);
searchBtn.addEventListener("click", openSearchWindow);