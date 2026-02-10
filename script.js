// Abrir imagens ocultas
document.getElementById('btn-load-more')?.addEventListener('click', function() {
    const hiddenItems = document.querySelectorAll('.item.hidden');
    hiddenItems.forEach(item => item.classList.remove('hidden'));
    this.style.display = 'none';
});

// Zoom da Galeria
function openZoom(el) {
    const overlay = document.getElementById('zoom-overlay');
    const img = document.getElementById('zoom-img');
    overlay.style.display = 'flex';
    img.src = el.src;
}

// Reveal on Scroll
const reveal = () => {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        if (revealTop < windowHeight - 100) el.classList.add('active');
    });
};
window.addEventListener('scroll', reveal);
reveal();