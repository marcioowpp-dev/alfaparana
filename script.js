// Efeito de revelação ao rolar a página
const reveal = () => {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        if (revealTop < windowHeight - 100) el.classList.add('active');
    });
};
window.addEventListener('scroll', reveal);
reveal(); // Gatilho inicial

// Galeria - Carregar Mais
document.getElementById('loadMore')?.addEventListener('click', function() {
    document.querySelectorAll('.item.hidden').forEach(it => {
        it.classList.remove('hidden');
        it.classList.add('active');
    });
    this.style.display = 'none';
});

// Zoom Original
function openZoom(el) {
    const overlay = document.getElementById('zoom-overlay');
    const img = document.getElementById('zoom-img');
    overlay.style.display = 'flex';
    img.src = el.src;
}

// Senha para Painel
function abrirPainel() {
    const s = prompt("Senha:");
    if(s === "unimedhe12") window.location.href = "admin.html";
}