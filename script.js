// Ativar efeito de revelação ao rolar
window.addEventListener('scroll', () => {
    document.querySelectorAll('.reveal').forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add('active');
        }
    });
});

// Funções da Galeria
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

function openLightbox(el) {
    lightbox.style.display = 'flex';
    lightboxImg.src = el.src;
}

// Fechar com ESC
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") lightbox.style.display = 'none';
});