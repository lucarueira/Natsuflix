// Lista de links dos episódios
const episodios = [
    { title: "Episódio 1", link: "https://drive.google.com/file/d/1aQY8pDfHfUPWLsgsuGqn2E5MKtue6TeG/preview", img: "https://noticias.animeonegai.com/wp-content/uploads/2022/09/Katekyo-Hitman-Reborn-anime-min-2.jpg" },
    { title: "Episódio 2", link: "https://drive.google.com/file/d/1ozlDQtECxSkxIgeEwsBijsLZMPIr2nK2/preview", img: "https://noticias.animeonegai.com/wp-content/uploads/2022/09/Katekyo-Hitman-Reborn-anime-min-2.jpg" },
    { title: "Episódio 3", link: "https://drive.google.com/file/d/10udqqwHVrd2eAatwXf5gklD1fwWqQQzr/preview", img: "https://noticias.animeonegai.com/wp-content/uploads/2022/09/Katekyo-Hitman-Reborn-anime-min-2.jpg" },
    { title: "Episódio 4", link: "https://drive.google.com/file/d/1nc6C0IR_oY0CjBDTdj2pj-tPHHSRru-d/preview", img: "https://noticias.animeonegai.com/wp-content/uploads/2022/09/Katekyo-Hitman-Reborn-anime-min-2.jpg" },
    { title: "Episódio 5", link: "https://drive.google.com/file/d/126VQkbvl1mG_Zdh-Pz_raOP2nAnM9cA-/preview", img: "https://noticias.animeonegai.com/wp-content/uploads/2022/09/Katekyo-Hitman-Reborn-anime-min-2.jpg" },
    { title: "Episódio 6", link: "https://drive.google.com/file/d/1F1pFayvl6RLZcR6oqksMUFqsn2ZZnRsw/preview", img: "https://noticias.animeonegai.com/wp-content/uploads/2022/09/Katekyo-Hitman-Reborn-anime-min-2.jpg" },
    { title: "Episódio 7", link: "https://drive.google.com/file/d/1RefjQ0H2nM0zfS-PF49uBTGC6Cr89MHT/preview", img: "https://noticias.animeonegai.com/wp-content/uploads/2022/09/Katekyo-Hitman-Reborn-anime-min-2.jpg" },
    { title: "Episódio 8", link: "https://drive.google.com/file/d/129qR9dGgoW3nZ31dgiRBVGs_ESGW_hce/preview", img: "https://noticias.animeonegai.com/wp-content/uploads/2022/09/Katekyo-Hitman-Reborn-anime-min-2.jpg" },
    { title: "Episódio 9", link: "https://drive.google.com/file/d/15gFyiyKJgev3xlQ0_FPfuKnWjKRBtBTJ/preview", img: "https://noticias.animeonegai.com/wp-content/uploads/2022/09/Katekyo-Hitman-Reborn-anime-min-2.jpg" },
    { title: "Episódio 10", link: "https://drive.google.com/file/d/1QWJnKttqVC5-pREnxkmcQaZR4MtTBJtC/preview", img: "https://noticias.animeonegai.com/wp-content/uploads/2022/09/Katekyo-Hitman-Reborn-anime-min-2.jpg" },
    { title: "Episódio 11", link: "https://drive.google.com/file/d/1Tq3Ic3ET0PK_1dWFNK8qFU4su4XXEFWZ/preview", img: "https://noticias.animeonegai.com/wp-content/uploads/2022/09/Katekyo-Hitman-Reborn-anime-min-2.jpg" },
    { title: "Episódio 12", link: "https://drive.google.com/file/d/1ACKq9JIBHAvUZSq8eu2Kf4o9UWOlaTQy/preview", img: "https://noticias.animeonegai.com/wp-content/uploads/2022/09/Katekyo-Hitman-Reborn-anime-min-2.jpg" },
    { title: "Episódio 13", link: "https://drive.google.com/file/d/1ZtzHC5rgrpi7EKQuAHSdMCepuUuSpq8x/preview", img: "https://noticias.animeonegai.com/wp-content/uploads/2022/09/Katekyo-Hitman-Reborn-anime-min-2.jpg" },
    { title: "Episódio 14", link: "https://drive.google.com/file/d/1XksZjl4EZ7xd7oN0gTqQigfesdFGycgR/preview", img: "https://noticias.animeonegai.com/wp-content/uploads/2022/09/Katekyo-Hitman-Reborn-anime-min-2.jpg" },
    { title: "Episódio 15", link: "https://drive.google.com/file/d/17dEyxZB-iAAqLAY4KyYwyrWGCi7yWFmI/preview", img: "https://noticias.animeonegai.com/wp-content/uploads/2022/09/Katekyo-Hitman-Reborn-anime-min-2.jpg" },
    { title: "Episódio 16", link: "https://drive.google.com/file/d/1xDCGPhpavhGapW3huYP4N8hUNH1xINsu/preview", img: "https://noticias.animeonegai.com/wp-content/uploads/2022/09/Katekyo-Hitman-Reborn-anime-min-2.jpg" },
    { title: "Episódio 17", link: "https://drive.google.com/file/d/1R84JkRc2xeXBFvBzSLLrCLSl3ajpgvoP/preview", img: "https://noticias.animeonegai.com/wp-content/uploads/2022/09/Katekyo-Hitman-Reborn-anime-min-2.jpg" },
    { title: "Episódio 18", link: "https://drive.google.com/file/d/1rAb-koF-p3GsPh7zbrxeeJsSxIGDOU6y/preview", img: "https://noticias.animeonegai.com/wp-content/uploads/2022/09/Katekyo-Hitman-Reborn-anime-min-2.jpg" },
    { title: "Episódio 19", link: "https://drive.google.com/file/d/1j42F6JQPc1h6HYxdMsfJsJq4v52XiZHb/preview", img: "https://noticias.animeonegai.com/wp-content/uploads/2022/09/Katekyo-Hitman-Reborn-anime-min-2.jpg" },
    { title: "Episódio 20", link: "https://drive.google.com/file/d/1FE_23Eda-U0hXzznIrtLv_MUdN5CACOM/preview", img: "https://noticias.animeonegai.com/wp-content/uploads/2022/09/Katekyo-Hitman-Reborn-anime-min-2.jpg" },
    { title: "Episódio 21", link: "https://drive.google.com/file/d/1s20HNKE77tco9gBxz2pu_UyugmxkkSe4/preview", img: "https://noticias.animeonegai.com/wp-content/uploads/2022/09/Katekyo-Hitman-Reborn-anime-min-2.jpg" },
    { title: "Episódio 22", link: "https://drive.google.com/file/d/1n-oCSgk5cOKBAVi2bPpLhHyTjIai60oz/preview", img: "https://noticias.animeonegai.com/wp-content/uploads/2022/09/Katekyo-Hitman-Reborn-anime-min-2.jpg" },
    { title: "Episódio 23", link: "https://drive.google.com/file/d/1Pf55E2CUhoRiiGqyWvs4l162Cud7-bg1/preview", img: "https://noticias.animeonegai.com/wp-content/uploads/2022/09/Katekyo-Hitman-Reborn-anime-min-2.jpg" },
    { title: "Episódio 24", link: "https://drive.google.com/file/d/1hJ1heUqiItqyd5s2inBvNokm3UlC1Iof/preview", img: "https://noticias.animeonegai.com/wp-content/uploads/2022/09/Katekyo-Hitman-Reborn-anime-min-2.jpg" },
    { title: "Episódio 25", link: "https://drive.google.com/file/d/1VXgn2eZMuEKzwPv4AZ8rMIpFdQFW5WLN/preview", img: "https://noticias.animeonegai.com/wp-content/uploads/2022/09/Katekyo-Hitman-Reborn-anime-min-2.jpg" },
    { title: "Episódio 26", link: "https://drive.google.com/file/d/1Dv_uxU07vGPkJ-miIw6huc0PoaLLwDWp/preview", img: "https://noticias.animeonegai.com/wp-content/uploads/2022/09/Katekyo-Hitman-Reborn-anime-min-2.jpg" },
    { title: "Episódio 27", link: "https://drive.google.com/file/d/1c6VaUZLLOlT3vceq5IM2PTwDGCQhf9C5/preview", img: "https://noticias.animeonegai.com/wp-content/uploads/2022/09/Katekyo-Hitman-Reborn-anime-min-2.jpg" },
    { title: "Episódio 28", link: "https://drive.google.com/file/d/1IV37U-eaSelOqXyqZ6RDN4UQSnPZEqKY/preview", img: "https://noticias.animeonegai.com/wp-content/uploads/2022/09/Katekyo-Hitman-Reborn-anime-min-2.jpg" },
    { title: "Episódio 29", link: "https://drive.google.com/file/d/1FFHhUeuikpVHA18Fi0hmronDUuSA3otl/preview", img: "https://noticias.animeonegai.com/wp-content/uploads/2022/09/Katekyo-Hitman-Reborn-anime-min-2.jpg" },
    { title: "Episódio 30", link: "https://drive.google.com/file/d/1rGkCH_d8sX3x7cXS0RpB16ldrJto7ua7/preview", img: "https://noticias.animeonegai.com/wp-content/uploads/2022/09/Katekyo-Hitman-Reborn-anime-min-2.jpg" },
    
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
