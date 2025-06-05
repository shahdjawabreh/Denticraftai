// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});

// Add to cart buttons alert
const cartButtons = document.querySelectorAll('.add-cart');
cartButtons.forEach(btn => {
    btn.addEventListener('click', () => alert('Added!'));
});

// Email signup form (console log value)
const signupForm = document.getElementById('signup-form');
signupForm.addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    console.log('Sign-up:', email);
    signupForm.reset();
});

// Initialize AOS
AOS.init();

// hamburger
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
burger?.addEventListener('click', () => navLinks.classList.toggle('open'));

// simple email sign-up
const signupFormEl = document.getElementById('signupForm');
signupFormEl?.addEventListener('submit', e => {
  e.preventDefault();
  alert('Thanks for signing up!');
  e.target.reset();
});
