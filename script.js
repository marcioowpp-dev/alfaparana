// Lógica do Botão Ver Mais
document.getElementById('btn-ver-mais').addEventListener('click', function() {
    const hiddenItems = document.querySelectorAll('.feed-item.hidden');
    
    // Mostra as próximas 6 imagens a cada clique
    for (let i = 0; i < 6 && i < hiddenItems.length; i++) {
        hiddenItems[i].classList.remove('hidden');
    }

    // Esconde o botão se não houver mais fotos
    if (document.querySelectorAll('.feed-item.hidden').length === 0) {
        this.style.display = 'none';
    }
});

// Lógica de Zoom da Galeria
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