function showImage() {
  const imageContainer = document.getElementById('image-container');
  const imageAudio = document.getElementById('image-audio');
  
  imageContainer.style.display = 'flex';
  imageAudio.play();
}

function closeImage() {
  const imageContainer = document.getElementById('image-container');
  const imageAudio = document.getElementById('image-audio');
  
  imageContainer.style.display = 'none';
  imageAudio.pause();
}