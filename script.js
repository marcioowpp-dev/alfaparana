// Ver Mais Projetos
document.getElementById('btn-ver-mais')?.addEventListener('click', function() {
    const hiddenItems = document.querySelectorAll('.feed-item.hidden');
    for (let i = 0; i < 6 && i < hiddenItems.length; i++) {
        hiddenItems[i].classList.remove('hidden');
    }
    if (document.querySelectorAll('.feed-item.hidden').length === 0) {
        this.style.display = 'none';
    }
});

// Zoom Lightbox
const zoomOverlay = document.getElementById('zoom-overlay');
const zoomImg = document.getElementById('zoom-img');

function openZoom(el) {
    zoomOverlay.style.display = 'flex';
    zoomImg.src = el.src;
}

document.addEventListener('keydown', (e) => { if (e.key === "Escape") zoomOverlay.style.display = 'none'; });