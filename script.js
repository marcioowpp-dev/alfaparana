// --- MODAL SENHA ---
const modal = document.getElementById('modal-admin');
const inputSenha = document.getElementById('input-senha');

document.querySelector('.nav-btn-adm')?.addEventListener('click', function(e) {
    e.preventDefault();
    modal.style.display = 'flex';
    inputSenha.focus();
});

function fecharModal() {
    modal.style.display = 'none';
    inputSenha.value = '';
}

function verificarSenha() {
    if (inputSenha.value === "unimedhe12") {
        // Em vez de _top, usamos _self para abrir dentro do próprio quadro
        // Ou apenas redirecionamos a localização
        window.location.href = "admin.html";
    } else {
        alert("Senha incorreta!");
        inputSenha.value = '';
    }
}

// --- VER MAIS ---
document.getElementById('btn-load-more')?.addEventListener('click', function() {
    document.querySelectorAll('.item.hidden').forEach(item => {
        item.classList.remove('hidden');
        item.classList.add('reveal', 'active');
    });
    this.style.display = 'none';
});

// --- ZOOM ---
function openZoom(el) {
    const overlay = document.getElementById('zoom-overlay');
    const img = document.getElementById('zoom-img');
    if (overlay && img) {
        overlay.style.display = 'flex';
        img.src = el.src;
        document.body.style.overflow = 'hidden';
    }
}

// --- REVEAL ---
const reveal = () => {
    document.querySelectorAll('.reveal').forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 50) {
            el.classList.add('active');
        }
    });
};
window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);