const sideBar = document.getElementById("sidebar");
const menu = document.getElementById("menu-btn");
const closeIcon = document.getElementById("close-btn");
const sidebarLinks = sideBar.querySelectorAll("a");

// Remove any animation classes on page load
window.addEventListener("DOMContentLoaded", function () {
  sideBar.classList.remove("open-sidebar", "close-sidebar");
});

// Sidebar elements //
menu.addEventListener("click", function () {
  sideBar.classList.remove("close-sidebar");
  sideBar.classList.add("open-sidebar");
});

closeIcon.addEventListener("click", function () {
  sideBar.classList.remove("open-sidebar");
  sideBar.classList.add("close-sidebar");
});

// Close sidebar when any link is clicked
sidebarLinks.forEach((link) => {
  link.addEventListener("click", function () {
    sideBar.classList.remove("open-sidebar");
    sideBar.classList.add("close-sidebar");
  });
});

// Remove animation class after animation completes
sideBar.addEventListener("animationend", function () {
  if (sideBar.classList.contains("close-sidebar")) {
    sideBar.classList.remove("close-sidebar");
  }
});

// Auto-close sidebar on screen resize
window.addEventListener("resize", function () {
  if (window.innerWidth > 700) {
    sideBar.classList.remove("open-sidebar", "close-sidebar");
  }
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// HERO SECTION
ScrollReveal().reveal(".content h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".content p", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".content button", {
  ...scrollRevealOption,
  delay: 1000,
});

// PORTFOLIO SECTION

ScrollReveal().reveal(".portfolio__container .section__subheader", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".portfolio__container .section__header", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".portfolio__card img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".portfolio__card:nth-child(2) img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".portfolio__card__content h5", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".portfolio__card__content h4", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".portfolio__card__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".portfolio__card__content h3", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".portfolio__card__btn", {
  ...scrollRevealOption,
  delay: 2000,
});

// CASE STUDY SECTION
ScrollReveal().reveal(".case__container .section__subheader", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".case__container .section__header", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".case__container .section__header__description", {
  ...scrollRevealOption,
  delay: 1000,
});

// Animate each case study alternating left and right
ScrollReveal().reveal(".case__flex:nth-child(odd) .case__images", {
  ...scrollRevealOption,
  origin: "left",
  delay: 500,
});

ScrollReveal().reveal(".case__flex:nth-child(odd) .case__content", {
  ...scrollRevealOption,
  origin: "right",
  delay: 1000,
});

ScrollReveal().reveal(".case__flex:nth-child(even) .case__images", {
  ...scrollRevealOption,
  origin: "right",
  delay: 500,
});

ScrollReveal().reveal(".case__flex:nth-child(even) .case__content", {
  ...scrollRevealOption,
  origin: "left",
  delay: 1000,
});

// Animate case study content elements
ScrollReveal().reveal(".case__top__header", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".case__header__flex", {
  ...scrollRevealOption,
  delay: 800,
});

ScrollReveal().reveal(".case__description", {
  ...scrollRevealOption,
  interval: 300,
});

ScrollReveal().reveal(".case__content .btn", {
  ...scrollRevealOption,
  delay: 1500,
});

// ABOUT SECTION

ScrollReveal().reveal(".about__container h2", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__container .about__description", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about__container .about__details", {
  ...scrollRevealOption,
  delay: 1000,
});

// SKILLS SECTION

ScrollReveal().reveal(".skills__container .section__subheader", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".skills__container .section__header", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".skills__card", {
  ...scrollRevealOption,
  interval: 200,
});

// CONTACT SECTION

ScrollReveal().reveal(".contact__container .section__subheader", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".contact__container .section__header", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".contact__header_content", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".contact__details", {
  ...scrollRevealOption,
  delay: 1000,
  origin: "left",
});

ScrollReveal().reveal(".contact__form", {
  ...scrollRevealOption,
  delay: 1500,
  origin: "right",
});
