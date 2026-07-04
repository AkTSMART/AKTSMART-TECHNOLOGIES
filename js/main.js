/* ==========================================
   AKTSmart Technologies
   main.js
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ======================================
       Navbar Background on Scroll
    ====================================== */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 50) {

            navbar.style.background = "#101827";
            navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.25)";

        } else {

            navbar.style.background = "#141b28";
            navbar.style.boxShadow = "none";

        }

    });

});


/* ======================================
   Smooth Scroll
====================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


/* ======================================
   Active Menu Highlight
====================================== */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/* ======================================
   Hero Buttons Animation
====================================== */

const buttons = document.querySelectorAll(".hero-buttons .btn");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-4px)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0)";

    });

});


/* ======================================
   Console Welcome Message
====================================== */

console.log("%cAKTSmart Technologies", "color:#1d8cff;font-size:20px;font-weight:bold;");

console.log("%cProfessional AV • Smart Building • ICT Solutions", "color:#777;font-size:14px;");