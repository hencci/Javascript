const track = document.getElementById('carouselTrack');
const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dotsContainer = document.getElementById('dots');
let currentIndex = 0;
let interval;

// Create navigation dots dynamically based on the number of slides
slides.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active'); // First dot is active initially
    dot.addEventListener('click', () => goToSlide(i)); // Add click handler
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('dots');

// Updates the slide position and dot indicators
function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`; // Move track
    dots.forEach(dot => dot.classList.remove('active')); // Remove all active classes
    dots[currentIndex].classList.add('active'); // Highlight current dot
}