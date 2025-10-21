// GLOBAL NAVBAR BEHAVIOR
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (header && window.scrollY > 50) {
        header.classList.add('scrolled');
    } else if (header) {
        header.classList.remove('scrolled');
    }
});

// NAVBAR ACTIVE LINK
const currentPage = window.location.pathname.split("/").pop();
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage || (linkPage === "index.html" && currentPage === "")) {
        link.classList.add("active");
    }
});
//PAGE DEPENDANT
document.addEventListener("DOMContentLoaded", () => {
    // Fade-in on scroll
    const faders = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    faders.forEach(f => observer.observe(f));
});

