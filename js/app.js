let navMenu = document.querySelector(".site-header__menu");
let wrapper = document.querySelector(".site-header__wrapper");
let navClose = document.querySelector(".site-header__close");

navMenu.onclick = function () {
  wrapper.classList.add("active");
};

navClose.onclick = function () {
  wrapper.classList.remove("active");
};
