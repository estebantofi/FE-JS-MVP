export function hamburguerMenu() {
  const hamburger = document.getElementById("hamburger-menu");
  const navUl = document.querySelector("nav ul");
  if (hamburger && navUl) {
    hamburger.addEventListener("click", function () {
      navUl.classList.toggle("open");
    });
    // Cierra el menú al hacer clic en un enlace
    navUl.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        if (window.innerWidth <= 400) navUl.classList.remove("open");
      });
    });
  }
}
