// Abrir Zoom da Imagem
const zoomOverlay = document.getElementById('zoom-overlay');
const zoomImg = document.getElementById('zoom-img');

function openZoom(el) {
    zoomOverlay.style.display = 'flex';
    zoomImg.src = el.src;
}

// Fechar com ESC
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") zoomOverlay.style.display = 'none';
});

// Rolagem Suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});