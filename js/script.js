const hamburgerIcon = document.querySelector(".hamburger__icon");
const hamburgerMenu = document.querySelector(".hamburger__menu");
const crossIcon = document.querySelector(".cross__icon");
const showMoreMenu = document.querySelector("#show_more_menu");
const showProductMenu = document.querySelector("#show_product_menu");

hamburgerIcon.addEventListener("click", function () {
  hamburgerMenu.classList.add("show__hamburger__menu");
});

crossIcon.addEventListener("click", function () {
  hamburgerMenu.classList.remove("show__hamburger__menu");
});

showMoreMenu.addEventListener("mouseenter", function (e) {
  const ul = e.target.childNodes[5];
  ul.style.animation = "showUp 0.35s 1";
  ul.style.display = "block";
});

showMoreMenu.addEventListener("mouseleave", function (e) {
  const ul = e.target.childNodes[5];
  ul.style.display = "none";
});

showProductMenu.addEventListener("mouseenter", function (e) {
  const div = e.target.childNodes[5];
  div.style.animation = "showUp 0.35s 1";
  div.style.display = "flex";
});

showProductMenu.addEventListener("mouseleave", function (e) {
  const div = e.target.childNodes[5];
  div.style.display = "none";
});
