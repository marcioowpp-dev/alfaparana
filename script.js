// Revelação ao Rolar
const reveal = () => {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        if (revealTop < windowHeight - 100) { el.classList.add('active'); }
    });
};
window.addEventListener('scroll', reveal);
reveal(); // Iniciar ao carregar

// Carregar Mais Fotos
document.getElementById('btn-load-more')?.addEventListener('click', function() {
    document.querySelectorAll('.item.hidden').forEach(item => {
        item.classList.remove('hidden');
        item.classList.add('active');
    });
    this.style.display = 'none';
});

// Zoom Original
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
    const s = prompt("Senha de Acesso:");
    if(s === "unimedhe12") window.location.href = "admin.html";
    else if(s) alert("Incorreta");
}