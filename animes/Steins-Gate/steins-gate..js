// Lista de links dos episódios
const episodios = [
    { title: "Episódio 1 ", link: "https://drive.google.com/file/d/1ToT63ECwowG2BqRGdnzweoQg6XoJh0cR/preview", img: "https://m.media-amazon.com/images/S/pv-target-images/bd78eabf47823f52eb98d2a89fca34cdb9dacd39cacc9465f2f811e05cc8ac45.jpg" },
    { title: "Episódio 2 ", link: "https://drive.google.com/file/d/14faPJCPq5YdOAHflCzkzipZ-teN5RAtC/preview", img: "https://m.media-amazon.com/images/S/pv-target-images/bd78eabf47823f52eb98d2a89fca34cdb9dacd39cacc9465f2f811e05cc8ac45.jpg" },
    { title: "Episódio 3 ", link: "https://drive.google.com/file/d/1hpxjRNeBzzgd9e5w0WZBKpFvGxE1qJb4/preview", img: "https://m.media-amazon.com/images/S/pv-target-images/bd78eabf47823f52eb98d2a89fca34cdb9dacd39cacc9465f2f811e05cc8ac45.jpg" },
    { title: "Episódio 4 ", link: "https://drive.google.com/file/d/16GUSVU5J7VHr97J6_JkPsusK9q5icubl/preview", img: "https://m.media-amazon.com/images/S/pv-target-images/bd78eabf47823f52eb98d2a89fca34cdb9dacd39cacc9465f2f811e05cc8ac45.jpg" },
    { title: "Episódio 5 ", link: "https://drive.google.com/file/d/1a0FpEJIiQZ6wNwAOVrJXoyO0cFT4eJnU/preview", img: "https://m.media-amazon.com/images/S/pv-target-images/bd78eabf47823f52eb98d2a89fca34cdb9dacd39cacc9465f2f811e05cc8ac45.jpg" },
    { title: "Episódio 6 ", link: "https://drive.google.com/file/d/16tBLRcnq-HB9VM54t-ZMdpFrdPrwjnD6/preview", img: "https://m.media-amazon.com/images/S/pv-target-images/bd78eabf47823f52eb98d2a89fca34cdb9dacd39cacc9465f2f811e05cc8ac45.jpg" },
    { title: "Episódio 7 ", link: "https://drive.google.com/file/d/1MDWIS8nAMvZ2Rqo0c_TEvexvf1OYSwpq/preview", img: "https://m.media-amazon.com/images/S/pv-target-images/bd78eabf47823f52eb98d2a89fca34cdb9dacd39cacc9465f2f811e05cc8ac45.jpg" },
    { title: "Episódio 8 ", link: "https://drive.google.com/file/d/13-lGSCyx3x2v07wcvCR9IgCPjOacYqEr/preview", img: "https://m.media-amazon.com/images/S/pv-target-images/bd78eabf47823f52eb98d2a89fca34cdb9dacd39cacc9465f2f811e05cc8ac45.jpg" },
    { title: "Episódio 9 ", link: "https://drive.google.com/file/d/1CPawpmpEBXjABWGm5yZtFiUGi0WvNuVg/preview", img: "https://m.media-amazon.com/images/S/pv-target-images/bd78eabf47823f52eb98d2a89fca34cdb9dacd39cacc9465f2f811e05cc8ac45.jpg" },
    { title: "Episódio 10 ", link: "https://drive.google.com/file/d/12qiCV1P4JkELeBtxRyfc21JTrQ_63S5P/preview", img: "https://m.media-amazon.com/images/S/pv-target-images/bd78eabf47823f52eb98d2a89fca34cdb9dacd39cacc9465f2f811e05cc8ac45.jpg" },
 
 
 
 
   
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
