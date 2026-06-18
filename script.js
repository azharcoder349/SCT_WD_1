// Navbar Scroll Effect

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// Mobile Menu Toggle

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
});

// Close Menu When Link Clicked

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.innerHTML =
        '<i class="fas fa-bars"></i>';

    });

});

// Reveal Animation on Scroll

const revealElements = document.querySelectorAll(
".feature-card, .service-card, .contact-form"
);

function revealOnScroll() {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;

        const revealTop =
        element.getBoundingClientRect().top;

        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {

            element.style.opacity = "1";

            element.style.transform =
            "translateY(0px)";

        }

    });

}

revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
    "translateY(60px)";

    element.style.transition =
    "all 0.8s ease";

});

window.addEventListener(
"scroll",
revealOnScroll
);

revealOnScroll();


// Contact Form Alert

const contactForm =
document.querySelector(".contact-form");

contactForm.addEventListener(
"submit",
function(e){

    e.preventDefault();

    alert(
    "Thank You! Your message has been submitted successfully."
    );

    contactForm.reset();

});


// Hero Buttons Smooth Effect

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click",
    function(e){

        e.preventDefault();

        document.querySelector(
        this.getAttribute("href")
        ).scrollIntoView({

            behavior: "smooth"

        });

    });

});


// Mouse Move Glow Effect

document.addEventListener(
"mousemove",
(e) => {

    const shape1 =
    document.querySelector(".shape1");

    const shape2 =
    document.querySelector(".shape2");

    const shape3 =
    document.querySelector(".shape3");

    let x = e.clientX / 50;
    let y = e.clientY / 50;

    shape1.style.transform =
    `translate(${x}px, ${y}px)`;

    shape2.style.transform =
    `translate(${-x}px, ${-y}px)`;

    shape3.style.transform =
    `translate(${x/2}px, ${-y/2}px)`;

});