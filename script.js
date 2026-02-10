// 1. Efeito de Revelação (Surgimento suave ao rolar)
function reveal() {
    var reveals = document.querySelectorAll(".reveal, .s-card, .feed-item");
    reveals.forEach(el => {
        var windowHeight = window.innerHeight;
        var elementTop = el.getBoundingClientRect().top;
        var elementVisible = 100;
        
        if (elementTop < windowHeight - elementVisible) {
            el.classList.add("active");
        }
    });
}

// Executa ao rolar e ao carregar a página
window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// 2. Lógica do Zoom da Galeria (Lightbox)
const zoomOverlay = document.getElementById('zoom-overlay');
const zoomImg = document.getElementById('zoom-img');

function openZoom(el) {
    zoomOverlay.style.display = 'flex';
    zoomImg.src = el.src;
}

// 3. Fechar o Zoom com a tecla ESC ou clicando fora
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") zoomOverlay.style.display = 'none';
});

// 4. Smooth Scroll (Navegação suave ao clicar nos links do menu)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});