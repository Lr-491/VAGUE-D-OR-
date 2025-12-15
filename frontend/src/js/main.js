// BURGER MENU
document.addEventListener("DOMContentLoaded", () => {
        const navMenu = document.getElementById("nav-menu");
        const navToggle = document.getElementById("nav-toggle");
        const navClose = document.getElementById("nav-close");
        const navLinks = document.querySelectorAll(".nav a");

 navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
        overlay.classList.add("show-overlay");
    });

    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
        overlay.classList.remove("show-overlay");
    });

    overlay.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
        overlay.classList.remove("show-overlay");
    });
    });
    const overlay = document.getElementById("nav-overlay");

   
