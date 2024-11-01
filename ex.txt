// Lista de links dos episódios
const episodios = [
    { title: "Episódio 1", link: "https://drive.google.com/file/d/1WFbh8Ng-29JIUnwwGAg8CCOhtNfhBmJW/preview", img: "https://pm1.aminoapps.com/8208/ade263ed9090d86d71aafb86ef1dab9bbf75abf9r1-1820-1024v2_uhq.jpg" },
    { title: "Episódio 2", link: "episodio2.html", img: "episodio2.jpg" },
    { title: "Episódio 3", link: "episodio3.html", img: "episodio3.jpg" },
    { title: "Episódio 4", link: "episodio4.html", img: "episodio4.jpg" },
    { title: "Episódio 5", link: "episodio5.html", img: "episodio5.jpg" },
    { title: "Episódio 6", link: "episodio6.html", img: "episodio6.jpg" },
    { title: "Episódio 7", link: "episodio7.html", img: "episodio7.jpg" },
    { title: "Episódio 8", link: "episodio8.html", img: "episodio8.jpg" },
    { title: "Episódio 9", link: "episodio9.html", img: "episodio9.jpg" },
    { title: "Episódio 10", link: "episodio10.html", img: "episodio10.jpg" },
    { title: "Episódio 11", link: "episodio11.html", img: "episodio11.jpg" },
    { title: "Episódio 12", link: "episodio12.html", img: "episodio12.jpg" },
    { title: "Episódio 13", link: "episodio13.html", img: "episodio13.jpg" },
    { title: "Episódio 14", link: "episodio14.html", img: "episodio14.jpg" },
    { title: "Episódio 15", link: "episodio15.html", img: "episodio15.jpg" },
    { title: "Episódio 16", link: "episodio16.html", img: "episodio16.jpg" },
    { title: "Episódio 17", link: "episodio17.html", img: "episodio17.jpg" },
    { title: "Episódio 18", link: "episodio18.html", img: "episodio18.jpg" },
    { title: "Episódio 19", link: "episodio19.html", img: "episodio19.jpg" },
    { title: "Episódio 20", link: "episodio20.html", img: "episodio20.jpg" },
    { title: "Episódio 21", link: "episodio21.html", img: "episodio21.jpg" },
    { title: "Episódio 22", link: "episodio22.html", img: "episodio22.jpg" },
    { title: "Episódio 23", link: "episodio23.html", img: "episodio23.jpg" },
    { title: "Episódio 24", link: "episodio24.html", img: "episodio24.jpg" },
   
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
