// Hamburger toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
});


// Smooth scroll for any same-page anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


// Highlight the active page link in the navigation
const currentPage = window.location.pathname.split("/").pop() || "index.html"; // Default to index.html if path is empty
const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        // CHANGED: Using .current-page to avoid conflict with hamburger's .active class
        link.classList.add("current-page"); 
    }
});


// Contact form submission with Fetch API and Popup
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.querySelector(".contact-form-container form");
    const popup = document.getElementById("success-popup");
    const closeBtn = document.getElementById("close-popup");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault(); // Prevent the default form submission

            const formData = new FormData(contactForm);
            const action = contactForm.getAttribute("action");

            // Send form data in the background
            fetch(action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(data => {
    // We know the submission works (from your chart),
    // so we will ALWAYS show the success popup.
    popup.style.display = "flex";
    contactForm.reset();
}).catch(error => {
    // Even if a CORS error happens (which it is),
    // we will STILL show the success popup.
    popup.style.display = "flex";
    contactForm.reset();
});

        });
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            popup.style.display = "none";
        });
    }
});