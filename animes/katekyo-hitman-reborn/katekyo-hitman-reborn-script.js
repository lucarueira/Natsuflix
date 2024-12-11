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
