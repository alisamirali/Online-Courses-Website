/* Change Header Background When Scrolling */
window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});

/* Show Faq Answer */
const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");

    const icon = faq.querySelector(".faq-icon i");

    if (icon.className === "uil uil-plus") {
      icon.className = "uil uil-angle-up";
    } else {
      icon.className = "uil uil-plus";
    }
  });
});

/* Swiper */
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  breakpoints: {
    600: {
      slidesPerView: 2,
    },
  },
});

/* Show / Hide Nav Menu */
const menu = document.querySelector(".nav-menu");
const menuButton = document.querySelector("#menu-btn");
const menuClose = document.querySelector("#close-btn");

menuButton.addEventListener("click", () => {
  menu.style.display = "flex";
  menuClose.style.display = "inline-block";
  menuButton.style.display = "none";
});

// Close Menu
const closeNavMenu = () => {
  menu.style.display = "none";
  menuClose.style.display = "none";
  menuButton.style.display = "inline-block";
};

menuClose.addEventListener("click", closeNavMenu);
