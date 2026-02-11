// --- PROTEÇÃO DE ACESSO RESTRITO (Sincronizado com Google Sites) ---
document.addEventListener('click', function(e) {
    // Verifica se o elemento clicado possui a classe do botão administrativo
    if (e.target && e.target.classList.contains('nav-btn-adm')) {
        e.preventDefault(); 
        
        const senhaCorreta = "unimedhe12"; // Senha definida por você
        const senhaDigitada = prompt("Acesso Restrito. Digite a senha:");

        if (senhaDigitada === senhaCorreta) {
            // No Google Sites, o "_top" força o redirecionamento na página inteira, 
            // saindo de dentro do bloco incorporado (iframe).
            window.open("admin.html", "_top"); 
        } else if (senhaDigitada !== null) {
            alert("Senha incorreta! Acesso negado.");
        }
    }
});

// --- BOTÃO VER MAIS PROJETOS ---
document.getElementById('btn-load-more')?.addEventListener('click', function() {
    const hiddenItems = document.querySelectorAll('.item.hidden');
    hiddenItems.forEach(item => {
        item.classList.remove('hidden');
        item.classList.add('reveal', 'active');
    });
    this.style.display = 'none'; // Esconde o botão após carregar tudo
});

// --- ZOOM DA GALERIA (LIGHTBOX) ---
function openZoom(el) {
    const overlay = document.getElementById('zoom-overlay');
    const img = document.getElementById('zoom-img');
    if (overlay && img) {
        overlay.style.display = 'flex';
        img.src = el.src;
        document.body.style.overflow = 'hidden'; // Trava o scroll da página ao dar zoom
    }
}

// Fecha o zoom ao clicar em qualquer lugar da tela escura
document.getElementById('zoom-overlay')?.addEventListener('click', function() {
    this.style.display = 'none';
    document.body.style.overflow = 'auto'; // Libera o scroll novamente
});

// --- SCROLL REVEAL (ANIMAÇÃO DE ENTRADA AO ROLAR) ---
const reveal = () => {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        // Ativa a animação quando o elemento está a 100px da visão do usuário
        if (revealTop < windowHeight - 100) {
            el.classList.add('active');
        }
    });
};

// Escuta o evento de rolar a página e o carregamento inicial
window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);