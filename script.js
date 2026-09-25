/* ==================================================
   MENU MOBILE
================================================== */

const menuButton = document.getElementById("menuButton");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


/* ==================================================
   FERMER LE MENU APRÈS UN CLIC
================================================== */

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


/* ==================================================
   ANNÉE AUTOMATIQUE
================================================== */

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();