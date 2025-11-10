// Hero Slider
let slides = document.querySelectorAll('.hero-slider .slide');
let dots = document.querySelectorAll('.slider-dots .dot');
let currentSlide = 0;
let slideInterval;
const nextBtn = document.querySelector('.hero-slider .next');
const prevBtn = document.querySelector('.hero-slider .prev');
const heroSlider = document.querySelector('.hero-slider');

function showHeroSlide(index) {
  slides.forEach(s => s.classList.remove('active'));
  dots.forEach(d => d.classList.remove('active'));
  slides[index].classList.add('active');
  dots[index].classList.add('active');
  // Announce slide change for screen readers
  heroSlider.setAttribute('aria-live', 'polite');
  heroSlider.setAttribute('aria-atomic', 'true');
  heroSlider.setAttribute('aria-label', `Slide ${index + 1} of ${slides.length}`);
}

function nextHeroSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showHeroSlide(currentSlide);
}

function prevHeroSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showHeroSlide(currentSlide);
}

function startSlideShow() {
  slideInterval = setInterval(nextHeroSlide, 3000);
}

function pauseSlideShow() {
  clearInterval(slideInterval);
}

// Event Listeners
if (nextBtn) nextBtn.addEventListener('click', () => { pauseSlideShow(); nextHeroSlide(); startSlideShow(); });
if (prevBtn) prevBtn.addEventListener('click', () => { pauseSlideShow(); prevHeroSlide(); startSlideShow(); });

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    pauseSlideShow();
    showHeroSlide(index);
    startSlideShow();
  });
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') {
    pauseSlideShow();
    nextHeroSlide();
    startSlideShow();
  } else if (e.key === 'ArrowLeft') {
    pauseSlideShow();
    prevHeroSlide();
    startSlideShow();
  }
});

// Pause on hover/focus
if (heroSlider) {
  heroSlider.addEventListener('mouseenter', pauseSlideShow);
  heroSlider.addEventListener('mouseleave', startSlideShow);
  heroSlider.addEventListener('focusin', pauseSlideShow);
  heroSlider.addEventListener('focusout', startSlideShow);
}

// Initial slide show start
showHeroSlide(currentSlide);
startSlideShow();

// Events Carousel
let eventSlides = document.querySelectorAll('.event-slide');
let currentEvent = 0;
let eventInterval; // Define eventInterval
const nextEventBtn = document.querySelector('.next-event');
const prevEventBtn = document.querySelector('.prev-event');
const eventCarouselContainer = document.querySelector('.events-carousel .carousel-container'); // Get container

function showEventSlide(index) {
  eventSlides.forEach(s => s.classList.remove('active'));
  eventSlides[index].classList.add('active');
}

function nextEventSlide() {
  currentEvent = (currentEvent + 1) % eventSlides.length;
  showEventSlide(currentEvent);
}

function prevEventSlide() {
  currentEvent = (currentEvent - 1 + eventSlides.length) % eventSlides.length;
  showEventSlide(currentEvent);
}

function startEventSlideShow() { // Define startEventSlideShow
  eventInterval = setInterval(nextEventSlide, 3000);
}

function pauseEventSlideShow() { // Define pauseEventSlideShow
  clearInterval(eventInterval);
}

if (nextEventBtn && prevEventBtn) { // Check if controls exist
  nextEventBtn.onclick = nextEventSlide;
  prevEventBtn.onclick = prevEventSlide;
}

startEventSlideShow(); // Start slideshow initially

// Pause on hover/focus for Events Carousel
if (eventCarouselContainer) {
  eventCarouselContainer.addEventListener('mouseenter', pauseEventSlideShow);
  eventCarouselContainer.addEventListener('mouseleave', startEventSlideShow);
  eventCarouselContainer.addEventListener('focusin', pauseEventSlideShow);
  eventCarouselContainer.addEventListener('focusout', startEventSlideShow);
}

// Keyboard navigation for Events Carousel
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') {
    pauseEventSlideShow();
    nextEventSlide();
    startEventSlideShow();
  } else if (e.key === 'ArrowLeft') {
    pauseEventSlideShow();
    prevEventSlide();
    startEventSlideShow();
  }
});

//Navbar functionality
function initNavbar() {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const navLinks = document.querySelector('.nav-links');
  const navbar = document.querySelector('.navbar');

  if (hamburgerMenu && navLinks) {
    // Toggle menu on hamburger click
    hamburgerMenu.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      navLinks.classList.toggle('active');
      hamburgerMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const navLinkItems = navLinks.querySelectorAll('a');
    navLinkItems.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburgerMenu.classList.remove('active');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target) && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        hamburgerMenu.classList.remove('active');
      }
    });
  }

  // Shrink navbar on scroll
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }
}

// Initialize navbar after DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initNavbar);
} else {
  initNavbar();
}

// Re-initialize after navbar is dynamically loaded
setTimeout(initNavbar, 100);

// Featured Fits Carousel
let featuredTrack = document.querySelector('.featured-carousel-track');
let fitCards = document.querySelectorAll('.featured-carousel-track .fit-card');
let featuredCurrent = 0;
let featuredInterval;
const nextFitBtn = document.querySelector('.next-fit');
const prevFitBtn = document.querySelector('.prev-fit');

