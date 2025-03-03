var typed = new Typed(".text", {
    strings: ["Data Scientist", "Data Analyst", "DevOps Engineer "],
    typeSpeed: 100,
    backSpeed: 150,
    backDelay: 1000,
    loop: true
});


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Close the menu when a link is clicked
document.querySelectorAll(".nav-link").forEach((link) =>
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    })
);


