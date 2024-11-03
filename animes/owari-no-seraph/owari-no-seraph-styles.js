// Lista de links dos episódios
const episodios = [
    { title: "Episódio 1 S1", link: "https://drive.google.com/file/d/1WFbh8Ng-29JIUnwwGAg8CCOhtNfhBmJW/preview", img: "https://media.fstatic.com/Y5YnxY1RpSPwQBgFwV1G-v7fpak=/640x480/smart/filters:format(webp)/media/movies/photos/2015/01/owari-no-seraph_t114656.jpg" },
    { title: "Episódio 2 S1", link: "https://drive.google.com/file/d/1tXzIEX5PbIH97cQLDFnGmrJbv8yAi-1E/preview", img: "https://media.fstatic.com/Y5YnxY1RpSPwQBgFwV1G-v7fpak=/640x480/smart/filters:format(webp)/media/movies/photos/2015/01/owari-no-seraph_t114656.jpg" },
    { title: "Episódio 3 S1", link: "https://drive.google.com/file/d/1qz82RBfEV4hZ61ALpqIvuDNynYyfFeGU/preview", img: "https://media.fstatic.com/Y5YnxY1RpSPwQBgFwV1G-v7fpak=/640x480/smart/filters:format(webp)/media/movies/photos/2015/01/owari-no-seraph_t114656.jpg" },
    { title: "Episódio 4 S1", link: "https://drive.google.com/file/d/1lkfwgTEHARffBs_Oibt1_zEbfX1hr4gs/preview", img: "https://media.fstatic.com/Y5YnxY1RpSPwQBgFwV1G-v7fpak=/640x480/smart/filters:format(webp)/media/movies/photos/2015/01/owari-no-seraph_t114656.jpg" },
    { title: "Episódio 5 S1", link: " https://drive.google.com/file/d/1rw_cjyxzPgXH_J4a9kNl4ERMsBRzXVGz/preview", img: "https://media.fstatic.com/Y5YnxY1RpSPwQBgFwV1G-v7fpak=/640x480/smart/filters:format(webp)/media/movies/photos/2015/01/owari-no-seraph_t114656.jpg" },
    { title: "Episódio 6 S1", link: "https://drive.google.com/file/d/1iChsFawPeIGfOmSM-EWaxQYIdFS_LyDQ/preview", img: "https://media.fstatic.com/Y5YnxY1RpSPwQBgFwV1G-v7fpak=/640x480/smart/filters:format(webp)/media/movies/photos/2015/01/owari-no-seraph_t114656.jpg" },
    { title: "Episódio 7 S1", link: "https://drive.google.com/file/d/1oT2AMnq2WbpfWrOuJOhI8qOAHx0V86FC/preview", img: "https://media.fstatic.com/Y5YnxY1RpSPwQBgFwV1G-v7fpak=/640x480/smart/filters:format(webp)/media/movies/photos/2015/01/owari-no-seraph_t114656.jpg" },
    { title: "Episódio 8 S1", link: "https://drive.google.com/file/d/1HcvltAjcE--iLbhxSD-c8VD983HqK7O9/preview", img: "https://media.fstatic.com/Y5YnxY1RpSPwQBgFwV1G-v7fpak=/640x480/smart/filters:format(webp)/media/movies/photos/2015/01/owari-no-seraph_t114656.jpg" },
    { title: "Episódio 9 S1", link: "https://drive.google.com/file/d/1fA7hO3P0KAS_jen68zxx3ufIGhMxzx_O/preview", img: "https://media.fstatic.com/Y5YnxY1RpSPwQBgFwV1G-v7fpak=/640x480/smart/filters:format(webp)/media/movies/photos/2015/01/owari-no-seraph_t114656.jpg" },
    { title: "Episódio 10 S1", link: "https://drive.google.com/file/d/1sGdFXCeNLuqQ3F9xvf--wK2rVgCL1_8a/preview", img: "https://media.fstatic.com/Y5YnxY1RpSPwQBgFwV1G-v7fpak=/640x480/smart/filters:format(webp)/media/movies/photos/2015/01/owari-no-seraph_t114656.jpg" },
    { title: "Episódio 11 S1", link: "https://drive.google.com/file/d/11dA5LTS4CcSnwi2qHvAM2OEwR3Kpus20/preview", img: "https://media.fstatic.com/Y5YnxY1RpSPwQBgFwV1G-v7fpak=/640x480/smart/filters:format(webp)/media/movies/photos/2015/01/owari-no-seraph_t114656.jpg" },
    { title: "Episódio 12 S1", link: "https://drive.google.com/file/d/1wb0-dFQLUiya3LrexQ7_Ud6_gT9X74mL/preview", img: "https://media.fstatic.com/Y5YnxY1RpSPwQBgFwV1G-v7fpak=/640x480/smart/filters:format(webp)/media/movies/photos/2015/01/owari-no-seraph_t114656.jpg" },
    { title: "Episódio 1 S2", link: "https://drive.google.com/file/d/1tRVf2b2d1cUsG1HXh9Pw9xYJVQqPWq9k/preview", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH5kezqItvqiR8eVpbzfxglRtlmoVsxqrYuQ&s" },
    { title: "Episódio 2 S2", link: " https://drive.google.com/file/d/1u8xFfpDOOfFNV8518wRrOYRjhSwVarfn/preview", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH5kezqItvqiR8eVpbzfxglRtlmoVsxqrYuQ&s" },
    { title: "Episódio 3 S2", link: "https://drive.google.com/file/d/1u70pSoinFy6-arXH-5pGoAJlu1NKNw6T/preview", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH5kezqItvqiR8eVpbzfxglRtlmoVsxqrYuQ&s" },
    { title: "Episódio 4 S2", link: "https://drive.google.com/file/d/1epATPVKGlCHo6h9cfR6lMXREM2F-EqHJ/preview", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH5kezqItvqiR8eVpbzfxglRtlmoVsxqrYuQ&s" },
    { title: "Episódio 5 S2", link: "https://drive.google.com/file/d/1JLt5Af2luAPFrtnVK904zcP0A9r3KvzM/preview", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH5kezqItvqiR8eVpbzfxglRtlmoVsxqrYuQ&s" },
    { title: "Episódio 6 S2", link: " https://drive.google.com/file/d/12QRSaVphjfoqRYiPJQ-eNxE9CrgpLs6C/preview", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH5kezqItvqiR8eVpbzfxglRtlmoVsxqrYuQ&s" },
    { title: "Episódio 7 S2", link: "https://drive.google.com/file/d/1wmQN6LfKZWWhla9y97QP_IhSH7dR0ZwC/preview", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH5kezqItvqiR8eVpbzfxglRtlmoVsxqrYuQ&s" },
    { title: "Episódio 8 S2", link: "https://drive.google.com/file/d/1FA-xJFIK_qLtz0ua_gN2kENgbXdr8tmb/preview", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH5kezqItvqiR8eVpbzfxglRtlmoVsxqrYuQ&s" },
    { title: "Episódio 9 S2", link: "https://drive.google.com/file/d/1HEwLKLL93C8evh7p2VyTlLZG4-yC2ett/preview", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH5kezqItvqiR8eVpbzfxglRtlmoVsxqrYuQ&s" },
    { title: "Episódio 10 S2", link: "https://drive.google.com/file/d/1uLPD_hywBdd9uQefOBZO3YRKzdtO_Bs_/preview", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH5kezqItvqiR8eVpbzfxglRtlmoVsxqrYuQ&s" },
    { title: "Episódio 11 S2", link: "https://drive.google.com/file/d/1O7GUUycbfGtpsVUttvLPQ2X0x-LY1_SD/preview", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH5kezqItvqiR8eVpbzfxglRtlmoVsxqrYuQ&s" },
    { title: "Episódio 12 S2", link: "https://drive.google.com/file/d/1ZAe7qw8vYn6mDQkfLtR7SXgAKAOn-GUF/preview", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH5kezqItvqiR8eVpbzfxglRtlmoVsxqrYuQ&s" },
   
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
