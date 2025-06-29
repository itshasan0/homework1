const images = document.querySelectorAll('.image');
const imageContainer = document.querySelector('.image-container');

function getRandomPosition() {
  const containerWidth = imageContainer.offsetWidth;
  const containerHeight = imageContainer.offsetHeight;

  const imageWidth = 150; // Ширина изображения (из CSS)
  const imageHeight = 150; // Высота изображения (из CSS)

  const maxX = containerWidth - imageWidth;
  const maxY = containerHeight - imageHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  return { top: randomY + 'px', left: randomX + 'px' };
}

images.forEach(image => {
  const position = getRandomPosition();
  image.style.top = position.top;
  image.style.left = position.left;
});