function updateFeaturedCarousel() {
  const cardWidth = fitCards[0].offsetWidth + (parseFloat(getComputedStyle(fitCards[0]).marginLeft) * 2);
  featuredTrack.style.transform = `translateX(${-featuredCurrent * cardWidth}px)`;
}

function nextFeaturedSlide() {
  featuredCurrent = (featuredCurrent + 1) % fitCards.length;
  updateFeaturedCarousel();
}

function prevFeaturedSlide() {
  featuredCurrent = (featuredCurrent - 1 + fitCards.length) % fitCards.length;
  updateFeaturedCarousel();
}

function startFeaturedCarousel() {
  featuredInterval = setInterval(nextFeaturedSlide, 2000); // Autoplay 2000ms
}

function pauseFeaturedCarousel() {
  clearInterval(featuredInterval);
}

if (nextFitBtn) nextFitBtn.addEventListener('click', () => { pauseFeaturedCarousel(); nextFeaturedSlide(); startFeaturedCarousel(); });
if (prevFitBtn) prevFitBtn.addEventListener('click', () => { pauseFeaturedCarousel(); prevFeaturedSlide(); startFeaturedCarousel(); });

if (featuredTrack) {
  featuredTrack.addEventListener('mouseenter', pauseFeaturedCarousel);
  featuredTrack.addEventListener('mouseleave', startFeaturedCarousel);
  featuredTrack.addEventListener('focusin', pauseFeaturedCarousel);
  featuredTrack.addEventListener('focusout', startFeaturedCarousel);
}

// Keyboard navigation for Featured Fits
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') {
    pauseFeaturedCarousel();
    nextFeaturedSlide();
    startFeaturedCarousel();
  } else if (e.key === 'ArrowLeft') {
    pauseFeaturedCarousel();
    prevFeaturedSlide();
    startFeaturedCarousel();
  }
});

// Initial setup
updateFeaturedCarousel();
startFeaturedCarousel();

// Events Carousel (Modal functionality)
const eventModal = document.getElementById('event-modal');
const closeButton = document.querySelector('.modal .close-button');
const modalEventTitle = document.getElementById('modal-event-title');
const modalEventDate = document.getElementById('modal-event-date');
const modalEventCopy = document.getElementById('modal-event-copy');
const modalEventGallery = document.getElementById('modal-event-gallery');

const eventDetails = [
  {
    id: 1,
    title: "Lagos Fashion Week",
    date: "Nov 15, 2025",
    copy: "Experience the vibrant energy of Lagos Fashion Week, showcasing the best of African design and streetwear. Retro Fitz will be featuring exclusive new collections.",
    gallery: ["images/event-1.jpg", "images/event-2.jpg"] // Example gallery images
  },
  {
    id: 2,
    title: "Afrobeats Music Festival",
    date: "Dec 10, 2025",
    copy: "Join us at the biggest Afrobeats Music Festival, where music meets street style. Catch Retro Fitz pop-ups and exclusive merchandise.",
    gallery: ["images/event-3.jpg", "images/event-4.jpg"]
  },
  {
    id: 3,
    title: "Retro Street Style Meetup",
    date: "Jan 20, 2026",
    copy: "A gathering of retro enthusiasts and streetwear connoisseurs. Share your style, discover new trends, and connect with the Retro Fitz community.",
    gallery: ["images/event-1.jpg", "images/event-4.jpg"]
  },
  {
    id: 4,
    title: "Vintage Market Pop-up",
    date: "Feb 05, 2026",
    copy: "Explore unique vintage finds and exclusive Retro Fitz drops at our monthly market pop-up. A treasure trove for authentic retro pieces.",
    gallery: ["images/event-2.jpg", "images/event-3.jpg"]
  }
];

document.querySelectorAll('.event-slide').forEach(slide => {
  slide.addEventListener('click', () => {
    const eventId = parseInt(slide.dataset.eventId);
    const event = eventDetails.find(e => e.id === eventId);

    if (event) {
      modalEventTitle.textContent = event.title;
      modalEventDate.textContent = event.date;
      modalEventCopy.textContent = event.copy;
      modalEventGallery.innerHTML = ''; // Clear previous gallery
      event.gallery.forEach(imgSrc => {
        const img = document.createElement('img');
        img.src = imgSrc;
        modalEventGallery.appendChild(img);
      });
      eventModal.style.display = 'flex';
    }
  });
});

if (closeButton) {
  closeButton.addEventListener('click', () => {
    eventModal.style.display = 'none';
  });
}

window.addEventListener('click', (event) => {
  if (event.target === eventModal) {
    eventModal.style.display = 'none';
  }
});

// Newsletter Form Validation
const newsletterForm = document.querySelector('.newsletter-form');
const newsletterEmailInput = document.querySelector('.newsletter-form input[type="email"]');

