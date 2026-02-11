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
        window.location.href = "admin.html";
    } else {
        alert("Senha incorreta!");
        inputSenha.value = '';
    }
}

function openZoom(el) {
    const overlay = document.getElementById('zoom-overlay');
    const img = document.getElementById('zoom-img');
    overlay.style.display = 'flex';
    img.src = el.src;
}