document.addEventListener('DOMContentLoaded', function () {
    const searchBar = document.querySelector('.search-bar');
    const options = document.querySelectorAll('.option');

    // Verifica se searchBar e options existem
    if (searchBar && options.length > 0) {
        // Função para filtrar as opções com base na pesquisa
        searchBar.addEventListener('input', function () {
            const query = searchBar.value.toLowerCase();

            options.forEach(option => {
                const text = option.textContent.toLowerCase();
                if (text.includes(query)) {
                    option.classList.remove('hidden'); // Mostrar a opção
                } else {
                    option.classList.add('hidden'); // Ocultar a opção
                }
            });
        });
    }

    // Redirecionamento ao clicar nos ícones do rodapé
    const homeIcon = document.getElementById('home-icon');
    const searchIcon = document.getElementById('search-icon');
    const listIcon = document.getElementById('list-icon');
    const heartIcon = document.getElementById('heart-icon');

    if (homeIcon) {
        homeIcon.addEventListener('click', function (e) {
            e.preventDefault();
            window.location.href = 'index.html';
        });
    }

    if (searchIcon) {
        searchIcon.addEventListener('click', function (e) {
            e.preventDefault();
            window.location.href = 'search.html';
        });
    }

    if (listIcon) {
        listIcon.addEventListener('click', function (e) {
            e.preventDefault();
            window.location.href = 'list.html';
        });
    }

    if (heartIcon) {
        heartIcon.addEventListener('click', function (e) {
            e.preventDefault();
            window.location.href = 'favorites.html';
        });
    }
});