const button = document.querySelector(".menu-toggle");
const nav = document.querySelector(".top-bar__nav");

button.addEventListener("click", () => {
  nav.classList.toggle("active");
});

const links = document.querySelectorAll(".top-bar__nav a");

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});