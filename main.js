// main.js

// Show/hide mobile menu
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

// Close mobile menu when a link is clicked
const navLink = document.querySelectorAll(".nav__link");
function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}
navLink.forEach(n => n.addEventListener("click", linkAction));

// Highlight active section in nav menu
const sections = document.querySelectorAll("section[id]");
function scrollActive() {
  const scrollY = window.pageYOffset;
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");
    const sectionLink = document.querySelector(".nav__menu a[href*=" + sectionId + "]");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionLink.classList.add("active-link");
    } else {
      sectionLink.classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

// Scroll reveal animations
ScrollReveal().reveal(".home__data, .about__img, .skills__subtitle, .skills__text", {
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 200
});
ScrollReveal().reveal(".home__img, .about__subtitle, .about__text, .skills__img", {
  delay: 400
});
ScrollReveal().reveal(".home__social-icon", {
  interval: 200
});
ScrollReveal().reveal(".skills__data, .work__img, .contact__input", {
  interval: 200
});
