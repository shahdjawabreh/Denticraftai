// Hamburger menu toggle (guarded)
const hamburger = document.getElementById('hamburger');
const navMenu   = document.getElementById('nav-menu');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });
}

// Add to cart buttons alert
const cartButtons = document.querySelectorAll('.add-cart');
cartButtons.forEach(btn => {
    btn.addEventListener('click', () => alert('Added!'));
});

// Email signup form (console log value)
const signupForm = document.getElementById('signup-form');
if (signupForm) {
  signupForm.addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    console.log('Sign-up:', email);
    signupForm.reset();
  });
}

// Initialize AOS (only if the library is loaded)
if (typeof AOS !== 'undefined') {
  AOS.init();
}

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


/* ─── LIGHTBOX SCRIPT ─────────────────── */
const imgs       = document.querySelectorAll('.gallery-grid img');
const lightbox   = document.getElementById('lightbox');
const lbImg      = document.getElementById('lightboxImg');
const btnClose   = document.querySelector('.lb-close');
const btnPrev    = document.querySelector('.lb-prev');
const btnNext    = document.querySelector('.lb-next');
let currentIndex = 0;

const openLB = (i) => {
  currentIndex = i;
  lbImg.src    = imgs[i].src;
  lightbox.classList.add('open');
};

const closeLB = () => lightbox.classList.remove('open');

const showNext = (dir) => {
  currentIndex = (currentIndex + dir + imgs.length) % imgs.length;
  lbImg.src    = imgs[currentIndex].src;
};

/* ربط الحدث على العنصر الأب figure لضمان التقاطه */
document.querySelectorAll('.g-item').forEach((fig, i) =>
  fig.addEventListener('click', () => openLB(i))
);

/* أزرار */
btnClose.addEventListener('click', closeLB);
btnPrev .addEventListener('click', () => showNext(-1));
btnNext .addEventListener('click', () => showNext(+1));

/* إغلاق بالنقر خارج الصورة */
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLB();
});

/* أسهم لوحة المفاتيح & ESC */
document.addEventListener('keyup', (e) => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape') closeLB();
  if (e.key === 'ArrowRight') showNext(+1);
  if (e.key === 'ArrowLeft')  showNext(-1);
});
