const menuBtn = document.getElementById('mobile-menu-btn');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-links a');

// Toggle Menu Open/Close
menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuBtn.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

// Keep your existing Scroll logic
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  window.scrollY > 50 ? nav.classList.add('scrolled') : nav.classList.remove('scrolled');
});








const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach((el) => {
  observer.observe(el);
});