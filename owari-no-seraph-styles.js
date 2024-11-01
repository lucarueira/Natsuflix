// Lista de links dos episódios
const episodios = [
    { title: "Episódio 1", link: "https://drive.google.com/file/d/1WFbh8Ng-29JIUnwwGAg8CCOhtNfhBmJW/preview", img: "https://media.fstatic.com/Y5YnxY1RpSPwQBgFwV1G-v7fpak=/640x480/smart/filters:format(webp)/media/movies/photos/2015/01/owari-no-seraph_t114656.jpg" },
    { title: "Episódio 2", link: "https://drive.google.com/file/d/14VW0neFsL16U53FCLis5f-DruK4OJEPp/preview", img: "https://media.fstatic.com/Y5YnxY1RpSPwQBgFwV1G-v7fpak=/640x480/smart/filters:format(webp)/media/movies/photos/2015/01/owari-no-seraph_t114656.jpg" },
    { title: "Episódio 3", link: "https://drive.google.com/file/d/1IzRSpR4Psuv9z1xhloGzocg_pVobjAHC/preview", img: "https://media.fstatic.com/Y5YnxY1RpSPwQBgFwV1G-v7fpak=/640x480/smart/filters:format(webp)/media/movies/photos/2015/01/owari-no-seraph_t114656.jpg" },
    { title: "Episódio 4", link: "https://drive.google.com/file/d/1aMK9fh8Z5tCzA2CbQBny34rill9yMkke/preview", img: "https://media.fstatic.com/Y5YnxY1RpSPwQBgFwV1G-v7fpak=/640x480/smart/filters:format(webp)/media/movies/photos/2015/01/owari-no-seraph_t114656.jpg" },
    { title: "Episódio 5", link: "https://drive.google.com/file/d/1IuaTLSdjkrJaoZGdnijf0yO3720DmQUD/preview", img: "https://media.fstatic.com/Y5YnxY1RpSPwQBgFwV1G-v7fpak=/640x480/smart/filters:format(webp)/media/movies/photos/2015/01/owari-no-seraph_t114656.jpg" },
    { title: "Episódio 6", link: "episodio6.html", img: "https://media.fstatic.com/Y5YnxY1RpSPwQBgFwV1G-v7fpak=/640x480/smart/filters:format(webp)/media/movies/photos/2015/01/owari-no-seraph_t114656.jpg" },
    { title: "Episódio 7", link: "episodio7.html", img: "https://media.fstatic.com/Y5YnxY1RpSPwQBgFwV1G-v7fpak=/640x480/smart/filters:format(webp)/media/movies/photos/2015/01/owari-no-seraph_t114656.jpg" },
    { title: "Episódio 8", link: "episodio8.html", img: "https://media.fstatic.com/Y5YnxY1RpSPwQBgFwV1G-v7fpak=/640x480/smart/filters:format(webp)/media/movies/photos/2015/01/owari-no-seraph_t114656.jpg" },
    { title: "Episódio 9", link: "episodio9.html", img: "https://media.fstatic.com/Y5YnxY1RpSPwQBgFwV1G-v7fpak=/640x480/smart/filters:format(webp)/media/movies/photos/2015/01/owari-no-seraph_t114656.jpg" },
    { title: "Episódio 10", link: "episodio10.html", img: "https://media.fstatic.com/Y5YnxY1RpSPwQBgFwV1G-v7fpak=/640x480/smart/filters:format(webp)/media/movies/photos/2015/01/owari-no-seraph_t114656.jpg" },
    { title: "Episódio 11", link: "episodio11.html", img: "https://media.fstatic.com/Y5YnxY1RpSPwQBgFwV1G-v7fpak=/640x480/smart/filters:format(webp)/media/movies/photos/2015/01/owari-no-seraph_t114656.jpg" },
    { title: "Episódio 12", link: "episodio12.html", img: "https://media.fstatic.com/Y5YnxY1RpSPwQBgFwV1G-v7fpak=/640x480/smart/filters:format(webp)/media/movies/photos/2015/01/owari-no-seraph_t114656.jpg" },
    { title: "Episódio 13", link: "episodio13.html", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH5kezqItvqiR8eVpbzfxglRtlmoVsxqrYuQ&s" },
    { title: "Episódio 14", link: "episodio14.html", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH5kezqItvqiR8eVpbzfxglRtlmoVsxqrYuQ&s" },
    { title: "Episódio 15", link: "episodio15.html", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH5kezqItvqiR8eVpbzfxglRtlmoVsxqrYuQ&s" },
    { title: "Episódio 16", link: "episodio16.html", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH5kezqItvqiR8eVpbzfxglRtlmoVsxqrYuQ&s" },
    { title: "Episódio 17", link: "episodio17.html", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH5kezqItvqiR8eVpbzfxglRtlmoVsxqrYuQ&s" },
    { title: "Episódio 18", link: "episodio18.html", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH5kezqItvqiR8eVpbzfxglRtlmoVsxqrYuQ&s" },
    { title: "Episódio 19", link: "episodio19.html", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH5kezqItvqiR8eVpbzfxglRtlmoVsxqrYuQ&s" },
    { title: "Episódio 20", link: "episodio20.html", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH5kezqItvqiR8eVpbzfxglRtlmoVsxqrYuQ&s" },
    { title: "Episódio 21", link: "episodio21.html", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH5kezqItvqiR8eVpbzfxglRtlmoVsxqrYuQ&s" },
    { title: "Episódio 22", link: "episodio22.html", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH5kezqItvqiR8eVpbzfxglRtlmoVsxqrYuQ&s" },
    { title: "Episódio 23", link: "episodio23.html", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH5kezqItvqiR8eVpbzfxglRtlmoVsxqrYuQ&s" },
    { title: "Episódio 24", link: "episodio24.html", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH5kezqItvqiR8eVpbzfxglRtlmoVsxqrYuQ&s" },
   
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