if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission

    const email = newsletterEmailInput.value;
    const errorMessage = document.createElement('p');
    errorMessage.classList.add('error-message');
    errorMessage.style.color = 'var(--accent-hot-pink)';
    errorMessage.style.marginTop = '0.5rem';
    errorMessage.style.fontSize = '0.9rem';

    // Remove existing error messages
    const existingErrorMessage = newsletterForm.querySelector('.error-message');
    if (existingErrorMessage) {
      existingErrorMessage.remove();
    }

    if (!validateEmail(email)) {
      errorMessage.textContent = 'Please enter a valid email address.';
      newsletterForm.appendChild(errorMessage);
      newsletterEmailInput.setAttribute('aria-invalid', 'true');
      newsletterEmailInput.focus();
    } else {
      // Simulate form submission (replace with actual POST to endpoint)
      alert('Thank you for subscribing!');
      newsletterEmailInput.value = '';
      newsletterEmailInput.setAttribute('aria-invalid', 'false');
      // Here you would typically send the data to a server
      // e.g., fetch('/subscribe', { method: 'POST', body: JSON.stringify({ email }) });
    }
  });
}

function validateEmail(email) {
  const re = /^(([^<>()[\\]\\.,;:\s@"]+(\.[^<>()[\\]\\.,;:\s@"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// FAQ Accordion
document.querySelectorAll('.accordion-header').forEach(button => {
  button.addEventListener('click', () => {
    const panel = button.nextElementSibling;
    const expanded = button.getAttribute('aria-expanded') === 'true' || false;

    // Close all other open panels
    document.querySelectorAll('.accordion-header[aria-expanded="true"]').forEach(otherButton => {
      if (otherButton !== button) {
        otherButton.setAttribute('aria-expanded', 'false');
        otherButton.nextElementSibling.hidden = true;
      }
    });

    // Toggle current panel
    button.setAttribute('aria-expanded', !expanded);
    panel.hidden = expanded;
  });
});

// Quick Rental Modal
const rentalModal = document.createElement('div');
rentalModal.id = 'rental-modal';
rentalModal.classList.add('modal');
rentalModal.innerHTML = `
  <div class="modal-content">
    <span class="close-button">&times;</span>
    <h3>Rent Outfit</h3>
    <form id="rental-form">
      <label for="rental-name">Name:</label>
      <input type="text" id="rental-name" name="name" required>

      <label for="rental-phone">Phone:</label>
      <input type="tel" id="rental-phone" name="phone" required>

      <label for="rental-dates">Rental Dates:</label>
      <input type="text" id="rental-dates" name="dates" placeholder="e.g., 2025-11-10 to 2025-11-12" required>

      <label for="rental-duration">Duration:</label>
      <select id="rental-duration" name="duration" required>
        <option value="1-day">1 Day</option>
        <option value="2-days">2 Days</option>
        <option value="3-days">3 Days</option>
      </select>

      <label for="rental-location">Location:</label>
      <input type="text" id="rental-location" name="location" required>

      <button type="submit" class="btn-style">Submit Rental Request</button>
    </form>
  </div>
`;
document.body.appendChild(rentalModal);

const rentNowButtons = document.querySelectorAll('.rent-now-btn');
const rentalCloseButton = rentalModal.querySelector('.close-button');
const rentalForm = document.getElementById('rental-form');

rentNowButtons.forEach(button => {
  button.addEventListener('click', () => {
    rentalModal.style.display = 'flex';
    // Pre-fill any relevant data if needed
  });
});

if (rentalCloseButton) {
  rentalCloseButton.addEventListener('click', () => {
    rentalModal.style.display = 'none';
  });
}

window.addEventListener('click', (event) => {
  if (event.target === rentalModal) {
    rentalModal.style.display = 'none';
  }
});

if (rentalForm) {
  rentalForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('rental-name').value;
    const phone = document.getElementById('rental-phone').value;
    const dates = document.getElementById('rental-dates').value;
    const duration = document.getElementById('rental-duration').value;
    const location = document.getElementById('rental-location').value;

    const message = `Hello, I'd like to rent an outfit!\nName: ${name}\nPhone: ${phone}\nDates: ${dates}\nDuration: ${duration}\nLocation: ${location}`;
    const whatsappLink = `https://wa.me/+234817045881?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');

    rentalModal.style.display = 'none';
    rentalForm.reset();
  });
}

// Shoot Signup Form
const shootSignupForm = document.querySelector('.shoot-signup-form');

if (shootSignupForm) {
  shootSignupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const phone = document.getElementById('signup-phone').value;
    const social = document.getElementById('signup-social').value;
    const instagram = document.getElementById('signup-instagram').value;
    const city = document.getElementById('signup-city').value;
    const portfolio = document.getElementById('signup-portfolio').value;
    const consent = document.getElementById('signup-consent').checked;

    if (!consent) {
      alert('Please consent to Retro Fitz contacting you for shoot opportunities.');
      return;
    }

    const message = `New Shoot Talent Signup!\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nTop Social: ${social}\nInstagram: ${instagram}\nCity: ${city}\nPortfolio: ${portfolio}`;
    const whatsappLink = `https://wa.me/+234817045881?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');

    alert('Thank you for signing up! We will be in touch.');
    shootSignupForm.reset();
  });
}