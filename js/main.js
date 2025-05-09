
const track = document.getElementById('carouselTrack');
const slides = track.children;
let index = 0;
const totalSlides = slides.length;

function moveSlide(step) {
  index = (index + step + totalSlides) % totalSlides;
  updateSlidePosition();
}

function updateSlidePosition() {
  const width = track.clientWidth / totalSlides;
  track.style.transform = `translateX(-${index * width}px)`;
}

setInterval(() => moveSlide(1), 5000); // Auto-slide a cada 5s

window.addEventListener('resize', updateSlidePosition); // Responsivo

