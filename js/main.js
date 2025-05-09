const track = document.getElementById('carouselTrack');
const slides = document.querySelectorAll('.carousel-slide');
let currentIndex = 0;

function updateSlidePosition() {
  const slideWidth = slides[0].clientWidth;
  track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

function moveSlide(step) {
  currentIndex = (currentIndex + step + slides.length) % slides.length;
  updateSlidePosition();
}

// Ajusta o carrossel ao redimensionar a tela
window.addEventListener('resize', updateSlidePosition);

// Auto-slide a cada 5 segundos
setInterval(() => moveSlide(1), 5000);

// Garante que a posição esteja correta ao carregar
window.addEventListener('load', updateSlidePosition);
