// --- PROTEÇÃO DE ACESSO RESTRITO ---
document.querySelector('.nav-btn-adm')?.addEventListener('click', function(e) {
    e.preventDefault(); // Impede o acesso direto à página
    
    const senhaCorreta = "unimedhe12";
    const senhaDigitada = prompt("Digite a senha de acesso:");

    if (senhaDigitada === senhaCorreta) {
        window.location.href = "admin.html"; // Libera o acesso
    } else if (senhaDigitada !== null) {
        alert("Senha incorreta! Acesso negado.");
    }
});

// --- BOTÃO VER MAIS ---
document.getElementById('btn-load-more')?.addEventListener('click', function() {
    const hiddenItems = document.querySelectorAll('.item.hidden');
    hiddenItems.forEach(item => {
        item.classList.remove('hidden');
        item.classList.add('reveal', 'active');
    });
    this.style.display = 'none';
});

// --- ZOOM DA GALERIA ---
function openZoom(el) {
    const overlay = document.getElementById('zoom-overlay');
    const img = document.getElementById('zoom-img');
    if (overlay && img) {
        overlay.style.display = 'flex';
        img.src = el.src;
        document.body.style.overflow = 'hidden';
    }
}

document.getElementById('zoom-overlay')?.addEventListener('click', function() {
    this.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// --- SCROLL REVEAL (ANIMAÇÃO AO ROLAR) ---
const reveal = () => {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        if (revealTop < windowHeight - 100) {
            el.classList.add('active');
        }
    });
};

window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);