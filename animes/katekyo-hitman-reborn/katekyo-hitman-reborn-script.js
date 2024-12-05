// Lista de links dos episódios
const episodios = [
    { title: "Episódio 1", link: "x", img: "https://noticias.animeonegai.com/wp-content/uploads/2022/09/Katekyo-Hitman-Reborn-anime-min-2.jpg" },
    
   
];

// Função para gerar os episódios
function gerarEpisodios() {
    const episodiosList = document.getElementById('episodios-list');
    episodios.forEach(episodio => {
        const episodioDiv = document.createElement('div');
        episodioDiv.className = 'episodio';
        episodioDiv.onclick = () => window.location.href = episodio.link;

        const img = document.createElement('img');
        img.src = episodio.img;
        img.alt = episodio.title;

        const p = document.createElement('p');
        p.textContent = episodio.title;

        episodioDiv.appendChild(img);
        episodioDiv.appendChild(p);
        episodiosList.appendChild(episodioDiv);
    });
}

// Chama a função para gerar os episódios quando a página carregar
window.onload = gerarEpisodios;
