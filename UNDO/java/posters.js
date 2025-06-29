let slides;
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((img, i) => {
    if (
      i === index ||
      i === (index + 1) % slides.length ||
      i === (index + 2) % slides.length
    ) {
      img.style.display = 'block';
    } else {
      img.style.display = 'none';
    }
  });
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

window.addEventListener('DOMContentLoaded', () => {
  slides = document.querySelectorAll('#slider img');
  showSlide(currentSlide);
});