const hamburgerButton = document.querySelector(".hamburger");
const navigationMenu = document.querySelector(".nav-item");
const closeButton = document.querySelector(".close");

function toggleMenu() {
  navigationMenu.style.display = "flex";
  hamburgerButton.style.display = "none";
  closeButton.style.display = "block";
}

function closeMenu() {
  navigationMenu.style.display = "none";
  hamburgerButton.style.display = "block";
  closeButton.style.display = "none";
}

hamburgerButton.addEventListener("click", toggleMenu);
closeButton.addEventListener("click", closeMenu);
