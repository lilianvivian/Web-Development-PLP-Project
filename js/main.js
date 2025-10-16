// Hamburger toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact form feedback popup
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const popup = document.getElementById("success-popup");
  const closeBtn = document.getElementById("close-popup");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      popup.style.display = "flex";
      form.reset();
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      popup.style.display = "none";
    });
  }
});


// Highlight the active page link
const currentPage = window.location.pathname.split("/").pop();
const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});

