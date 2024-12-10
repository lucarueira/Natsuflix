// Lista de links dos episódios
const episodios = [
    { title: "Episódio 1 ", link: "xx", img: "https://m.media-amazon.com/images/S/pv-target-images/bd78eabf47823f52eb98d2a89fca34cdb9dacd39cacc9465f2f811e05cc8ac45.jpg" },
    { title: "Episódio 2 ", link: "xx", img: "https://m.media-amazon.com/images/S/pv-target-images/bd78eabf47823f52eb98d2a89fca34cdb9dacd39cacc9465f2f811e05cc8ac45.jpg" },
    { title: "Episódio 3 ", link: "xx", img: "https://m.media-amazon.com/images/S/pv-target-images/bd78eabf47823f52eb98d2a89fca34cdb9dacd39cacc9465f2f811e05cc8ac45.jpg" },
    { title: "Episódio 4 ", link: "xx", img: "https://m.media-amazon.com/images/S/pv-target-images/bd78eabf47823f52eb98d2a89fca34cdb9dacd39cacc9465f2f811e05cc8ac45.jpg" },
    { title: "Episódio 5 ", link: "xx", img: "https://m.media-amazon.com/images/S/pv-target-images/bd78eabf47823f52eb98d2a89fca34cdb9dacd39cacc9465f2f811e05cc8ac45.jpg" },
    { title: "Episódio 6 ", link: "xx", img: "https://m.media-amazon.com/images/S/pv-target-images/bd78eabf47823f52eb98d2a89fca34cdb9dacd39cacc9465f2f811e05cc8ac45.jpg" },
    { title: "Episódio 7 ", link: "xx", img: "https://m.media-amazon.com/images/S/pv-target-images/bd78eabf47823f52eb98d2a89fca34cdb9dacd39cacc9465f2f811e05cc8ac45.jpg" },
    { title: "Episódio 8 ", link: "xx", img: "https://m.media-amazon.com/images/S/pv-target-images/bd78eabf47823f52eb98d2a89fca34cdb9dacd39cacc9465f2f811e05cc8ac45.jpg" },
    { title: "Episódio 9 ", link: "xx", img: "https://m.media-amazon.com/images/S/pv-target-images/bd78eabf47823f52eb98d2a89fca34cdb9dacd39cacc9465f2f811e05cc8ac45.jpg" },
    { title: "Episódio 10 ", link: "xx", img: "https://m.media-amazon.com/images/S/pv-target-images/bd78eabf47823f52eb98d2a89fca34cdb9dacd39cacc9465f2f811e05cc8ac45.jpg" },
 
 
 
 
   
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
