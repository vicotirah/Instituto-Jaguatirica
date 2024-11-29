let isMouseDown = false;
let startX;
let scrollLeft;
const carouselList = document.querySelector('.carousel-list');
const bulletsContainer = document.querySelector('.carousel-indicators');

// Configuração para habilitar arrasto horizontal no carrossel
carouselList.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    startX = e.pageX - carouselList.offsetLeft; // Posição inicial do mouse
    scrollLeft = carouselList.scrollLeft; // Posição inicial de rolagem
});

carouselList.addEventListener('mouseleave', () => {
    isMouseDown = false;
});

carouselList.addEventListener('mouseup', () => {
    isMouseDown = false;
});

carouselList.addEventListener('mousemove', (e) => {
    if (!isMouseDown) return; // Apenas executa se o botão do mouse estiver pressionado
    e.preventDefault(); // Evita rolagem padrão
    const x = e.pageX - carouselList.offsetLeft; // Posição horizontal atual
    const walk = (x - startX) * 1.5; // Ajusta a sensibilidade do movimento
    carouselList.scrollLeft = scrollLeft - walk; // Movimenta horizontalmente
});




