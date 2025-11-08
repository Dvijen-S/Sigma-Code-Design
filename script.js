
// ✅ Navbar scroll behavior
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ✅ Cards slider logic (2 cards slide at a time)
const track = document.querySelector('.cards-track');
const cards = document.querySelectorAll('.card');
const cardWidth = cards[0].offsetWidth + 20; // width + margin
const visibleCards = 2;
let currentPosition = 0;
let autoSlideInterval;

function initializeSlider() {
  // Clone first "visible" cards for seamless looping
  for (let i = 0; i < visibleCards; i++) {
    const clone = cards[i].cloneNode(true);
    track.appendChild(clone);
  }
}

function slideToNext() {
  currentPosition += visibleCards; // ✅ move 2 cards at once
  track.style.transition = 'transform 0.8s ease-in-out'; // smoother
  track.style.transform = `translateX(-${currentPosition * cardWidth}px)`;

  // Reset seamlessly when reaching cloned slides
  if (currentPosition >= cards.length) {
    setTimeout(() => {
      track.style.transition = 'none';
      currentPosition = 0;
      track.style.transform = `translateX(0)`;
    }, 800); // match transition time
  }
}

function startAutoSlide() {
  autoSlideInterval = setInterval(slideToNext, 4000); // slide every 3.5s
}

// Initialize and start
initializeSlider();
startAutoSlide();

// ✅ Pause on hover
track.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
track.addEventListener('mouseleave', startAutoSlide);





document.addEventListener('DOMContentLoaded', function () {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    item.addEventListener('click', () => {
      // Close others
      faqItems.forEach(other => {
        if (other !== item) other.classList.remove('active');
      });
      // Toggle current
      item.classList.toggle('active');
    });
  });
});





// Navbar 
// Navbar scroll effect
window.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const mobileLinks = document.querySelectorAll('.mobile-nav a, .mobile-btn');
mobileLinks.forEach(link => {
  link.addEventListener('click', function () {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('active');
  });
});


