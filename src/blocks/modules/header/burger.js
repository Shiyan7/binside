const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const body = document.querySelector("body");

const burgerClose = () => {
    burger.classList.toggle("burger-close");
};
const navOpen = () => {
    nav.classList.toggle("is-open");
    body.classList.toggle("lock")
};

burger.addEventListener("click", burgerClose);
burger.addEventListener("click", navOpen);