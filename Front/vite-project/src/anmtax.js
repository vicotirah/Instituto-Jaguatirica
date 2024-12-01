document.addEventListener("DOMContentLoaded", () => {
    // Oculta todas as categorias inicialmente
    const categories = document.querySelectorAll(".category");
    categories.forEach(category => {
        category.style.display = "none";
    });

    // Exibe apenas a categoria "Mamíferos"
    const defaultCategory = document.getElementById("mammalia");
    if (defaultCategory) {
        defaultCategory.style.display = "block";
    }

    // Adiciona evento de clique para o menu lateral
    const menuLinks = document.querySelectorAll(".sidebar ul li a");
    menuLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); // Previne o comportamento padrão do link

            // Oculta todas as categorias novamente
            categories.forEach(category => {
                category.style.display = "none";
            });

            // Obtém o ID da categoria clicada
            const targetId = link.getAttribute("href").substring(1);
            const targetCategory = document.getElementById(targetId);

            // Exibe a categoria correspondente
            if (targetCategory) {
                targetCategory.style.display = "block";
            }
        });
    });
});
