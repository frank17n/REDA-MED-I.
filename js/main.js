
const submenus = document.querySelectorAll(".dropdown2");

submenus.forEach(item => {
  item.addEventListener("mouseenter", () => {

    const submenu = item.querySelector(".submenu2");
    const rect = submenu.getBoundingClientRect();

    // Si se sale por la derecha
    if (rect.right > window.innerWidth) {
      submenu.style.left = "auto";
      submenu.style.right = "200px";
    } else {
      submenu.style.left = "200px";
      submenu.style.right = "auto";
    }

  });
});

const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(drop => {
  drop.addEventListener("click", () => {
    drop.classList.toggle("active");
  });
});

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }

});