// Função para carregar dados da série e exibir episódios
function loadSeries() {
    const urlParams = new URLSearchParams(window.location.search);
    const seriesName = urlParams.get("name");

    if (!seriesName) {
        document.getElementById("series-title").textContent = "Série não encontrada!";
        return;
    }

    const pages = JSON.parse(localStorage.getItem('pages')) || [];
    const seriesData = pages.find(page => page.name === seriesName);

    if (!seriesData) {
        document.getElementById("series-title").textContent = "Série não encontrada!";
        return;
    }

    document.getElementById("series-title").textContent = seriesData.name;
    const episodesContainer = document.getElementById("episodes-container");

    seriesData.episodes.forEach((episode, index) => {
        const episodeDiv = document.createElement('div');
        episodeDiv.className = 'episode';

        const img = document.createElement('img');
        img.src = 'episode-thumbnail.jpg';
        img.alt = `Thumbnail do ${episode.name}`;
        img.onclick = () => {
            if (episode.link) {
                window.open(episode.link, "_blank");
            } else {
                alert("Link não configurado!");
            }
        };

        const title = document.createElement('p');
        title.textContent = episode.name;

        episodeDiv.appendChild(img);
        episodeDiv.appendChild(title);
        episodesContainer.appendChild(episodeDiv);
    });
}

// Chama a função ao carregar a página
window.onload = loadSeries;
