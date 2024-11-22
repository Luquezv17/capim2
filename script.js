let currentIndex = 0;

// Função para mostrar a imagem do carrossel
function mudarImagem(direction) {
    const produtos = document.querySelectorAll(".produto");
    const totalProdutos = produtos.length;
    
    currentIndex += direction;
    
    if (currentIndex < 0) currentIndex = totalProdutos - 1;
    if (currentIndex >= totalProdutos) currentIndex = 0;
    
    // Esconde todas as imagens
    produtos.forEach((produto, index) => {
        produto.style.display = "none";
    });
    
    // Exibe a imagem atual
    produtos[currentIndex].style.display = "block";
}

// Função para abrir o modal
function abrirModal() {
    document.getElementById('modal').style.display = 'flex';
}

// Função para fechar o modal
function fecharModal() {
    document.getElementById('modal').style.display = 'none';
}

// Inicializa o carrossel mostrando a primeira imagem
window.onload = function() {
    mudarImagem(0);
}
