document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  });
  
  document.addEventListener('keydown', function (e) {
    if (e.key === 'F12') {
      e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
      e.preventDefault();
    }
    if (e.ctrlKey && e.key === 'u') {
      e.preventDefault();
    }
  });

  document.addEventListener('click', function() {
    var audio = document.getElementById('audio-love');
    if (audio.paused) {
      audio.play();
    }
  }, { once: true });

// Corazones animados de fondo
function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  // Tamaño aleatorio más pequeño
  const size = 16 + Math.random() * 12; // 16px a 28px
  heart.style.width = size + 'px';
  heart.style.height = (size * 0.9) + 'px';
  // Posición aleatoria en la pantalla
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.top = Math.random() * 100 + 'vh';
  heart.style.zIndex = 0;

  // Crea la forma de corazón realista
  const shape = document.createElement('div');
  shape.className = 'heart-shape';
  heart.appendChild(shape);

  document.getElementById('hearts-container').appendChild(heart);

  // Elimina el corazón después de la animación y crea uno nuevo
  setTimeout(() => {
    heart.remove();
    createHeart();
  }, 2000);
}
// Crea varios corazones al inicio
for (let i = 0; i < 15; i++) {
  setTimeout(createHeart, i * 150);
}