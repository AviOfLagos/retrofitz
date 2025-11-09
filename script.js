let slides = document.querySelectorAll('.slide');
let current = 0;
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

function showSlide(index) {
  slides.forEach(s => s.classList.remove('active'));
  slides[index].classList.add('active');
}
function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}
function prevSlide() {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
}
nextBtn.onclick = nextSlide;
prevBtn.onclick = prevSlide;
setInterval(nextSlide, 3000);

// Events Carousel
let eventSlides = document.querySelectorAll('.event-slide');
let currentEvent = 0;
const nextEventBtn = document.querySelector('.next-event');
const prevEventBtn = document.querySelector('.prev-event');

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

if (nextEventBtn && prevEventBtn) { // Check if controls exist
  nextEventBtn.onclick = nextEventSlide;
  prevEventBtn.onclick = prevEventSlide;
}

setInterval(nextEventSlide, 3000);