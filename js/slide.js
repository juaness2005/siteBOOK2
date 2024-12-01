let cont = 1;

// Configura o primeiro slide como ativo
document.getElementById('radio1').checked = true;

// Função para alternar automaticamente os slides
function proximaImg() {
  cont++;
  if (cont > 2) { // Ajuste para o número total de slides (no caso, 2)
    cont = 1;
  }
  document.getElementById('radio' + cont).checked = true;
}

// Carrossel automático
let autoSlideInterval = setInterval(proximaImg, 3000);

// Selecionar o conteúdo do carrossel
const sliderContent = document.getElementById('sliderContent');

// Função para pausar o carrossel
function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

// Função para reiniciar o carrossel
function startAutoSlide() {
  autoSlideInterval = setInterval(proximaImg, 3000);
}

// Eventos para pausar e reiniciar o carrossel ao passar o mouse
sliderContent.addEventListener('mouseenter', stopAutoSlide);
sliderContent.addEventListener('mouseleave', startAutoSlide);