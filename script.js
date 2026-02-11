// Efeito de Surgimento (Reveal)
const reveal = () => {
    const items = document.querySelectorAll('.reveal');
    items.forEach(item => {
        const windowHeight = window.innerHeight;
        const revealTop = item.getBoundingClientRect().top;
        if (revealTop < windowHeight - 100) {
            item.classList.add('active');
        }
    });
};
window.addEventListener('scroll', reveal);
reveal(); // Executar uma vez no início

// Botão Ver Mais
document.getElementById('btn-load-more')?.addEventListener('click', function() {
    document.querySelectorAll('.item.hidden').forEach(el => {
        el.classList.remove('hidden');
        el.classList.add('active');
    });
    this.style.display = 'none';
});

// Funções de Zoom
function openZoom(el) {
    const overlay = document.getElementById('zoom-overlay');
    const img = document.getElementById('zoom-img');
    overlay.style.display = 'flex';
    img.src = el.src;
    document.body.style.overflow = 'hidden';
}
function closeZoom() {
    document.getElementById('zoom-overlay').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Senha Acesso
function abrirSenha() {
    const pass = prompt("Senha de acesso:");
    if(pass === "unimedhe12") window.location.href = "admin.html";
}