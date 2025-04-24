const track = document.getElementById('carouselTrack');
const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dotsContainer = document.getElementById('dots');
const carouselContainer = document.querySelector('.carousel-container');
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

// Navigate to a specific slide
function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
}

// Go to the next slide (with wrap-around)
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
}
  
// Go to the previous slide (with wrap-around)
function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
}

// Attach event listeners to arrow buttons
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Starts automatic slide transition every 5 seconds
function startAutoSlide() {
    interval = setInterval(nextSlide, 5000);
}

// Stops the automatic slide transition
function stopAutoSlide() {
    clearInterval(interval);
}

// Start auto-slide on page load
startAutoSlide();

// Pause auto-slide on mouse hover, resume when mouse leaves
carouselContainer.addEventListener('mouseenter', stopAutoSlide);
carouselContainer.addEventListener('mouseleave', startAutoSlide);