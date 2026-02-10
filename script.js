// Botão Ver Mais
document.getElementById('btn-ver-mais')?.addEventListener('click', function() {
    const hiddenItems = document.querySelectorAll('.feed-item.hidden');
    for (let i = 0; i < 6 && i < hiddenItems.length; i++) {
        hiddenItems[i].classList.remove('hidden');
    }
    if (document.querySelectorAll('.feed-item.hidden').length === 0) {
        this.style.display = 'none';
    }
});

// Sistema de Zoom
function openZoom(el) {
    const overlay = document.getElementById('zoom-overlay');
    const img = document.getElementById('zoom-img');
    overlay.style.display = 'flex';
    img.src = el.src;
}