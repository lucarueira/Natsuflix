// Função para criar a série e armazenar dados no localStorage
function createSeriesPage() {
    const pageName = document.getElementById('pageName').value;
    const episodeCount = parseInt(document.getElementById('episodeCount').value);
    const message = document.getElementById('message');

    if (pageName === "" || isNaN(episodeCount) || episodeCount < 1) {
        message.style.color = "red";
        message.textContent = "Por favor, insira um nome válido e quantidade de episódios.";
        return;
    }

    // Dados da nova página
    const episodes = Array.from({ length: episodeCount }, (_, i) => ({
        name: `Episódio ${i + 1}`,
        link: "", // Campo vazio para link a ser adicionado posteriormente
    }));

    const pages = JSON.parse(localStorage.getItem('pages')) || [];
    pages.push({ name: pageName, episodes });
    localStorage.setItem('pages', JSON.stringify(pages));

    message.style.color = "green";
    message.textContent = `Página "${pageName}" criada com sucesso!`;

    // Atualiza a lista de páginas criadas
    loadPageList();
}

// Carrega a lista de páginas criadas
function loadPageList() {
    const pages = JSON.parse(localStorage.getItem('pages')) || [];
    const pageListElement = document.getElementById('pageList');
    pageListElement.innerHTML = '';

    pages.forEach(page => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = `serie.html?name=${encodeURIComponent(page.name)}`;
        link.textContent = page.name;
        listItem.appendChild(link);
        pageListElement.appendChild(listItem);
    });
}

// Carrega a lista ao abrir a página
window.onload = loadPageList;
